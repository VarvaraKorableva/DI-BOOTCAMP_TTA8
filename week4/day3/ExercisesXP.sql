#Exercise 1: DVD Rental

--Get a list of all the languages, from the language table.
SELECT name FROM language
--Get a list of all films joined with their languages – select the following details : 
--film title, description, and language name.
select * from film

select film.title, film.description, language.name
FROM film
INNER JOIN language
ON film.language_id = language.language_id
/*
Get all languages, even if there are no films in those languages – 
select the following details : film title, description, and language name.
*/

SELECT 
    film.title, 
    film.description, 
    language.name AS language_name
FROM 
    language
LEFT JOIN 
    film ON language.language_id = film.language_id;
---	DROP TABLE IF EXISTS new_film;
--Create a new table called new_film with the following columns : id, name. Add some new films to the table.	
CREATE TABLE new_film(
	new_film_id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR(255) NOT NULL
)
	
INSERT INTO new_film(new_film_id, name)
VALUES (1,'Pandas'),
	(2, 'Monkeys'),
	(3, 'Elephants')
			
--select * from new_film		

--SELECT * FROM customer_review

CREATE TABLE customer_review(
	review_id SERIAL PRIMARY KEY NOT NULL,
	title TEXT,
	score VARCHAR(10),
	review_text TEXT,
	last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	film_id INTEGER REFERENCES new_film(new_film_id) ON DELETE CASCADE,
    language_id INTEGER REFERENCES language(language_id)
)
--Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

INSERT INTO customer_review(reviews, title, score, review_text, film_id, language_id)
VALUES ('some text', 'great', 10, 'bla bla bla', 1, 1)
('some text', 'not bad film', 7, 'bla bla bla', 2, 2)
--DROP TABLE IF EXISTS customer_review;
--ALTER TABLE customer_review UPDATE COLUMN film_id INTEGER REFERENCES new_film(new_film_id) ON DELETE CASCADE,

--ALTER TABLE customer_review ADD CONSTRAINT film_id_in_reviews FOREIGN KEY (film_id) REFERENCES new_film(new_film_id) ON DELETE CASCADE;

SELECT new_film.name, customer_review.title, customer_review.score, language.name
FROM customer_review
INNER JOIN new_film
ON new_film.new_film_id = customer_review.film_id
INNER JOIN language
ON language.language_id = customer_review.language_id
--ALTER TABLE customer_review DROP COLUMN reviews

--ALTER TABLE customer_review DROP CONSTRAINT IF EXISTS customer_review_film_id_fkey
DELETE FROM new_film WHERE new_film_id = 2

--Exercise 2 : DVD Rental

--Use UPDATE to change the language of some films. Make sure that you use valid languages.

UPDATE film 
SET language_id = (SELECT language.language_id from language where name = 'French')
WHERE film_id IN (5, 100, 112) 

select language.language_id from language where name = 'French'

--Which foreign keys (references) are defined for the customer table? How does this affect the way 
--in which we INSERT into the customer table?

--I have to specify an existing id from the tables store.id and adress_id

/*We created a new table called customer_review. Drop this table. Is this an easy step, 
or does it need extra checking?*/

--We haven't got customer_review

--Find out how many rentals are still outstanding (ie. have not been returned to the store yet). 

SELECT COUNT(RENTAL_ID) FROM rental WHERE RETURN_DATE IS NULL

--Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT f.title, f.rental_rate
FROM film AS f
INNER JOIN inventory AS i ON f.film_id = i.film_id
INNER JOIN rental AS r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;

-- Your friend is at the store, and decides to rent a movie. 
-- He knows he wants to see 4 movies, but he can’t remember their names.
-- Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT actor_id FROM actor WHERE (first_name='Penelope') AND (last_name='Monroe') -- Her Actor ID 120
-- SELECT film_id FROM film_actor WHERE (actor_id='120')
-- SELECT ARRAY_AGG(film_id) AS film_ids FROM film_actor WHERE actor_id = '120';
-- SELECT title, film_id, fulltext FROM film WHERE film_id IN (SELECT film_id FROM film_actor WHERE actor_id = ('120'));
-- SELECT title, film_id, description

--VERSION SIMILAR TO SOLUTION VIDEO
-- FROM film
-- WHERE film_id IN (
--     SELECT film_id 
--     FROM film_actor 
--     WHERE actor_id IN (
--         SELECT actor_id 
--         FROM actor 
--         WHERE first_name = 'Penelope' AND last_name = 'Monroe'
--     )
-- ) AND fulltext @@ to_tsquery('sumo');

-- MY VERSION without using tsquery 
-- SELECT title, film_id, description
-- FROM film
-- WHERE film_id IN (
--     SELECT film_id 
--     FROM film_actor 
--     WHERE actor_id IN (
--         SELECT actor_id 
--         FROM actor 
--         WHERE first_name = 'Penelope' AND last_name = 'Monroe'
--     )
-- ) AND (
--     LOWER(description) LIKE '%sumo%' OR 
--     LOWER(description) LIKE '%wrestler%' OR 
--     LOWER(description) LIKE '%sumo wrestler%'
-- );


--BEST VERSION THAT I THOUGHT OF AFTER DOING THE FIRST TWO
SELECT title FROM film
WHERE film_id IN (
    (SELECT film_id FROM film
    WHERE LOWER(description) LIKE '%sumo%' OR 
          LOWER(description) LIKE '%wrestler%' OR 
          LOWER(description) LIKE '%sumo wrestler%')
    INTERSECT
    (SELECT film_id FROM film_actor WHERE actor_id = '120')
);

--BEST VERSION THAT I THOUGHT OF AFTER DOING THE FIRST TWO
SELECT title FROM film
WHERE film_id IN (
    (SELECT film_id FROM film
    WHERE LOWER(description) LIKE '%sumo%' OR 
          LOWER(description) LIKE '%wrestler%' OR 
          LOWER(description) LIKE '%sumo wrestler%')
    INTERSECT
    (SELECT film_id FROM film_actor WHERE actor_id = '120')
);

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT title, length, rating, description from film 
WHERE length < 60
AND rating = 'R'
AND LOWER(description) LIKE '%documentary%'

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.

-- Step 1: Find Matthew Mahan's Customer ID (323)
SELECT customer_id
FROM customer
WHERE first_name = 'Matthew' AND last_name = 'Mahan';

-- Step 2: Find Rental IDs for Matthew Mahan's Rentals (7275. 7937, 8790)
SELECT rental_id
FROM rental
WHERE customer_id = 323
AND return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- Step 3: Find Payment Details for These Rentals (7937)
SELECT rental_id
FROM payment
WHERE customer_id = 323
AND amount > 4.00
AND rental_id IN (7275, 7937, 8790);

-- Step 4: Find the Inventory IDs from the Rental IDs (3944)
SELECT inventory_id
FROM rental
WHERE rental_id = 7937;

-- Step 5: Find the Film IDs from the Inventory IDs (859)
SELECT film_id
FROM inventory
WHERE inventory_id = 3944;

-- Step 6: Get the Film Titles from the Film IDs
SELECT title
FROM film
WHERE film_id = 859;

SELECT f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
JOIN payment p ON r.rental_id = p.rental_id
WHERE c.first_name = 'Matthew' 
AND c.last_name = 'Mahan'
AND p.amount > 4.00
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01'


-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.

SELECT f.title, f.description, f.replacement_cost
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE (LOWER(f.title) LIKE '%boat%' OR LOWER(f.description) LIKE '%boat%')
AND c.first_name = 'Matthew' AND c.last_name = 'Mahan'
ORDER BY f.replacement_cost DESC;

-- Answer it has to be one of those two films "Stone Fire" or "Money Harold"
-- We need to ask Matthew to look at the description and make the final choice.
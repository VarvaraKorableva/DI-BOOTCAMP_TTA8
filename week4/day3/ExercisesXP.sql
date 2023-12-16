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
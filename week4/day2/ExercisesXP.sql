--Exercise 1 : Items And Customers

SELECT * FROM items ORDER BY price;
SELECT * FROM items WHERE price >= 80 ORDER BY price DESC;
SELECT name FROM customers ORDER BY name LIMIT 3;
SELECT lastname FROM customers ORDER BY lastname DESC;

--Exercise 2 : Dvdrental Database

SELECT * FROM customer;
SELECT first_name || ' ' || last_name AS full_name FROM customer; 
SELECT DISTINCT create_date FROM customer; -- Чтобы не повторялись (DISTINCT)
SELECT * FROM customer ORDER BY first_name DESC;
SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC;
SELECT address, phone FROM address WHERE district = 'Texas';
SELECT * FROM film WHERE film_id IN (15, 150);
SELECT film_id, title, description, length, rental_rate FROM film
WHERE LOWER(title) = LOWER('your_film_name');--'Carol Texas'
SELECT film_id, title, description, length, rental_rate FROM film
WHERE LOWER(title) LIKE LOWER('AB%'); --two letters
SELECT film_id, title, description, length, rental_rate FROM film ORDER BY rental_rate LIMIT 10;
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE rental_rate > (
    SELECT rental_rate
    FROM film
    ORDER BY rental_rate
    LIMIT 1 OFFSET 9
) ORDER BY rental_rate LIMIT 10;
SELECT customer.first_name, customer.last_name, payment.amount, payment.payment_date
FROM customer
JOIN payment ON customer.customer_id = payment.customer_id
ORDER BY customer.customer_id;
SELECT * FROM film WHERE film.film_id NOT IN (SELECT inventory.film_id FROM inventory);
SELECT city.city, country.country FROM city
JOIN country ON city.country_id = country.country_id;
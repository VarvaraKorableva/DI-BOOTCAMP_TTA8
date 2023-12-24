CREATE TABLE customer (
	customer_id SERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL
)
CREATE TABLE customer_profile (
	id SERIAL PRIMARY KEY,
	isLoggedIn BOOLEAN DEFAULT False,
	customer_id INT REFERENCES customer(customer_id)
)

-- Insert those customers
INSERT INTO customer (first_name, last_name)
VALUES 
	('John', 'Doe'),
	('Jerome', 'Lalu'),
	('Lea', 'Rive');

-- Insert those customer profile, use subqueries
INSERT INTO customer_profile (isLoggedIn, customer_id)
VALUES 
    (TRUE, (SELECT customer_id FROM customer WHERE first_name = 'John' AND last_name = 'Doe'));

INSERT INTO customer_profile (isLoggedIn, customer_id)
VALUES 
    (FALSE, (SELECT customer_id FROM customer WHERE first_name = 'Jerome' AND last_name = 'Lalu'));
	
-- Use the relevant types of Joins to display:
-- The first_name of the LoggedIn customers
SELECT c.first_name FROM customer c
JOIN customer_profile cp ON c.customer_id = cp.customer_id
WHERE cp.isLoggedIn = TRUE;
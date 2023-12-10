TABLE CREATE customers (
	id serial PRIMARY KEY,
	first_name VARCHAR (50) NOT NULL,
    last_name VARCHAR (100) NOT NULL,
)

INSERT INTO customers (first_name, last_name) 
VALUES('Greg', 'Jones'),
    ('Sandra', 'Jones'),
    ('Scott', 'Scott'),
	('Trevor', 'Green'),
    ('Melanie', 'Johnson'),

CREATE TABLE items (
    id serial PRIMARY KEY,
    item_size varchar(50),
    price numeric
);

INSERT INTO items (item_size, price) 
VALUES('Small Desk', 100),
    ('Large Desk', 300),
    ('Fan', 80);

SELECT * from items
SELECT price from items WHERE price > 80
SELECT price from items WHERE price < 300

SELECT lastname FROM customers WHERE lastname = 'Smith';
SELECT lastname FROM customers WHERE lastname = 'Jones';
SELECT lastname FROM customers WHERE lastname != 'Jones';



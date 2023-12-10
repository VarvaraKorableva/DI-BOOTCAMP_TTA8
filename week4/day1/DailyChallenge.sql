CREATE TABLE actors(
 actor_id SERIAL PRIMARY KEY,
 last_name VARCHAR (100) NOT NULL,
 first_name VARCHAR (50) NOT NULL,
 age DATE NOT NULL,
 number_oscars SMALLINT NOT NULL
)

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Cate','Blanchett','05/14/1969', 2),

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Cate','Blanchett','05/14/1969', 2),
('Audrey','Hepburn','05/04/1929', 1),
('Kate','Winslet','10/05/1975', 3),
('Morgan','Freeman','11/15/1975', 3),
('Paul','Newman','10/05/1925', 2),
('Henry','Fonda','01/12/1925', 1)

INSERT INTO actors (first_name, last_name, age, number_oscars) 
/*ERROR:  null value in column "age" of relation "actors" violates not-null constraint
DETAIL:  Failing row contains (11, , John, null, 2).
SQL state: 23502*/

SELECT * FROM actors
SELECT COUNT(*) FROM actors


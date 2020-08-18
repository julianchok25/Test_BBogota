DROP TABLE IF EXISTS person;
CREATE TABLE person
(
    id SERIAL PRIMARY KEY,
    fullname TEXT NOT NULL,
    birth DATE
);

INSERT INTO person
    (fullname, birth)
VALUES
    ('Julian Villegas', '2020-08-16');

CREATE DATABASE tacosdb;

USE tacosdb;

CREATE TABLE tacos (
id INT AUTO_INCREMENT NOT NULL,
taco VARCHAR(100) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO tacos (taco)
VALUES ("Torchy's Knockoff Taco");






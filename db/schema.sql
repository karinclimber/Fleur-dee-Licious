-- Create the database `gehxhwt2053r71at` and specified it for use.

USE `gehxhwt2053r71at`;

-- Create the table plans.
CREATE TABLE foods
(
id int NOT NULL AUTO_INCREMENT,
food_name varchar(255) NOT NULL,
eaten boolean not null,
createdAt timestamp not null,
PRIMARY KEY (id)
);

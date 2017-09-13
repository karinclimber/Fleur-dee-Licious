DROP DATABASE IF EXISTS `zo0t9ienlwsd9olu`;

-- Create the database `zo0t9ienlwsd9olu` and specified it for use.
CREATE DATABASE `zo0t9ienlwsd9olu`;
USE `zo0t9ienlwsd9olu`;

-- Create the table plans.
CREATE TABLE foods
(
id int NOT NULL AUTO_INCREMENT,
food_name varchar(255) NOT NULL,
eaten boolean not null,
createdAt timestamp not null,
PRIMARY KEY (id)
);

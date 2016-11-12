CREATE DATABASE burgers_db;

USE  burgers_db;

CREATE table burgers(
id INT AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(100) NOT NULL,
devoured boolean default false,
date  TIMESTAMP ,
primary key(id)
);
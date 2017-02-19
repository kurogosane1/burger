CREATE DATABASE IF NOT EXISTS burger_db;

-- we are telling the system to use burger_db
USE burger_db;

CREATE TABLE IF NOT EXISTS burgers
(
    id INT(30)AUTO_INCREMENT NOT NULL PRIMARY KEY,
    burger_name VARCHAR(30),
    devoured BOOLEAN,
    date TIMESTAMP
);





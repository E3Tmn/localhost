CREATE DATABASE IF NOT EXISTS todo;

USE todo;

CREATE TABLE notes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  note varchar(256) ,
  stats INT
);

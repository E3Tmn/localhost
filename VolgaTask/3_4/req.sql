CREATE DATABASE IF NOT EXISTS Sport;

USE Sport;

CREATE TABLE IF NOT EXISTS Man (
  id INT PRIMARY KEY AUTO_INCREMENT,
  FIO VARCHAR(256),
  email VARCHAR(50),
  phoneNumber VARCHAR(20),
  birthday DATE,
  age INT,
  recordTime DATETIME,
  passportNum INT,
  midPlace FLOAT,
  bio TEXT,
  video VARCHAR(256)
);
CREATE TABLE IF NOT EXISTS ResultEvent (
  id INT PRIMARY KEY AUTO_INCREMENT,
  idAthlete INT,
  idEvent INT
);

SELECT Man.FIO, count(Man.FIO) sm
FROM Man LEFT JOIN ResultEvent 
ON Man.id = ResultEvent.idAthlete
group by MAN.FIO
order by sm desc
limit 3;

CREATE TABLE continents (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  name TEXT
);

INSERT INTO continents(name)
  VALUES('Europe');


INSERT INTO continents(name)
  VALUES('South America');


INSERT INTO continents(name)
  VALUES('Asia');


INSERT INTO continents(name)
  VALUES('Antarctica');


INSERT INTO continents(name)
  VALUES('North America');


INSERT INTO continents(name)
  VALUES('Africa');


INSERT INTO continents(name)
  VALUES('Oceania');

SELECT * FROM continents;

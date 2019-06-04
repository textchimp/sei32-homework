CREATE TABLE countries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  name TEXT,
  continent_id INTEGER
);

INSERT INTO countries (name, continent_id)
  VALUES ('Italy', 1);

INSERT INTO countries (name, continent_id)
  VALUES ('Peru', 2);

INSERT INTO countries (name, continent_id)
  VALUES ('France', 1);

INSERT INTO countries (name, continent_id)
  VALUES ('Japan', 3);

INSERT INTO countries (name, continent_id)
  VALUES ('Antarctica', 4);

INSERT INTO countries (name, continent_id)
  VALUES ('China', 3);

INSERT INTO countries (name, continent_id)
  VALUES ('America', 5);

INSERT INTO countries (name, continent_id)
  VALUES ('South Africa', 6);

INSERT INTO countries (name, continent_id)
  VALUES ('New Zealand', 7);

SELECT * FROM countries;

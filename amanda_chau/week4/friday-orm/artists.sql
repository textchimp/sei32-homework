CREATE TABLE artists (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  birthdate TEXT,
  alive BOOLEAN,
  nationality TEXT,
  movement TEXT
);

INSERT INTO artists( name, birthdate, alive, nationality, movement )
  VALUES( 'Banksy', '1974', 1, 'British', 'Street art');

INSERT INTO artists( name, birthdate, alive, nationality, movement )
  VALUES( 'Henri Matisse', '31 December 1869', 0, 'French', 'Fauvism, Modernism, Post-Impressionism');

INSERT INTO artists( name, birthdate, alive, nationality, movement )
  VALUES( 'Emily Carr', '13 December 1871', 0, 'Canadian', 'Modernism, Post-Impressionism');


SELECT * FROM artists;

CREATE TABLE bands (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  genre TEXT,
  albums INTEGER,
  active BOOLEAN,
  image_url TEXT
);


INSERT INTO bands(name, genre, albums, active, image_url)
VALUES(
  "Oasis", "Britpop", 7, 0, "http://static1.squarespace.com/static/583863c1e6f2e1216884123c/58386b3b4402431df91128b8/5a859bcee2c4835ce8fd9a3e/1519128071637/facebook-logo.jpg?format=1500w"
);

INSERT INTO bands(name, genre, albums, active, image_url)
VALUES(
  "Blur", "Britpop", 8, 1, "https://i.pinimg.com/originals/73/cf/a0/73cfa0e1eb27d5090f854ef5781b21e4.jpg"
);

INSERT INTO bands(name, genre, albums, active, image_url)
VALUES(
  "Nine Inch Nails", "Industrial", 9, 1, "https://cdn.shopify.com/s/files/1/0035/2990/0150/products/57_5d36e14f-1a39-4c75-b5eb-a3c9e9b6c82d_grande.jpg?v=1527867561"
);

SELECT * FROM bands;

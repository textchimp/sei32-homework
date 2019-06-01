CREATE TABLE albums (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  year INTEGER,
  label TEXT,
  us_sales INTEGER,
  image_url TEXT,
  band_id INTEGER
);

INSERT INTO albums( name, year, label, us_sales, image_url)
VALUES(
  'Definintly Maybe', 1994, 'Creation', 2100000, 'https://is3-ssl.mzstatic.com/image/thumb/Music4/v4/f1/ac/df/f1acdfea-e3f3-a21b-ac0e-a7f2b9f2e7b7/5051961070125_Cover.jpg/600x600bf.png', 1
);

INSERT INTO albums( name, year, label, us_sales, image_url)
VALUES(
  "(What's the Story) Morning Glory?", 1995, 'Creation', 4000000, 'http://dis.resized.images.s3.amazonaws.com/540x540/97830.jpeg', 1
);

INSERT INTO albums( name, year, label, us_sales, image_url)
VALUES(
  'Parklife', 1994, 'Food', 150000, 'https://img.discogs.com/-hNicL9AIh1sdoou-wIdR0We_dY=/fit-in/600x590/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-9929018-1488728222-5666.jpeg.jpg', 2
);

SELECT * FROM albums;

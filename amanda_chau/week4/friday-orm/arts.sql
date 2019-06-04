CREATE TABLE arts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  year INTEGER,
  medium TEXT,
  image_url TEXT,
  artist_id INTEGER -- foreign key, MUST be singular
);


INSERT INTO arts( name, year, medium, image_url, artist_id)
  VALUES ('The Beasts of the Sea', 1950, 'Paper', 'https://uploads2.wikiart.org/images/henri-matisse/the-beasts-of-the-sea-1950.jpg!Large.jpg', 2
  );


INSERT INTO arts( name, year, medium, image_url, artist_id)
  VALUES ('Women with a Hat', 1905, 'Oil, canvas', 'https://uploads4.wikiart.org/images/henri-matisse/woman-with-hat-1905.jpg!Large.jpg', 2
  );


INSERT INTO arts( name, year, medium, image_url, artist_id)
  VALUES ('Girl with Balloon', 2002, 'Stencil, wall', 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Banksy_Girl_and_Heart_Balloon_%282840632113%29.jpg', 1
  );

INSERT INTO arts( name, year, medium, image_url, artist_id)
  VALUES ('Blue Sky', 1932, 'Oil, canvas', 'https://uploads3.wikiart.org/images/emily-carr/blue-sky-1932.jpg!PinterestSmall.jpg', 3
  );

SELECT * FROM arts;

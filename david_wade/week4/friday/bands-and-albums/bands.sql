CREATE TABLE bands (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  nationality TEXT,
  genre TEXT,
  record_sales INTEGER,
  active BOOLEAN,
  image_url TEXT
);


INSERT INTO bands(name, nationality, genre, record_sales, active, image_url)
VALUES(
  "Oasis", "British", "Britpop", 75000000, 0, "https://video-images.vice.com/articles/580e0e07d78a9a39a32f5d92/lede/1-Noel-and-Liam-Gallagher-Copyright-Jill-Furmanovksy.jpg?crop=1xw%3A0.9907529722589168xh%3Bcenter%2Ccenter&resize=650%3A*&output-quality=55"
);

INSERT INTO bands(name, nationality, genre, record_sales, active, image_url)
VALUES(
  "Blur", "British", "Britpop", 15000000, 1, "https://i.pinimg.com/236x/83/32/c3/8332c35b39218f43932a7c542a483970--blur-band-musicians.jpg?nii=t"
);

INSERT INTO bands(name, nationality, genre, record_sales, active, image_url)
VALUES(
  "Nine Inch Nails", "American", "Industrial", 50000000, 1, "https://cdn.shopify.com/s/files/1/0035/2990/0150/products/57_5d36e14f-1a39-4c75-b5eb-a3c9e9b6c82d_grande.jpg?v=1527867561"
);

SELECT * FROM bands;

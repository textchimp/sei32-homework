CREATE TABLE mountains (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  country TEXT,
  range TEXT,
  height INTEGER,
  first_ascent INTEGER,
  img_url TEXT
);


INSERT INTO mountains( name, country, range, height, first_ascent, img_url)
VALUES(
  'Mount Everest', 'Nepal', 'Mahalangur Himalaya', 8848, 1953, 'https://www.gannett-cdn.com/presto/2019/05/28/USAT/a60b3ddf-41ee-49e4-9652-764cea318a99-VPC_EVEREST_DEATHS_DESK_THUMB.jpg'
);

INSERT INTO mountains( name, country, range, height, first_ascent, img_url)
VALUES(
  'K2', 'Pakistan', 'Baltoro Karakoram', 8611, 1954, 'http://prod-upp-image-read.ft.com/e0e36980-6889-11e5-97d0-1456a776a4f5'
);

INSERT INTO mountains( name, country, range, height, first_ascent, img_url)
VALUES(
  'Kangchenjunga', 'Nepal', 'Kangchenjunga Himalaya', 8586, 1955, 'https://ichef.bbci.co.uk/images/ic/720x405/p06v3f4d.jpg'
);

SELECT * FROM mountains;

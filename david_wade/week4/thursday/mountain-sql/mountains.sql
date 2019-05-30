CREATE TABLE mountains (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  country TEXT,
  range TEXT,
  height INTEGER,
  first_ascent INTEGER,
  img_url TEXT
);


INSERT INTO mountains ( name, country, height, first_ascent, img_url)
VALUE('Mount Everest', 'Nepal', 'Mahalangur Himalaya', 8848, 1953, 'https://www.gannett-cdn.com/presto/2019/05/28/USAT/a60b3ddf-41ee-49e4-9652-764cea318a99-VPC_EVEREST_DEATHS_DESK_THUMB.jpg' );

INSERT INTO mountains ( name, country, height, first_ascent, img_url)
VALUE( 'K2', 'Pakistan', 'Baltoro Karakoram', 8611, 1954, 'https://www.gannett-cdn.com/presto/2019/05/28/USAT/a60b3ddf-41ee-49e4-9652-764cea318a99-VPC_EVEREST_DEATHS_DESK_THUMB.jpg' );

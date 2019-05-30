CREATE TABLE places (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  place TEXT,
  country TEXT,
  visited BOOLEAN,
  visit_time INTEGER,
  image_url TEXT
);

INSERT INTO places (place, country, visited, visit_time, image_url)
  VALUES(
    'Rome', 'Italy', 0, 20191030, 'http://www.layoverguide.com/wp-content/uploads/2010/01/Colosseum-Rome.jpg'
  );

INSERT INTO places (place, country, visited, visit_time, image_url)
  VALUES(
    'Machu Picchu', 'Peru', 0, 20200304, 'https://www.telegraph.co.uk/content/dam/Travel/2019/May/machu-picchu-iStock-930824730.jpg?imwidth=450'
  );

INSERT INTO places (place, country, visited, visit_time, image_url)
  VALUES(
    'Paris', 'France', 0, 20191105, 'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Paris/paris-vintage-car.jpg?imwidth=450'
  );

INSERT INTO places (place, country, visited, visit_time, image_url)
  VALUES(
    'Mount Fuji', 'Japan', 1, 20160601, 'https://www.planetware.com/photos-large/JPN/japan-mt-fuji-and-cherry-blossoms.jpg'
  );

INSERT INTO places (place, country, visited, visit_time, image_url)
  VALUES(
    'Antarctica', 'n/a', 0, 20201201, 'https://www.azamaraclubcruises.com/sites/default/files/heros/antarctica-facts-hero-image.jpg'
  );

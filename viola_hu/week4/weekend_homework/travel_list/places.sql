CREATE TABLE places (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  name TEXT,
  country_id INTEGER,
  continent_id INTEGER,
  visited TEXT,
  visit_time INTEGER,
  image_url TEXT,
  description TEXT
);

INSERT INTO places (name, country_id, continent_id, visited, visit_time, image_url, description)
  VALUES(
    'Rome',
    1,
    1,
    'No',
    20191030,
    'http://www.layoverguide.com/wp-content/uploads/2010/01/Colosseum-Rome.jpg',
    "Rome (Latin and Italian: Roma [ˈroːma] is the capital city and a special comune of Italy (named Comune di Roma Capitale). Rome also serves as the capital of the Lazio region. With 2,872,800 residents in 1,285 km2 (496.1 sq mi),it is also the country's most populated comune. It is the fourth most populous city in the European Union by population within city limits. It is the centre of the Metropolitan City of Rome, which has a population of 4,355,725 residents, thus making it the most populous metropolitan city in Italy. Rome is located in the central-western portion of the Italian Peninsula, within Lazio (Latium), along the shores of the Tiber. The Vatican City (the smallest country in the world) is an independent country inside the city boundaries of Rome, the only existing example of a country within a city: for this reason Rome has been often defined as capital of two states."
  );

INSERT INTO places (name, country_id, continent_id, visited, visit_time, image_url, description)
  VALUES(
    'Machu Picchu',
    2,
    2,
    'No',
    20200304,
    'https://www.telegraph.co.uk/content/dam/Travel/2019/May/machu-picchu-iStock-930824730.jpg?imwidth=450',
    "Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it’s renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments and panoramic views. Its exact former use remains a mystery."
  );

INSERT INTO places (name, country_id, continent_id, visited, visit_time, image_url, description)
  VALUES(
    'Paris',
    3,
    1,
    'No',
    20191105,
    'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Paris/paris-vintage-car.jpg?imwidth=450',
    "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré."
  );

INSERT INTO places (name, country_id, continent_id, visited, visit_time, image_url, description)
  VALUES(
    'Mount Fuji',
    4,
    3,
    'YES',
    20200401,
    'https://www.planetware.com/photos-large/JPN/japan-mt-fuji-and-cherry-blossoms.jpg',
    "Japan’s Mt. Fuji is an active volcano about 100 kilometers southwest of Tokyo. Commonly called “Fuji-san,” it’s the country’s tallest peak, at 3,776 meters. A pilgrimage site for centuries, it’s considered one of Japan’s 3 sacred mountains, and summit hikes remain a popular activity. Its iconic profile is the subject of numerous works of art, notably Edo Period prints by Hokusai and Hiroshige."
  );

INSERT INTO places (name, country_id, continent_id, visited, visit_time, image_url, description)
  VALUES(
    'Antarctica',
    5,
    4,
    'No',
    20201201,
    'https://www.azamaraclubcruises.com/sites/default/files/heros/antarctica-facts-hero-image.jpg',
    "Antarctica, the southernmost continent and site of the South Pole, is a virtually uninhabited, ice-covered landmass. Most cruises to the continent visit the Antarctic Peninsula, which stretches toward South America. It’s known for the Lemaire Channel and Paradise Harbor, striking, iceberg-flanked passageways, and Port Lockroy, a former British research station turned museum. The peninsula’s isolated terrain also shelters rich wildlife, including many penguins."
  );

SELECT * FROM places;

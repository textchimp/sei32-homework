CREATE TABLE hikes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  trail TEXT,
  country TEXT,
  description TEXT,
  difficulty TEXT,
  duration TEXT,
  distance INTEGER,
  overnight BOOLEAN,
  image_url TEXT
);

INSERT INTO hikes ( trail, country, description, difficulty, duration, distance, overnight, image_url )
  VALUES('Stawamus Chief', 'Canada', 'Scenic views of Howe Sound', 'Intermediate', '6 hours', 11, 0, 'https://d2ciprw05cjhos.cloudfront.net/files/v3/styles/gs_large/public/2012/10/StawamusChief-SH-2012-7554.jpg?itok=yDa6SdU5'
  );

INSERT INTO hikes( trail, country, description, difficulty, duration, distance, overnight, image_url )
  VALUES('Torres Del Paine W Trek', 'Chile', 'Top hike in Patagonia', 'Intermediate', '3-5 days', 80, 1, 'https://www.back-packer.org/wp-content/uploads/torres-del-paine-las-torres.jpg'
  );

INSERT INTO hikes( trail, country, description, difficulty, duration, distance, overnight, image_url )
  VALUES('Spit to Manly', 'Australia', 'A GA favourite', 'Easy', '3 hours', 10, 0, 'https://www.bestsydneywalks.com/wp-content/uploads/2015/12/spit-bridge-to-manly-walk.jpg'
  );

SELECT * FROM hikes;

CREATE TABLE businesses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  business_name TEXT,
  has_website BOOLEAN,
  suburb TEXT,
  postcode INTEGER,
  street_address TEXT,
  business_type TEXT,
  owner TEXT,
  landline_number INTEGER,
  mobile_number INTEGER,
  email TEXT,
  storefront_image_url TEXT,
  date_added INTEGER
);

INSERT INTO businesses ( business_name, has_website, suburb, postcode, street_address, business_type, owner, landline_number, mobile_number, email, storefront_image_url, date_added )
  VALUES('The Mandoo', 0, 'Strathfield', 2135, '12A The Boulevarde', 'Korean Dumplings', 'unknown', 0297010949, , , "https://www.ifatfoodchronicles.com.au/wp-content/uploads/2017/05/the-mandoo-strathfield-1024x680.jpg", 300519
  );

INSERT INTO businesses ( business_name, has_website, suburb, postcode, street_address, business_type, owner, landline_number, mobile_number, email, storefront_image_url, date_added )
  VALUES('Myeongdeong', 0, 'North Strathfield', 2137, '2/1 George St', 'Korean Cuisine', 'unknown', 0297468746, , , "http://kozkoz.com.au/data/editor/1709/ce6279093f186613ab0056c0fd2424af_1504536490_9575.JPG", 300519
  );


INSERT INTO businesses ( business_name, has_website, suburb, postcode, street_address, business_type, owner, landline_number, mobile_number, email, storefront_image_url, date_added )
  VALUES('Three Sisters', 0, 'Lidcombe', 2141, '10 Kerrs Rd', 'Korean Cuisine', 'unknown', 0296499319, , , "https://b.zmtcdn.com/data/pictures/1/17746331/f9e9e6eefe1d6c52e0585d492167ef14.jpg?crop=720%3A720%3B42%2C0&fit=around%7C200%3A200", 300519
  );

SELECT * FROM businesses;

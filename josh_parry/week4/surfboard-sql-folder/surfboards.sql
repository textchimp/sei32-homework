CREATE TABLE surfboards (

  id INTEGER PRIMARY KEY AUTOINCREMENT, -- take care of IDs automatically
  name TEXT,
  shaper TEXT,
  description TEXT,
  price INTEGER,
  in_stock BOOLEAN,
  image_url TEXT
);

INSERT INTO surfboards(name, shaper, description, price, in_stock, image_url)
  VALUES (
    'Hypto Krypto', 'Haydenshapes', 'ultimate all round surfboard', 899, 0, 'https://content.cavewire.com/host/boardcave-au/path/media/catalog/product/cache/1/thumbnail/800x/e4d92e6aceaad517e7b5c12e0dc06587/h/y/hyptokyrpto-haydenshapes-surfboards_bottom.jpg'
  );

INSERT INTO surfboards(name, shaper, description, price, in_stock, image_url)
  VALUES (
    'Rasta Torus Twin', 'Gary McNeill', 'Because of this channel the RTT has more control than your traditional twin fin and due to the absence of drag from the centre fin can generate speed quicker then your thruster.', 760, 0, 'https://content.cavewire.com/host/boardcave-au/path/media/catalog/product/cache/1/thumbnail/800x/e4d92e6aceaad517e7b5c12e0dc06587/r/a/rasta_torus_twin-bottom.jpg'
  );

INSERT INTO surfboards(name, shaper, description, price, in_stock, image_url)
  VALUES (
    'Odysea Log - Lime', 'Catch Surf', 'plenty of float for Californian style surfing.', 579, 0, 'https://content.cavewire.com/host/boardcave-au/path/media/catalog/product/cache/1/thumbnail/800x/e4d92e6aceaad517e7b5c12e0dc06587/l/o/loglime18.jpg'
  );

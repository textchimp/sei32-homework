# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "islands in the sea, that is what we are..."

Island.destroy_all

Island.create name: 'Guam', demonym: 'Guamanian', capital: 'Hagatna', currency: 'USD', area: 540, image: 'https://res.cloudinary.com/fen-learning/image/upload/c_limit/infopls_images/images/mguam.gif'

Island.create name: 'Saint Helena', demonym: 'Saint Helenian', capital: 'Jamestown', currency: 'Saint Helena Pound', area: 47, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Saint_Helena_regions_map.png/450px-Saint_Helena_regions_map.png'

Island.create name: 'Falkland Island', demonym: 'Falkland Islander', capital: 'Stanley', currency: 'Falklands Pound', area:12_200, image: 'http://www.freeworldmaps.net/island/falkland/falkland-map.jpg'

Island.create name: 'Corsica', demonym: 'Corsican', capital: 'Ajaccio', currency: 'Euro', area: 8680, image:'http://www.world-guides.com/images/corsica/corsica_map.jpg'

puts "table of #{Island.all.length} Islands."

puts 'done'

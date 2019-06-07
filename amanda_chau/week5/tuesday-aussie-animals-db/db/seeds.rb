# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "populating (also know as seeding) aussie animals into animals table"

Animal.destroy_all

Animal.create name: 'Koala', image: 'https://www.wwf.org.au/Images/UserUploadedImages/416/img-koala-feeding-leaf-to-joey-1000px.jpg', location: 'NSW, VIC, QLD', diet: 'eucalyptus', min_mass: 4, max_mass: 15, lifespan: 15, marsupial: 1

Animal.create name: 'Wombat', image: 'https://www.australiangeographic.com.au/wp-content/uploads/2018/11/wombat-australia.jpg', location: 'NSW, TAS, VIC', diet: 'grasses, sedges, herbs, bark, and roots', min_mass: 20, max_mass: 35, lifespan: 15, marsupial: 1


Animal.create name: 'Echidna', image: 'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4OC80Mjkvb3JpZ2luYWwvZWNoaWRuYS5qcGc=', location: 'throughout New Guinea and mainland Australia, as well as Tasmania, King Island, Flinders Island and Kangaroo Island', diet: 'worms and insects', min_mass: 3, max_mass: 9, lifespan: 10, marsupial: 0



puts "Created #{ Animal.all.length } aussie animals. "
puts "hopefully my table is filled "



# run in terminal 'rails db:seed' to seed table!

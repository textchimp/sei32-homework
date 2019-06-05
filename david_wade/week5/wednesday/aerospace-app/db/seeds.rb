# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Company.destroy_all

puts 'creating company seed.rb'

Company.create name: 'Boeing', headquarters: 'Chicago, USA', traded_as: 'BA', founded: '1916/07/15', revenue: 101, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/2004-09-14_1680x3000_chicago_boeing_building.jpg/800px-2004-09-14_1680x3000_chicago_boeing_building.jpg'

Company.create name: 'Airbus', headquarters: 'Leiden, Netherlands', traded_as: 'AIR', founded: '1970/12/18', revenue: 63, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Airbus_Lagard%C3%A8re_-_A%C3%A9roconstellation.jpg/2560px-Airbus_Lagard%C3%A8re_-_A%C3%A9roconstellation.jpg'

Company.create name: 'United Aircraft Company', headquarters: 'Moscow, Russia', traded_as: 'PJSC', founded: '2006/02/20', revenue: 7, image: 'https://www.reserve.ru/assets/gallery/68/2235.jpg'

puts "Created #{Company.all.length} Company(ies)"
puts Company.pluck(:name).join(',')

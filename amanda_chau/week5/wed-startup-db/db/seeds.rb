# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

City.destroy_all

puts "seeding city seeds"

c1 = City.create name:'Sydney', population: 4627000, num_startups: 3125, avg_val: 3.7, image: 'https://sydneyexpert.com/wp-content/uploads/2013/06/The-Opera-House-Pylon-View.jpg'

c2 = City.create name:'Melbourne', population: 4443000, num_startups: 36, avg_val: 3.7, image: 'https://www.visitvictoria.com/-/media/images/melbourne/destinations/melbourne-park_mel_r_supplied-082_1150x863.jpg?ts=20170206470129'

c3 = City.create name:'Brisbane', population: 2280000, num_startups: 712, avg_val: 3.7, image: 'http://www.choosebrisbane.com.au/~/media/choose/convention-bureau/city-shots/brisbanecityskyline_20180509_wide.ashx'

puts "finished seeding #{City.all.length} cities"




Startup.destroy_all

puts "seeding startups"

Startup.create name: 'Clinic to Cloud', founder: 'Rafic Habib', categories: 'Information Technology, Health Care Information Technology', logo: 'https://www.clinictocloud.com/hubfs/CTC_Logo-09.svg', hiring_devs: 1, city_id: c1.id, website: 'clinictocloud.com'

Startup.create name: 'Next Practice', founder: 'Sam Prince', categories: 'Healthcare, Personal Health', logo: 'https://d1qr34qzhiwpdo.cloudfront.net/branding/V3-logo-square-color.svg?mtime=20180813134403', hiring_devs: 1, city_id: c1.id, website: 'nextpracticehealth.com'

Startup.create name: 'Oscer', founder: 'Thomas Kelly, Clarence Wong', categories: 'Medical, Education, Artificial Intelligence', logo: 'https://oscer.ai/wp-content/uploads/2018/07/White-Logo-and-Text-Small.png', hiring_devs: 1, city_id: c2.id, website: 'oscer.ai'

Startup.create name: 'GoodHuman', founder: 'Jonathan Murray ', categories: 'SaaS, Healthcare, Marketplaces, Health Care Information Technology', logo: 'https://d1qb2nb5cznatu.cloudfront.net/startups/i/6160330-5cfeb59f62052442b8483c3960909239-medium_jpg.jpg?buster=1546987244', hiring_devs: 1, city_id: c2.id, website: 'goodhuman.me'

Startup.create name: 'Wanngi', founder: 'Maree Beare', categories: 'Personal Health, Health and Wellness, Mobile Health, Digital Health', logo: 'https://d1qb2nb5cznatu.cloudfront.net/startups/i/6492615-09acb222c7e37b4e4087960c92991f5e-medium_jpg.jpg?buster=1540364468', hiring_devs: 1, city_id: c3.id, website: 'wanngi.com'


puts "finished seeding #{Startup.all.length}"
puts City.pluck(:name).join(', ')

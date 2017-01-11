20.times do
  first_name, last_name = Faker::Name.first_name, Faker::Name.last_name
  email = "#{first_name}_#{last_name}@#{['gmail', 'yahoo'].sample}.com"
  username = "#{first_name}_#{last_name}"

  User.create!(username: username, email: email, first_name: first_name,
               last_name: last_name, password: 'password',
               image_url: Faker::Avatar.image)
end

User.create!(username: 'Guest', email: 'guest@tempo.com',
            first_name: 'Gu', last_name: 'Est', password: 'password',
            image_url: Faker::Avatar.image)

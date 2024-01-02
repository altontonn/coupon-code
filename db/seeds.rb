# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# Assuming you have User and Code models defined with proper associations

# Create a user
user = User.create(name: 'User', email: 'user@gmail.com', password: '123456', role: 'user')

# Check if the user was created successfully before creating a code
if user.persisted?
  # Associate the code with the user using the user_id
  code = Code.create(passcode: 'jKo69B', user_id: user.id)
else
  puts "User creation failed: #{user.errors.full_messages}" # Output any errors if user creation fails
end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.create(name: "business")
Category.create(name: "entertainment")
Category.create(name: "general")
Category.create(name: "health")
Category.create(name: "science")
Category.create(name: "sports")
Category.create(name: "technology")

User.create(username: "rebe")
User.create(username: "turtlewen")
User.create(username: "username")

Source.create(name: "USA Today")

Story.create()

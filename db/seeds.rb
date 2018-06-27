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

# Copy and paste into console only after Categories have been seeded into the db.
Source.create(name: "USA Today", category: Category.find_by(name: "general"))
Source.create(name: "The New York Times", category: Category.find_by(name: "general"))
Source.create(name: "CNN", category: Category.find_by(name: "general"))
Source.create(name: "The Washington Post", category: Category.find_by(name: "general"))
Source.create(name: "Medical News Today", category: Category.find_by(name: "health"))
Source.create(name: "Fortune", category: Category.find_by(name: "business"))
Source.create(name: "CBS News", category: Category.find_by(name: "general"))
Source.create(name: "Buzzfeed", category: Category.find_by(name: "entertainment"))
Source.create(name: "ABC News", category: Category.find_by(name: "general"))
Source.create(name: "TechCrunch", category: Category.find_by(name: "technology"))
Source.create(name: "National Geographic", category: Category.find_by(name: "science"))
Source.create(name: "BBC Sport", category: Category.find_by(name: "sports"))

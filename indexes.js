// single-field on index
db.books.createIndex({ title: 1 })

// compound index on author + publication_year
db.books.createIndex({ author: 1, published_year: -1 })

//use explain to compare
// without index:

db.books.find({ title: "Some Title" }).explain("executionStats")


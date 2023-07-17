
//Json

const movieJson = `[
    {
      "title": "The Shawshank Redemption",
      "year": 1994,
      "director": "Frank Darabont",
      "genre": ["Drama", "Crime"],
      "rating": 9.3
    },
    {
      "title": "Inception",
      "year": 2010,
      "director": "Christopher Nolan",
      "genre": ["Action", "Adventure", "Sci-Fi"],
      "rating": 8.8
    },
    {
      "title": "The Dark Knight",
      "year": 2008,
      "director": "Christopher Nolan",
      "genre": ["Action", "Crime", "Drama"],
      "rating": 9.0
    }
  ]`;
  
// Parsing the JSON string into a JavaScript object
const movie = JSON.parse(movieJson);

// Accessing properties of the JavaScript object
console.log(movies[0].title);
console.log(movies[1].genre);
console.log(movies[2].rating);

// Modifying properties of the JavaScript object
movies[0].rating = 9.5;
movies[1].genre.push("Mystery");
movies[2].year = 2008;

// Converting the JavaScript object back to a JSON string
const modifiedMoviesJson = JSON.stringify(movies);

console.log(modifiedPersonJson);

/* Output:
[
  {
    "title": "The Shawshank Redemption",
    "year": 1994,
    "director": "Frank Darabont",
    "genre": ["Drama", "Crime"],
    "rating": 9.5
  },
  {
    "title": "Inception",
    "year": 2010,
    "director": "Christopher Nolan",
    "genre": ["Action", "Adventure", "Sci-Fi", "Mystery"],
    "rating": 8.8
  },
  {
    "title": "The Dark Knight",
    "year": 2008,
    "director": "Christopher Nolan",
    "genre": ["Action", "Crime", "Drama"],
    "rating": 9.0
  }
]
*/
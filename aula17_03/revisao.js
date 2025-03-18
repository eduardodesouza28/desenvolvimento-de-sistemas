const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
      portuguese: "O Senhor dos Anéis",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];
const bookCopy1 = [data[1]];

function updateBooksPages(id, newPages) {
  const bookPagesCopy = { ...data.find((d) => d.id === id) };
  bookPagesCopy.pages = newPages;
  return bookPagesCopy;
}

function updateBooksPagesAndReviews(id, newPages, newReviews) {
  const bookPagesCopy = { ...data.find((d) => d.id === id) };
  bookPagesCopy.pages = newPages;
  bookPagesCopy.reviews = newReviews;
  return bookPagesCopy;
}

function informationOfBook(id) {
  const book = data.find((d) => d.id === id);
  return console.log(`O livro ${book.title} foi escrito por ${book.author} e publicado em ${book.publicationDate}.`)
}

function libraryInformation() {
  for (i = 0; i < data.length; i++) {
    const book = data.find((d) => d.id === i + 1);
    console.log(`O livro ${book.title} foi escrito por ${book.author} e com ${book.pages} paginas. \n`)
  }
}

function checkMovie(id) {
  const book = data.find((d) => d.id === id);
  book.hasMovieAdaptation ? console.log(`O livro ${book.title} possui adaptação para o cinema.`) : console.log(`O livro ${book.title} não possui adaptação para o cinema.`)
}

function listMovies() {
  for (i = 0; i < data.length; i++) {
    const book = data.find((d) => d.id === i + 1);
    book.hasMovieAdaptation ? console.log(`${book.title} 🎬`) : console.log(`${book.title} 📖`)
  }
}

function getBooks() {
  return data;
}

function getBook(id) {
  defaultTitle = "Livro não encontrado"
  return data.find((d) => d.id === id) == undefined ? defaultTitle : data.find((d) => d.id === id);
}

function hasTranslation(id, lang) {
  const book = data.find((d) => d.id === id);
  return book.translations[lang] ? true : false
}

function getReviewCount(id) {
  const book = data.find((d) => d.id === id);
  return book.reviews.goodreads.reviewsCount + book.reviews.librarything.reviewsCount > 0 ? book.reviews.goodreads.reviewsCount  : "Sem avaliações"
}

getTitle = (id) => {
  const book = data.find((d) => d.id === id);
  return book.title;
}

hasManyPages = (id) => {
  const book = data.find((d) => d.id === id);
  return book.pages > 500 ? true : false
}

filterByAuthor = (author) => {
  const books = data
  let booksByAuthor = []
  for (i = 0; i < data.length; i++) {
    const book = data.find((d) => d.id === i + 1);
    book.author == author ? booksByAuthor.push(book.title) : null
  }
  return booksByAuthor
}

const book1 = getBook(1);
const book2 = getBook(2);
const book3 = getBook(3);
const book4 = getBook(4);
const book5 = getBook(5);

const author3 = book3.author;
const title3 = book3.title;
const genres3 = book5.genres
const firstGenre3 = genres3;
const goodreads4 = book4.reviews.goodreads;
const librarything4 = book4.reviews.librarything;
const bookpage1 = updateBooksPagesAndReviews(2, 1000, "legal");
let hasMovie5 = book5.hasMovieAdaptation;

// console.log(title3);
// console.log(goodreads4, librarything4);

// console.log(bookpage1)
// console.log(book1.pages)

// console.log(`titulo: ${book1.title} autor: ${book1.author}`)
// informationOfBook(1)
// libraryInformation()

// console.log(hasMovie5)
// checkMovie(1)
// listMovies()

// console.log(getTitle(1))
// console.log(hasManyPages(1))
// console.log(filterByAuthor("George R. R. Martin"))

// console.log(getBook(-1))
// console.log(hasTranslation(1, "spanish"))
console.log(getReviewCount(5))



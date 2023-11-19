// var arrayOfObjects = [
//   {
//     name: "John",
//     age: 25,
//     city: "New York",
//     courseEnrolled: "HTML",
//     duration: "10 weeks",
//     price_in_$_in_$_in_$_in_$: "$10",
//   },
//   {
//     name: "Alice",
//     age: 30,
//     city: "San Francisco",
//     courseEnrolled: "CSS",
//     duration: "10 weeks",
//     price_in_$_in_$: "$10",
//   },
//   {
//     name: "Bob",
//     age: 22,
//     city: "Los Angeles",
//     courseEnrolled: "JavaScript",
//     duration: "4 months",
//     price_in_$_in_$: 30,
//   },
// ];

// let revert = arrayOfObjects.filter((item) => {
//   return item.price_in_$_in_$ > 17;
// });

// console.log(revert);
// arrayOfObjects.forEach((item) => {
//   console.table(item);
// });

// let myData = [12, 13, 191, 100, 233, 183, 19, 209, 219, 264, 208];

// let values = myData.filter((item) => item > 200);
// // console.log(values);
// // console.table(values);

// let newNums = [12, 13, 191, 100, 233, 183, 19, 209, 219, 264, 208];
// let data = newNums.filter((item) => {
//   return item % 3 == 0;
// });

// console.log(data);
// let income = [2060, 5050, 4960, 6000, 9090, 15060, 20000];
// let new_income = [];

// income.forEach((num) => {
//   if (num > 14000) {
//     new_income.push(num);
//   }
// });
// console.log(income);
// console.table(new_income);

// Creating an array of book objects
// var library = [
//   {
//     title: "The Great Gatsby",
//     genre: "Fiction",
//     publish_year: 1925,
//     edition: 1,
//     price_in_$: 12.99,
//   },
//   {
//     title: "To Kill a Mockingbird",
//     genre: "Classic",
//     publish_year: 1960,
//     edition: 2,
//     price_in_$: 15.99,
//   },
//   {
//     title: "Harry Potter and the Sorcerer's Stone",
//     genre: "Fantasy",
//     publish_year: 1997,
//     edition: 1,
//     price_in_$: 24.99,
//   },
//   {
//     title: "1984",
//     genre: "Dystopian",
//     publish_year: 1949,
//     edition: 1,
//     price_in_$: 14.99,
//   },
//   {
//     title: "The Catcher in the Rye",
//     genre: "Coming of Age",
//     publish_year: 1951,
//     edition: 3,
//     price_in_$: 11.99,
//   },
//   {
//     title: "The Hobbit",
//     genre: "Fantasy",
//     publish_year: 1937,
//     edition: 1,
//     price_in_$: 19.99,
//   },
//   {
//     title: "The Lord of the Rings",
//     genre: "Fantasy",
//     publish_year: 1954,
//     edition: 1,
//     price_in_$: 29.99,
//   },
//   {
//     title: "Pride and Prejudice",
//     genre: "Romance",
//     publish_year: 1813,
//     edition: 2,
//     price_in_$: 10.99,
//   },
//   {
//     title: "The Da Vinci Code",
//     genre: "Mystery",
//     publish_year: 2003,
//     edition: 1,
//     price_in_$: 18.99,
//   },
//   {
//     title: "The Alchemist",
//     genre: "Fiction",
//     publish_year: 1988,
//     edition: 1,
//     price_in_$: 16.99,
//   },
// ];

// const library_demand = library.filter(
//   (bk) => bk.genre === "Fiction" && bk.publish_year >= 1930
// );
// console.table(library_demand);

// Creating an array of book objects
var library = [
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    publish_year: 1925,
    edition: 1,
    edition_year: 1925,
    price_in_$: 12.99,
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Classic",
    publish_year: 1960,
    edition: 2,
    edition_year: 1960,
    price_in_$: 15.99,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    publish_year: 1997,
    edition: 1,
    edition_year: 1997,
    price_in_$: 24.99,
  },
  {
    title: "1984",
    genre: "Dystopian",
    publish_year: 1949,
    edition: 1,
    edition_year: 1949,
    price_in_$: 14.99,
  },
  {
    title: "The Catcher in the Rye",
    genre: "Coming of Age",
    publish_year: 1951,
    edition: 3,
    edition_year: 1951,
    price_in_$: 11.99,
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publish_year: 1937,
    edition: 1,
    edition_year: 1937,
    price_in_$: 19.99,
  },
  {
    title: "The Lord of the Rings",
    genre: "Fantasy",
    publish_year: 1954,
    edition: 1,
    edition_year: 1954,
    price_in_$: 29.99,
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    publish_year: 1813,
    edition: 2,
    edition_year: 1813,
    price_in_$: 10.99,
  },
  {
    title: "The Da Vinci Code",
    genre: "Mystery",
    publish_year: 2003,
    edition: 1,
    edition_year: 2003,
    price_in_$: 18.99,
  },
  {
    title: "The Alchemist",
    genre: "Fiction",
    publish_year: 1988,
    edition: 1,
    edition_year: 1988,
    price_in_$: 16.99,
  },
  {
    title: "The Shining",
    genre: "Horror",
    publish_year: 1977,
    edition: 1,
    edition_year: 1977,
    price_in_$: 13.99,
  },
  {
    title: "The Hunger Games",
    genre: "Science Fiction",
    publish_year: 2008,
    edition: 1,
    edition_year: 2008,
    price_in_$: 20.99,
  },
  {
    title: "Moby-Dick",
    genre: "Adventure",
    publish_year: 1851,
    edition: 2,
    edition_year: 1851,
    price_in_$: 17.99,
  },
  {
    title: "Brave New World",
    genre: "Dystopian",
    publish_year: 1932,
    edition: 1,
    edition_year: 1932,
    price_in_$: 14.99,
  },
  {
    title: "The Road",
    genre: "Post-apocalyptic",
    publish_year: 2006,
    edition: 1,
    edition_year: 2006,
    price_in_$: 16.99,
  },
  {
    title: "Jane Eyre",
    genre: "Classic",
    publish_year: 1847,
    edition: 3,
    edition_year: 1847,
    price_in_$: 11.99,
  },
  {
    title: "The Girl with the Dragon Tattoo",
    genre: "Mystery",
    publish_year: 2005,
    edition: 1,
    edition_year: 2005,
    price_in_$: 22.99,
  },
  {
    title: "The Odyssey",
    genre: "Epic Poetry",
    publish_year: 1850,
    edition: 2,
    edition_year: 1850,
    price_in_$: 12.99,
  },
  {
    title: "The Martian",
    genre: "Science Fiction",
    publish_year: 2011,
    edition: 1,
    edition_year: 2011,
    price_in_$: 25.99,
  },
  {
    title: "The Grapes of Wrath",
    genre: "Historical Fiction",
    publish_year: 1939,
    edition: 1,
    edition_year: 1939,
    price_in_$: 18.99,
  },
  {
    title: "The Three Musketeers",
    genre: "Historical Fiction",
    publish_year: 1844,
    edition: 1,
    edition_year: 1844,
    price_in_$: 14.99,
  },
];

const userDemand = library.filter(
  (bk) => bk.publish_year > 1830 && bk.genre === "Fantasy"
);
console.table(userDemand);
const userDemand2 = library.filter((bk2) => {
  return bk2.genre === "Historical Fiction";
});
console.table(userDemand2);

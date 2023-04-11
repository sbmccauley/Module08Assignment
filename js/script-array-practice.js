//STEP 1
// let favoriteMovies = ['Joy Luck Club', 'Breakfast Club','Wonder Woman', 'Harry Potter', 'Back to the Future'];
// console.log(favoriteMovies[1])


//STEP 2
// let favoriteMovies = new Array(5);

// favoriteMovies[0] = 'Joy Luck Club';
// favoriteMovies[1] = 'Breakfast Club';
// favoriteMovies[2] = 'Wonder Woman';
// favoriteMovies[3] = 'Harry Potter';
// favoriteMovies[4] = 'Back to the Future';
// console.log(favoriteMovies[0]);

//STEP 3
// let favoriteMovies = new Array(5);

// favoriteMovies[0] = 'Joy Luck Club';
// favoriteMovies[1] = 'Breakfast Club';
// favoriteMovies[2] = 'Wonder Woman';
// favoriteMovies[3] = 'Harry Potter';
// favoriteMovies[4] = 'Back to the Future';

// favoriteMovies[favoriteMovies.length] = 6
// favoriteMovies[2] = 'Speed'
// console.log(favoriteMovies.length);

//STEP 4
// let movies = [];
// movies[0] = 'Joy Lock Club';
// movies[1] = 'Breakfast Club';
// movies[2] = 'Wonder Woman';
// movies[3] = 'Harry Potter';
// movies[4] = 'Back to the Future';

// delete movies[0];
// console.log(movies);

//STEP 5
// let movies = [];
// movies[0] = 'Joy Lock Club';
// movies[1] = 'Breakfast Club';
// movies[2] = 'Wonder Woman';
// movies[3] = 'Harry Potter';
// movies[4] = 'Back to the Future';
// movies[5] = 'Speed';
// movies[6] = 'Thor';

// for(movie in movies) {
//     console.log(movies[movie])
// }


//STEP 6
// let movies = [];
// movies[0] = 'Joy Lock Club';
// movies[1] = 'Breakfast Club';
// movies[2] = 'Wonder Woman';
// movies[3] = 'Harry Potter';
// movies[4] = 'Back to the Future';
// movies[5] = 'Speed';

// for(movie of movies) {
//     console.log(movie)
// }

//STEP 7
// let movies = [];
// movies[0] = 'Joy Lock Club';
// movies[1] = 'Breakfast Club';
// movies[2] = 'Wonder Woman';
// movies[3] = 'Harry Potter';
// movies[4] = 'Back to the Future';
// movies[5] = 'Speed';

// movies.sort()
// for(movie of movies) {
   
//     console.log(movie)
// }

//STEP 8
// let movies = [];
// movies[0] = 'Joy Lock Club';
// movies[1] = 'Breakfast Club';
// movies[2] = 'Wonder Woman';
// movies[3] = 'Harry Potter';
// movies[4] = 'Back to the Future';
// movies[5] = 'Speed';
// movies[6] = 'Thor';

// let leastFavoriteMovies = ['Tremors', 'Perfume', 'Napoleon Dynamite']

// console.log('Movies I like: \n \n')
// for(movie of movies) {
       
//         console.log(movie)
//     }

// console.log('...\n\n');

// console.log('Movies I regret watching: \n\n');
// for(leastFavorite of leastFavoriteMovies) {
       
//     console.log(leastFavorite)
// }
// console.log('...\n\n');


//STEP 9
// let movies = [
//     'Joy Lock Club',
//     'Breakfast Club',
//     'Wonder Woman',
//     'Harry Potter',
//     'Back to the Future',
//     'Speed',
//     'Thor'];

// let leastFavoriteMovies = ['Tremors', 'Perfume', 'Napoleon Dynamite'];

// movies = movies.concat(leastFavoriteMovies)
// movies.sort().reverse()
// for(movie of movies) {
//     console.log(movie)
//     }

//STEP 10
// let movies = [
//     'Joy Lock Club',
//     'Breakfast Club',
//     'Wonder Woman',
//     'Harry Potter',
//     'Back to the Future',
//     'Speed',
//     'Thor'];

// let leastFavoriteMovies = ['Tremors', 'Perfume', 'Napoleon Dynamite'];

// movies = movies.concat(leastFavoriteMovies)
// movies.sort().reverse()
// for(movie of movies) {
//     console.log(movie)
//     }

// console.log(`\n \nLast item in the array: ${movies.pop()}`)

//STEP 11
// let movies = [
//     'Joy Lock Club',
//     'Breakfast Club',
//     'Wonder Woman',
//     'Harry Potter',
//     'Back to the Future',
//     'Speed',
//     'Thor'];

// let leastFavoriteMovies = ['Tremors', 'Perfume', 'Napoleon Dynamite'];

// movies = movies.concat(leastFavoriteMovies)
// movies.sort().reverse()
// for(movie of movies) {
//     console.log(movie)
//     }

// console.log(`\n \nFirst item in the array: ${movies.shift()}`)

//STEP 12
// let movies = [
//     'Joy Lock Club',
//     'Breakfast Club',
//     'Wonder Woman',
//     'Harry Potter',
//     'Back to the Future',
//     'Speed',
//     'Thor'];

// let leastFavoriteMovies = ['Tremors', 'Perfume', 'Napoleon Dynamite'];

// movies = movies.concat(leastFavoriteMovies)

// for(movie of movies) {
//     console.log(movie)
//     }

// console.log(movies)
// console.log(movies.pop(7))
// console.log(movies.pop(8))
// console.log(movies.pop(9))
// console.log(movies)
// console.log(movies.push('Where the Crawdads Sing'))
// console.log(movies.push('Top Gun: Maverick'))
// console.log(movies.push('Indiana Jones'))
// console.log(`New Movie List \n ${movies}`)

//STEP 13 (for this exercise I used find() in a basic array, and for the multi-dimensional array I used a for/each loop to get the same result)
    //MULTI-DIMENSIONAL ARRAY SOLUTION
// let movies = [
//     ['Joy Luck Club', 1],
//     ['Breakfast Club', 2],
//     ['Wonder Woman', 3],
//     ['Harry Potter', 4],
//     ['Back to the Future',5]
// ];



// movies.forEach((item) => {
//     console.log(`${item[0]}`)
// })

    //BASIC ARRAY SOLUTION USING find()
// let movies = [
//     'Joy Luck Club', 1,
//     'Breakfast Club', 2,
//     'Wonder Woman', 3,
//     'Harry Potter', 4,
//     'Back to the Future',5
// ];
// console.log(movies)
// let item
// let movieTitles = movies.filter((item) => {
//     return typeof item === 'string';
// })

// console.log(`${movieTitles}`)

//STEP 14
// let employees = ['ZAK', 'JESSICA', 'MARK', 'FRED', 'SALLY'];

// console.log('Employees: \n')

// function showEmployee (employee) {
//     for(employee of employees) {
//     console.log(employee)
// }
// }
// showEmployee()

//STEP 15

// let data = [58, 'abcd', true, null, false, 0];
// let filterValues = data.filter((item) => {
//     return item;
   
// })

// console.log(filterValues)

//STEP 16
// let numArray = [1,43,5,2,65,87,23,23123,234,89];
// let randItem;

// function chooseRandomItem(a) {
//     let randIndex = Math.floor(Math.random() * a.length);
//     randItem = a[randIndex];
//     return randItem
// };

// n = chooseRandomItem(numArray)
// console.log(n)



//STEP 17
// let numbers = [5,7,345,56,34,3421,67,54,33]

// function maxNumber(largest) {
//     let maxNumber = largest.reduce((a,b) => Math.max(a,b, -Infinity));
//     return maxNumber
// };

// largest = maxNumber(numbers)

// console.log(largest)
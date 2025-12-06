const marvel = ["thor", "captain", "ironman", ]

const dc = ["superman", "batman", "flash"]

const cricket = ["hitman", "king", "boom", "cool"]

// marvel.push(dc)  // this push method isn't good so we won't use it

// console.log(marvel);

// concat method:

// const assemble = marvel.concat(dc, cricket)
// console.log(assemble); // this concat method is used to merge two arrays.

// spread method: this method is also work same as conca.all elements spreads by using spread.

const assemble2 = [...marvel, ...dc, ...cricket]
// console.log(assemble2);

// flat method: to spread all nested arrays.

const nested_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const solved_array = nested_array.flat(Infinity) //we use(flat(number of depth of arrays))
console.log(solved_array);

console.log(Array.isArray("ilyas"));
console.log(Array.from("ilyas")); // .from to convert any value in array
console.log(Array.from({name: "ilyas"})); //it won't work on with keys . (imp )

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));//.of to returns a new array from set of elements.







const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// this is a SPREAD operator (its func is to spread and combine the given arrays)

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // flat(depth)
// this operator gives a single array for a nested array
// and the simplest way to give the depth is a very easy hack to give value "infinity"

console.log(real_another_array);



console.log(Array.isArray("Lord"))
console.log(Array.from("Lord"))
console.log(Array.from({name: "Lord"})) // INTERESTING

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
const big_array = [score1,score2,score3];
console.log(big_array);
const marvel_heroes = ["Thor", "IronMan", "Hulk" ]
const Dc_heroes = [",SuperMan", "BatMan", "Wanda"]
const indian_heroes = [",shaktiman", "Yukudu", "Balveer"]
//const All_heroes = marvel_heroes+Dc_heroes;

//console.log(All_heroes);

//All_heroes = marvel_heroes.concat(Dc_heroes)

 //console.log(All_heroes);

//console.log(All_heroes[5]);

// we can use this method to add one array to the another array 
const new_heroes = [...marvel_heroes, ...Dc_heroes, ...indian_heroes];

console.log(new_heroes);


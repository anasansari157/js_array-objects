myPenguin.favoriteFoods = ["Salad", "Honey", "Fish"];

console.log(myPenguin.favoriteFoods[1]);

let firstFavFood = myPenguin.favoriteFoods[0];

myPenguin.favoriteFoods.push("Rice");

console.log(myPenguin.favoriteFoods);
myPenguin.favoriteFoods[myPenguin.favoriteFoods.length - 1] = "pineapples";

let lastFavFood = myPenguin.favoriteFoods[myPenguin.favoriteFoods.length - 1];

for (let i = 0; i < myPenguin.favoriteFoods[myPenguin.favoriteFoods.length]; i++) {
    console.log(myPenguin.favoriteFoods[i]);
}

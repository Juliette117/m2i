var imagesaleatoires = ["https://www.clipartmax.com/png/middle/63-639570_cowboy-stan-south-park-cowboy-characters.png","https://e7.pngegg.com/pngimages/507/746/png-clipart-south-park-stan-marsh-illustration-south-park-stan-at-the-movies-cartoons-thumbnail.png","https://i.skyrock.net/9054/38439054/pics/1828314707_1.jpg","https://media.tenor.com/nNtVczZWxr0AAAAC/shhh-eric-cartman.gif"];
console.log(imagesaleatoires);

function getRandomItem(imagesaleatoires) {
    let randomIndex = Math.floor(Math.random() * imagesaleatoires.length);
    let item = imagesaleatoires[randomIndex];
    return item;
}

/*const array = [1, 'hello', 5, 8];

const result = getRandomItem(array);
console.log(result);
*/
let result = getRandomItem(imagesaleatoires);
console.log(result);

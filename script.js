// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
let image = ['https://i.pinimg.com/736x/a8/bd/a1/a8bda140cad98c1b82773576d10d89ae.jpg', 'https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72', 'https://images.genius.com/a3c02ae97bf3051df1d9669ab0bd3dec.1000x1000x1.jpg', 'https://upload.wikimedia.org/wikipedia/en/e/ed/KissMe.jpg','https://images.genius.com/2d4d11ac230fd939de58ab215bb39096.852x480x1.jpg' ]
let songNames = ["The Color Violet", "Moscow Mule", "Friends", "Kiss Me", "Sunsetz"]
let artist = ["Tory Lanez", "Bad Bunny", "Chase Atlantic", "Sixpence None the Richer", "Cigarettes After Sex"]
let songLinks = ["https://youtu.be/07fhkAoCnig", "https://youtu.be/5hg3tzgUGFQ", "https://youtu.be/xKtkpHsK7jI", "https://youtu.be/Jnq9wPDoDKg", "https://youtu.be/5-rbSNzU_b8"]




//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.


// task 10: use `.push()` to add each input value to the correct array.

}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.



}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();

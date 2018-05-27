  // Instantiating the Wundergroud class
const wunderground = new Wunderground;

// Instantiating the UI class
const ui = new UI;

// Instantiating the UI class
const storage = new Storage;

// Loading favorits

document.addEventListener('DOMContentLoaded', () =>{
  storage.displayFavorites();
});


// Get input
const searchBtn= document.getElementById('searchBtn');
let cityInput= document.getElementById('cityInput');

  searchBtn.addEventListener('click',  () =>{
 if(cityInput.value !="" ){
  // Do the fetch

   wunderground.getWeather(cityInput.value.toLowerCase().replace(/[őóö]/ig, 'o')
     .replace(/[úűü]/ig, 'o')
     .replace(/á/ig, 'a') 
     .replace(/é/ig, 'e')
     .replace(/í/ig, 'i'))
   .then(data =>{
    // Displaying the fetched data
    ui.displayWeather(data);
   })
  .catch(err =>console.log(err));  

  //** Add to favorites**/
  // Setting timeout since cant define addToFavsBtn until it is rendered in the HTML and because of the loader icon it is rendered after 3 secs the search btn is clicked
   setTimeout(()=>{
     const addToFavsBtn = document.querySelector('#addToFavBtn');
   
     addToFavsBtn.addEventListener('click', () => {
      storage.addToFavorites(cityInput.value);
      console.log(cityInput.value);
      
     })
    
   },3001)
  

 }else{
  // Alert message
  ui.displayMessage('Search input can not be empty', 'alert alert-danger');
 }
})

// *** Displaying data from favorites ***//

// Defining the dropdown menu
let dropdownMenuItems = document.querySelector('#favoritesDropdown');
// console.log(dropdownMenuItems);

// Getting the data attribute from the element clicked
dropdownMenuItems.addEventListener('click', (e)=>{
  // console.log(e.target.getAttribute('data-city'));
  

  wunderground.getWeather(e.target.getAttribute('data-city').toLowerCase().replace(/[őóö]/ig, 'o')
    .replace(/[úűü]/ig, 'o')
    .replace(/á/ig, 'a')
    .replace(/é/ig, 'e')
    .replace(/í/ig, 'i'))
    .then(data => {
      ui.displayWeather(data);
    })
    .catch(err => console.log(err));
})

// Deleting from favorites
dropdownMenuItems.addEventListener('click', (e)=>{
  // console.log(e.target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-city'));
  
  let deleteItem= e.target.parentElement.parentElement.classList;
  if (deleteItem.contains('delete-item')){
    storage.deleteFavorite(e.target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-city'));
  }
})







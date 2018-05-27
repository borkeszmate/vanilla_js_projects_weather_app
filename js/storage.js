class Storage{

 getFavorites(){
  let favorites;
  if(localStorage.getItem('favorites')=== null){
   favorites=[];
  }else{
   favorites= JSON.parse(localStorage.getItem('favorites'));
  }
  return favorites;
 }

 displayFavorites(){
  let favorites;
  favorites= this.getFavorites();
  // Display favorites in the UI
  ui.displayFavorites(favorites);
 }

 addToFavorites(city){
  let favorites= this.getFavorites();
  if(favorites.includes(city)){
   ui.displayStorageMessage(`${cityInput.value} is already added to favorites`, 'alert alert-warning');
  }else{
   favorites.push(city);
   localStorage.setItem('favorites', JSON.stringify(favorites));
   ui.displayStorageMessage(`${cityInput.value} is successfully added to favorites`, 'alert alert-success');
   this.displayFavorites();
  }
 }

 deleteFavorite(city) {
  console.log(`${city} törlése...`);
  let favorites= this.getFavorites();
  favorites.forEach((favorite, index)=>{
   
   
   if(favorite == city ){
      favorites.splice(index, 1);
   }
  })
  localStorage.setItem('favorites', JSON.stringify(favorites));
  ui.displayFavorites(favorites);

 }
}
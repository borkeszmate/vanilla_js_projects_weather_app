class UI{
 constructor(){
  this.results = document.getElementById('results');
  document.getElementById('loaderSection').style.display= 'none';
  document.addEventListener('DOMContentLoaded', Storage.displayItems);

 }


 // Displaying messages top of page 
 displayMessage(message, classname){
  let messageDiv = document.createElement('div');
  messageDiv.className= classname;
  let messageText = document.createTextNode(message);
 

  messageDiv.appendChild(messageText);
  document.getElementById('alertDiv').append(messageDiv);
  setTimeout(()=>{
   document.getElementById('alertDiv').innerHTML="";
  },5000)
 }

 // Displaying messages top of page 
 displayStorageMessage(message, classname) {
  let messageDiv = document.createElement('div');
  messageDiv.className = classname;
  let messageText = document.createTextNode(message);


  messageDiv.appendChild(messageText);
  document.getElementById('storageMessage').append(messageDiv);
  setTimeout(() => {
   document.getElementById('storageMessage').innerHTML = "";
  }, 5000)
 }

 // Displaying the weather
 displayWeather(data){
  document.getElementById('loaderSection').style.display = 'block';

  setTimeout(()=>{
   document.getElementById('loaderSection').style.display = 'none';
  },2000);


  setTimeout(()=>{

   this.results.innerHTML= 
    `
    <div class="container">
   <div class="row ">
    <div class="col-md-8 m-auto">
     
     <div class="card">
      <div class="card-body">
       <h3 class="text-center display-4">${data.current_observation.display_location.city}</h3>
        <div class="text-center pb-2">
         <img src="${data.current_observation.icon_url}" class="m-auto" alt="">
         <p class="lead">${data.current_observation.icon}</p>
        </div>
       <ul class="list-group">
        <li class="list-group-item">Aktuális Hőmérséklet: ${data.current_observation.temp_c} </li>
        <li class="list-group-item">Legalacsonyabb hőmérséklet: ${data.current_observation.dewpoint_c} </li>
        <li class="list-group-item">Valós érzet: ${data.current_observation.feelslike_c} </li>
        <li class="list-group-item">Páratartalom: ${data.current_observation.relative_humidity} </li>
       </ul>
       <!-- Add to favorits -->
       <div class="text-right mt-3">
        <button id="addToFavBtn" class="btn btn-outline-info">Hozzáadás a kedvencekhez
        </button>
        <div id="storageMessage"></div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 
    `;
  },2000);
 }

 displayFavorites(favorites){
let favoritesDropdown= document.querySelector('#favoritesDropdown');
favoritesDropdown.innerHTML="";

   favorites.forEach((favorite, index)=>{
     let favoriteMenuItem= document.createElement('div');
     favoriteMenuItem.className= 'dropdown-item';
     favoriteMenuItem.setAttribute('data-city', favorite);
     favoriteMenuItem.textContent=favorite.toUpperCase(); 
    //  Creating the trash icon
     let trashIcon= document.createElement('div');
     trashIcon.className= "d-inline pl-2";
     trashIcon.innerHTML = '<a class="delete-item"><i class="fas fa-trash"></i></a>'
     favoriteMenuItem.appendChild(trashIcon);
     favoritesDropdown.appendChild(favoriteMenuItem);
    });
    // console.log(favoritesDropdown);

 }

}
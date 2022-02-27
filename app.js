const searchFood= ()=>{
    const searchBar = document.getElementById('search-bar');
    const searchBarValue = searchBar.value;
    searchBar.value = "";
    

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBarValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayFood(data.meals))
}
const displayFood = foods =>{
     console.log(foods);
     for(const food of foods){
         const foodDiv = document.getElementById('food-div');
         const div= document.createElement('div');
         div.classList.add('col')
         div.innerHTML = `
         <div style="box-shadow: 0px 4px 8px rgb(188, 188, 236);" class="card h-75 border-0 p-3 rounded-3">
         <img src="${food.strMealThumb}" class="card-img-top h-50" alt="...">
         <div class="card-body">
           <h5 class="card-title text-primary fw-bolder fs-4">${food.strMeal}</h5>
           <p class="card-text text-secondary fs-5">${food.strInstructions.slice(0,80)}........</p>
         </div>
         <div>
           <button onclick="detailsFood('${food.idMeal}')" class="ms-3 btn btn-primary px-4 fw-bold rounded-pill py-2">Read Details</button>
         </div>
       </div>
         `
         foodDiv.appendChild(div);
     }
}
const detailsFood = id =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => foodDetails(data))
}
const foodDetails = details =>{
    
    const  foodinfo= details.meals[0];
    console.log(foodinfo);
    const detailDiv = document.getElementById('detail-div');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
    <div style="box-shadow: 0px 8px 16px rgb(188, 188, 236);" class="row g-0 p-3 rounded-3 mx-auto w-50">
    <div class="col-md-5 mt-4">
      <img src="${foodinfo.strMealThumb}" class="img-fluid rounded-start" alt="...">
      <span><b>Catagory: ${foodinfo.strCategory}</b></span>
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <h5 class="card-title text-primary fw-bolder fs-4">${foodinfo.strMeal}</h5>
        <p class="card-text text-secondary fs-5">${foodinfo.strInstructions.slice(0,310)}</p>
      
        <a target="_blank" href="${foodinfo.strYoutube}" class="btn btn-primary rounded-pill px-3 ">vedio</a>
      </div>
    </div>
  </div>   
       
    </div>
    
    `
    detailDiv.appendChild(div);
}
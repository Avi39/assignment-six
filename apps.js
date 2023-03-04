const loadApps = async(dataLimit) =>{
    //start spinner
    toggleSpinner(true);
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json(); 
    displayApps(data.data.tools,dataLimit);
    dateData(data.data.tools);
}
const displayApps = (apps,dataLimit) =>{
    const appsContainer = document.getElementById('apps-container');
    if(dataLimit === 6 && apps.length > 6){
        apps = apps.slice(0,6);
    }
    else{
        apps = apps.slice(6,12);
    }
    apps.forEach(app => {
        const appDiv = document.createElement('div');
        appDiv.classList.add('col');
        appDiv.innerHTML =` 
        <div class="col">
        <div class="card">
          <img src="${app.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h3>features</h3>
            <ol>
              <li>${app.features[0]}</li>
              <li>${app.features[1]}</li>
              <li>${app.features[2]}</li>
            </ol>
            <h5 class="card-title mt-4">${app.name}</h5>
            <div class="d-flex justify-content-between">
            <div>
            <i class="fa-solid fa-calendar-days"></i>
            ${app.published_in}
            </div>
            <div>
            <button onclick="loadAppDetails('${app.id}')" class="text-end btn btn-danger"data-bs-toggle="modal"data-bs-target="#exampleModal"><i class="fa-solid fa-arrow-right"></i></button>
            </div> 
            </div>   
          </div>
        </div>
      </div>

        `;
         appsContainer.appendChild(appDiv);
        
    });
    //stop spinner
     toggleSpinner(false);
}

//see more button
const show = document.getElementById('btn-show-all')
show.addEventListener('click',function(){
    loadApps(12);
    show.classList.add('d-none');
})
const toggleSpinner = load =>{
    const spinner = document.getElementById('spinner');
    if(load){
        spinner.classList.remove('d-none')
    }
    else{
        spinner.classList.add ('d-none')
    }
}
//loadAppDetails
const loadAppDetails = async id =>{
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayAppDetails(data.data);
}
//display app details
const displayAppDetails = details =>{
  const appDetails = document.getElementById('detailsBody');
  appDetails.innerHTML =`
     <p>${details.description}</p>
     <div class="d-flex justify-content-between">
     <div class="text-success">${details.pricing[0].price?details.pricing[0].price:'free of cost'}<br>${details.pricing[0].plan?details.pricing[0].plan:'/basic'}</div>
     <div class="text-warning">${details.pricing[1].price?details.pricing[1].price:'free of cost'}<br>${details.pricing[1].plan?details.pricing[1].plan:'/pro'}</div>
     <div class="text-danger">${details.pricing[2].price?details.pricing[2].price:'free of cost'}<br>${details.pricing[2].plan?details.pricing[2].plan:'/enterprises'}</div>
     </div>

     <div class="d-flex gap-4 mt-4">
       <div>
         <h3 >Features</h3>
           <li class="text-center">${details.features[1].feature_name}</li>
           <li class="text-center">${details.features[2].feature_name}</li>
           <li class="text-center">${details.features[3].feature_name}</li>
       </div>
        <div>
          <h3>Integrations</h3>
            <li class="text-center">${details.integrations[0]?details.integrations[0]:'no data found'}</li>
          <li class="text-center">${details.integrations[1]?details.integrations[1]:'no data found'}</li>
          <li class="text-center">${details.integrations[2]?details.integrations[2]:'no data found'}</li>
          
       </div>
      </div>
      
      <div class="mt-4">
        <div>
        <img src="${details.image_link[0]?details.image_link[0]:'no data'}" class="card-img-top" alt="...">
          <p id="" class="first-txt ">${details.accuracy.score} accuracy</p>
        <h3 class="mt-4">${details.input_output_examples[0].input}</h3>
        <p>${details.input_output_examples[0].output?details.input_output_examples[0].output:'no not yet! take a break'}</p>
      </div>    
  `
}
// document.getElementById('sort-date').addEventListener('click',function(){
//   dateData(dates);
// })
// function dateData(dates){
//   dates.forEach(date=>{
//     const arr =[] ;
//     if(arr>dates.published_in) {
//        arr = dates.published_in
//        displayApps();
//     }
// //   })
  

// }
const beforeAll = loadApps(6)
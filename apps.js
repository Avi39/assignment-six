const loadApps = async(dataLimit) =>{
    //start spinner
    toggleSpinner(true);
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json(); 
    displayApps(data.data.tools,dataLimit);
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
            <button class="text-end btn btn-danger"><i class="fa-solid fa-arrow-right"></i></button>
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
const beforeAll = loadApps(6)
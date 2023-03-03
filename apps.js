const loadApps = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json(); 
    displayApps(data.data.tools);
}
const displayApps = (apps) =>{
    const appsContainer = document.getElementById('apps-container');
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
            <i class="fa-solid fa-calendar-days"></i>
            ${app.published_in}
          </div>
        </div>
      </div>

        `;
         appsContainer.appendChild(appDiv);
        
    });
}
loadApps()
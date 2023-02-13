// nav
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// users
fetch('https://reqres.in/api/users')
  .then(response => response.json())
  .then(json => {
    console.log(json.data);
    const markup = json.data.map(el => {
      return `
        <li class="card-container">
            <div class="image-container">
              <img class="round" src="${el.avatar}">
            </div>
             <div class="name-container"> 
                 <span class="firstName">${el.first_name}</span>
                 <span class="lastName">${el.last_name}</span>
                 
             </div> 
             <p class="email">${el.email}</p>  </br>
             <button type="button"><a href="../index.html">View More</a></button>
            </li>
        `
    });
    console.log(markup);
    document.querySelector('.list-container').innerHTML = markup.join('');
  })
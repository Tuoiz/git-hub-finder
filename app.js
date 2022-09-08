let ui=document.querySelector('.profile');
let search=document.querySelector('.find');
let input=document.querySelector('input');

search.addEventListener('click',( )=>{ 
  let userInput=input.value;    
    let client_id='0dd1a517d2d7bbacd6d3';
    let client_secret='607e8f64e208a00bb2884e1f400aeb2d6a41fab4';
    let url=`https://api.github.com/search/users?q=${userInput}&client_id=${client_id}&client_secret=${client_secret}&per_page=6`;
    async function getDetails() { 
      const response= await fetch(url);
      const responseArray= await response.json();
      const data=responseArray.items;
      ui.innerHTML='';
      data.forEach(item => {
      ui.innerHTML +=
      `
      <div class="profile_container">
        <div class="user_info">
          <h3>Username: ${item.login}</h3>
          <h4>User ID: ${item.id}</h4>
          <a href="${item.html_url}">Click to view on github</a>
        </div>
        <div class="img_container">
          <img src="${item.avatar_url}" alt="" width="100px" height="100px">
        </div>
      </div>
      =`;   
    }); 
      input.innerText=``;
    } 
    getDetails()
    .catch(()=>{
      if (input.value==='') {
        ui.innerHTML=
          `
          <div class="alert">
            <h3>Please fill in a user!</h3>
          </div>`;
      } 
      else{
        ui.innerHTML=
      `
      <div class="alert">
        <h3>Check your internet connection!</h3>
      </div>`;
      } 
    });
  }
)

  

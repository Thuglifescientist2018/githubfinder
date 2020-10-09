// Init Github
const github = new Github;
const ui = new UI;
// Search Input 
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e)=> {
    // GET input text;
    const userText = e.target.value;
    if(userText !== '') {
      audioObj = new Audio("taa.wav").play();
        // Make Http call
        github.getUser(userText)
        .then(data => {
          if(data.profile.message === 'Not Found') {
            //Show Alert
            ui.showAlert('User Not Found', 'alert alert-danger');
          }
          else {
            // Show profile
            ui.showProfile(data.profile)
            ui.showRepos(data.repos);
          }
        })
        
    }
    else  {
        // Clear profile
        ui.clearProfile();
    }
})

const lightmode = document.getElementById('lightmode').addEventListener('change', toggleTheme);
function toggleTheme() {
  const link = document.querySelector("head").querySelectorAll("link")[1];
  if(link.getAttribute("href") === "style.css") {
      link.setAttribute("href", "");
  }
  else {
    link.setAttribute("href", "style.css");
  }
  const list_group_items = document.querySelectorAll(".list-group-item");
  list_group_items.forEach(function(item){
    item.style.backgroundColor = "white !important";
    
  })
}
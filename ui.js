class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }
    //Display profile in UI;
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile </a>
            </div>
            <div class="col-md-9">
                <span class="badge-badge-primary">Public Repos: <strong>${user.public_repos} </strong> </span>
                <span class="badge-badge-primary">Public Gists: <strong>${user.public_gists} </strong> </span>
                <span class="badge-badge-primary">Followers:<strong> ${user.followers}</strong> </span>
                <span class="badge-badge-primary"> Following:<strong> ${user.following} </strong></span><br><br>
                <ul class="list-group"> 
                    <li class="list-group-item">${user.company}</li>
                    <li class="list-group-item">${user.blog}</li>
                    <li class="list-group-item">${user.location}</li>
                    <li class="list-group-item">${user.created_at}</li>
                </ul>
            </div>
        </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>

        `;
    }
    
    // Show user repo
    showRepos(repos) {
        let output = '';
        repos.forEach(function(repo){
            output += `
            <div class="card text-white bg-dark card-body mb-2">
                <div class="row">
                <div class="col-md-6">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class="col-md-6">
                <span class="badge badge-primary"> Stars: ${repo.stargazers_count}</span>
                <span class="badge badge-primary"> Watchers: ${repo.watchers_count}</span>
                <span class="badge badge-primary"> Forks : ${repo.forms_count}</span>
                </div>
            </div>
            </div>
            `
        });
        //Output repos
        document.getElementById('repos').innerHTML = output;
    }
    // Show alert message
    showAlert(message, className) {
        //Clear any remaining alrts
        this.clearAlert();
        //Create div
        const div = document.createElement('div');
        //Add a class
        div.className = className;
        //Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.searchContainer');
        // Get searchbox
        const search = document.querySelector(".search");
        container.insertBefore(div, search);
        setTimeout(() => {
            this.clearAlert();
        }, 3000);

    }
    //Clear alert message
    clearAlert()  {
        const currentAlert = document.querySelector(".alert");
        if(currentAlert) {
            currentAlert.remove();
        }
    }
    //clear profile
    clearProfile() {
        this.profile.innerHTML ='';
    }
    
}
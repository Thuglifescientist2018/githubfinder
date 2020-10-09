class Github {
     constructor() {
         this.client_id = 'fd728a6f6077a4efdd33'
         this.client_secrect = '4c1f9a8d5abd4019b3c71b32f6657c04764cdc34';
         this.repos_count = 5;
         this.repos_sort = 'created: asc';
     }
     async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secrect=${this.client_secrect}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secrect=${this.client_secrect}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        }
     }
}
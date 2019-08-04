class GitHub{
  constructor() {
    this.client_id = '94e0bff9c34e759b073e';
    this.client_secret = '7e2c034cd94b36464957eb4a084257c40bd1ff94';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret = ${this.client_secret}`);

    // const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page =${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret = ${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    
  return {
      profile: profile,
      repos : repos
   }
 }

}
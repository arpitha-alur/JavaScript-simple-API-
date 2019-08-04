const github = new GitHub;
const ui = new UI;
//Serch input

const searchUser =  document.getElementById('searchUser');

searchUser.addEventListener('keyup',(e) => {
  const userText = e.target.value;
  if(userText!==''){
    //Make http call
    github.getUser(userText)
    .then(data => {
       if(data.profile.message === 'Not Found'){

         //Show alert(ui.js)
         ui.showAlert('User not found','alert alert-primary');
       }
       else{
         //Show profile(ui.js)
         ui.showProfile(data.profile);
         ui.showRepos(data.repos)
       }
    })
  }
  else{
    //Clear profile(ui.js) 
    ui.clearProfile();
  }
});
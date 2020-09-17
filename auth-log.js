//Listen for Auth staus changes

auth.onAuthStateChanged(user => {
    if(user!= null){
        window.location.href="index.php";
    }
});

//Login

const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit',(e) => {
  //get form values
  e.preventDefault();
  const email = loginForm['nemail'].value;
  const password = loginForm['npassword'].value;
  auth.signInWithEmailAndPassword(email,password).then(cred =>{
    window.location.href="index.php";
    document.querySelector('.alert').style.display = 'none';
  }).catch(function(err) {
    var errorMsg = err.message;
    document.querySelector('.alert').style.display = 'block';
    document.querySelector('.alert').innerHTML = errorMsg;
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    
    },5000);

  });
});
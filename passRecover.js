const recoveryForm = document.querySelector('#rForm');
document.querySelector('.alert').style.display = 'none';
recoveryForm.addEventListener('submit',(e) =>{
  e.preventDefault();
  const sEmail = recoveryForm['nemail'].value;
  auth.sendPasswordResetEmail(sEmail);
  setTimeout(function(){ 
  document.querySelector('.alert').style.display = 'block';
  document.querySelector('.alert').style.backgroundColor = "green";
 }, 3000);
  
  document.querySelector('.alert').innerHTML = "Recovery Link sent to email";
 recoveryForm.reset();
});

console.log('clicked');
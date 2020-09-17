var togglePassword = document.getElementById("toggle-password");

if (togglePassword) {
	togglePassword.addEventListener('click', function() {
	  var x = document.getElementById("Npassword");
	  if (x.type === "Npassword") {
	    x.type = "text";
	  } else {
	    x.type = "Npassword";
	  }
	});
}

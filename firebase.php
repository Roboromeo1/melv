<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-firestore.js"></script>

<script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-storage.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-analytics.js"></script>

<script>
	// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAmtJoQZrHWyDYhpfJwWS_-H6BM4sySCnI",
    authDomain: "melonwheels-5f9e1.firebaseapp.com",
    databaseURL: "https://melonwheels-5f9e1.firebaseio.com",
    projectId: "melonwheels-5f9e1",
    storageBucket: "melonwheels-5f9e1.appspot.com",
    messagingSenderId: "892450179154",
    appId: "1:892450179154:web:1b894dd2a61feb8f48b78b",
    measurementId: "G-JXP09H3NRV"
  };
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
	firebase.analytics();
	const auth = firebase.auth();
	const db = firebase.firestore();

	function getUsers() {
		var select = document.querySelectorAll('.selectUser');
		db.collection("Users").get()
			.then(function(querySnapshot) {
				querySnapshot.forEach(function(doc) {
					var op = new Option(doc.data().email, doc.data().email)

					select.forEach((s) => {
						s.append(op);
					});
				});
			})
			.catch(function(error) {
				console.log("Error getting documents: ", error);
			});
	}

	function getLifepacks() {
		var select = document.querySelectorAll('.selectPacks');
		db.collection("Lifepacks").get()
			.then(function(querySnapshot) {
				querySnapshot.forEach(function(doc) {
					var op = new Option(doc.data().LifePackName, doc.id);
					select.forEach((s) => {
						s.append(op);
					});
				});
			})
			.catch(function(error) {
				console.log("Error getting documents: ", error);
			});
	}

	

	getLifepacks();
	getUsers();
</script>
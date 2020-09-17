
//Listen for Auth staus changes
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('User logged in: ', user);
        addToUsers(user);
        
    } else {
        console.log('User logged out ');
        window.location.href = "auth_login.php";
    }
});

// add users to database 'users'
function addToUsers(user) {
    var email = user.email;
    var uid = user.uid;
    
    var users = db.collection("users").doc(uid);
    users.set({
        email: email,
        id: uid,
    });
  }
  

//Logout
const logoutbtn = document.querySelector('#logout');

logoutbtn.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();

});


const form = document.querySelector('#bForm');
form.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('form Submitetd');

    db.collection('bookings').add({
        StartLocation: form.origin.value,
        DropLocation: form.destination.value,
        Weight : form.kgs.value,
        DeliveryTime: form.time.value,
        bookingType: "0",
        DeliveryNotes : form.notes.value,
        OrderId : form.Oid.value,
        
       
    }).then(() => {
       console.log("Booked");
    });

});

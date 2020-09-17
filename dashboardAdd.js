//Listen for Auth staus changes
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('User logged in: ', user);

    } else {
        console.log('User logged out ');
        window.location.href = "auth_login.php";
    }
});


//Logout
const logoutbtn = document.querySelector('#logout');

logoutbtn.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();

});


const form = document.querySelector('#lifepackForm1');

//find checkbox value https://www.mmbyte.com/article/2624.html

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('form Submitetd');

    var usersSelects = document.querySelector('.users-quesitons');
    var selects = usersSelects.querySelectorAll('.selectUser');
    var users = [];
    for (let index = 0; index < selects.length; index++) {
        users.push(selects[index].value);
    };

    //get check box id 
    let cOpen = document.getElementById("copen");
    let cPrivate = document.getElementById("cprivate");
    let checkboxValue = "";
    if (cOpen.checked = true) {
        checkboxValue = "open";
        cPrivate.checked = false;
    } else {
        checkboxValue = "private";
        cOpen.checked = false;
    }
    db.collection('Lifepacks').add({
        LifePackName: form.name.value,
        Description: form.desc.value,
        access: checkboxValue,
        users,
        startDate: form.sdate.value,
        endDate: form.edate.value,
    }).then(() => {
        window.location.href = "lifepack.php";
    });
    form.name.value = '';
    form.desc.value = '';
    form.sdate.value = '';
    form.edate.value = '';
    form.checkBox.value = '';

});
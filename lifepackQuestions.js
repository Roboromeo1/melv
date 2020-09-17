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

dataIdDocument = localStorage.getItem('dataId');

function getQuestionPack() {

    if (dataIdDocument) {

        db.collection("Lifepacks").doc(dataIdDocument).collection('Questions').get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(async function(doc) {
                    if (doc) {
                        type = doc.data().type;

                        await $('#cards-pack').append('<div class="card component-card_1 mb-3"><div id="' + doc.id + '" data-type="' + type + '" class="card-body"><div class="row"><div class="col-9"><h5 class="card-title">' + doc.data().nameQuestion + '</h5><h7 class="card-text">' + doc.data().type + '</h7>	<p class="card-text">' + doc.data().desQuestion + '</p></div><div class="col-3 text-center"><div class="dropdown dropup custom-dropdown"><a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a><div class="dropdown-menu" aria-labelledby="dropdownMenuLink-1"><a class="dropdown-item" onclick=editQuestion("' + doc.id + '")>Edit</a><a   class="dropdown-item" onclick=deleteQuestion("' + doc.id + '")>Delete</a></div></div></div></div></div></div>');
                    }
                });
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
    }
}

function getQuestionPackUsers() {
    if (dataIdDocument) {

        db.collection("Lifepacks").doc(dataIdDocument).get()
            .then(function(querySnapshot) {
                i = 0;
                var users = querySnapshot.data().users;
                console.log(users);
                users.forEach((user) => {

                    $('.users-quesitons-saved').append('<div id="user' + i + '" class="form-group"><label class="userActives" for="exampleFormControlSelect1">' + user + '</label><span onclick=(removeUser(' + i + ')) class="float-right  badge outline-badge-danger">Remove</span></div>');
                    i++;
                });
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
    }
}

function editQuestion(id) {


    var type = $('#' + id).attr('data-type');

    localStorage.setItem('idDocQuestion', id);
    sessionStorage.setItem('option', type);
    console.log(type);
    console.log(localStorage.getItem('idDocQuestion'));

    if (type == 'Mcq Questions') {
        window.location.href = "lifepackquestionAdd1.php";
    } else if (type == 'Image Type Question') {
        window.location.href = "lifepackQuestionImageAdd.php";
    } else if (type == 'Audio Type Question') {
        window.location.href = "lifepackQuestionAudioAdd.php";
    } else if (type == 'Range Slider Question') {
        window.location.href = "lifepackQuestionSlideAdd.php";
    } else if (type == 'Timer Question') {
        window.location.href = "lifepackQuestionTimerAdd.php";
    } else if (type == 'Matrix Questions'){
        window.location.href = "lifepackQuestionMatrixAdd.php";
    }
}


async function deleteQuestion(id) {
    anwswers = await db.collection('Lifepacks').doc(dataIdDocument).collection('Questions').doc(id).collection('Answers').get();
    anwswers.forEach((doc) => {
        anwswers = doc.id
    });
    console.log(anwswers);
    if (typeof(anwswers) == 'string') {
        await db.collection('Lifepacks').doc(dataIdDocument).collection('Questions').doc(id).collection('Answers').get().then(
            (snapshots) => {
                snapshots.forEach((doc) => {
                    db.collection('Lifepacks').doc(dataIdDocument).collection('Questions').doc(id).collection('Answers').doc(doc.id).delete().catch((error) => {
                        console.log(error);
                    });
                });
            }
        );
    }
    await db.collection('Lifepacks').doc(dataIdDocument).collection('Questions').doc(id).delete();
    window.location.href = "lifepackQuestions.php";
}


getQuestionPackUsers();
getQuestionPack();

async function removeUser(id) {
    await $('#user' + id).remove();
    addUser();
}

function addUser() {
    var listUser = [];
    var select = document.querySelector('.selectUser');
    var userActives = document.querySelectorAll('.userActives');
    if (userActives.length > 0) {
        for (let index = 0; index < userActives.length; index++) {
            listUser.push(userActives[index].textContent);
        }
    } else {
        listUser.push(userActives.textContent);
    }

    console.log(listUser);
    console.log(userActives);
    if (select != null) {
        listUser.push(select.value);
        console.log(listUser);
        db.collection('Lifepacks').doc(dataIdDocument).update({
            users: listUser
        }).then(() => {
            window.location.href = "lifepackQuestions.php";
        });
    } else {
        db.collection('Lifepacks').doc(dataIdDocument).update({
            users: listUser
        }).then(() => {
            window.location.href = "lifepackQuestions.php";
        });
    }

}

//    // real-time listener
//    db.collection('Lifepacks').collection('Questions').onSnapshot(snapshot => {
//     let changes = snapshot.docChanges();
//     changes.forEach(change => {
//         console.log(change.doc.data());
//         if(change.type == 'added'){
//             renderLifePackQuestions(change.doc);
//         } else if (change.type == 'removed'){
//             let li = lifepackList.querySelector('[data-id=' + change.doc.id + ']');
//             lifepackList.removeChild(li);
//         }
//     });
// });

// const ul = document.querySelector('.lifepacks');
// // create element & render cafe
// function renderLifePackQuestions(doc){
//     const lp = doc.data();
//     let li = document.createElement('li');
//     li.classList.add('list-group-item','ist-group-item-action','m-2');
//     let div1 = document.createElement('div');
//     div1.classList.add('media');
//     let h4 = document.createElement('h4');
//     h4.classList.add('media-heading');
//     h4.innerHTML = lp.LifePackName;

//     let p = document.createElement('p');
//     p.classList.add('media-text');
//     p.innerHTML = lp.Description;

//     let div2 = document.createElement('div');
//     div2.classList.add('media-notation','float-right');
//     let s1 = document.createElement('button');
//     s1.classList.add('btn');
//     s1.innerHTML = 'Edit';
//     let s2 = document.createElement('button');
//     s1.style.margin = "30px";
//     s2.innerHTML = 'Delete';
//     s2.classList.add("delete","btn","btn-danger");
// //funvtion to create svg
// // let SVG=function(h,w){
// //     let NS="http://www.w3.org/2000/svg";
// //     let svg=document.createElementNS(NS,"svg");
// //     svg.width=w;
// //     svg.height=h;
// //     return svg;
// //    }
// //    var svg1=SVG(24,24);
// //     let div2 = `
// //     <div class="media-notation float-right"> 
// //     <a href="javascript:void(0);" class=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit </a>
// //     <a href="javascript:void(0);" class="delete"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete </a>
// // </div>
// //     `;

//     li.setAttribute('data-id', doc.id);
//     // name.textContent = doc.data().name;
//     // city.textContent = doc.data().city;
//     // cross.textContent = 'x';

//     li.appendChild(div1);
//     li.appendChild(h4);
//     li.appendChild(p);
//     div2.appendChild(s1);
//     div2.appendChild(s2);
//     ul.appendChild(li);
//     li.appendChild(div2);

//     // deleting data
//         // const delBtn = document.querySelector('.delete');
//        s2.addEventListener('click', (e) => {
//         e.stopPropagation();
//      //get data-id attribute in plain Javascript
//       var dataID = li.getAttribute('data-id');

//      //get data-id 
//      db.collection('Lifepacks').doc(dataID).documentSnapshot.;

//   });

//   //Add Question Page
//    s1.addEventListener('click',(e)=>{
//     e.preventDefault();
//     var dataID = li.getAttribute('data-id');
//     localStorage.setItem("dataId",dataID);
//     console.log(dataID);
//     window.location.href = "lifepackQuestions.php";
//    });

// };






let dataId = localStorage.getItem("dataId");

function resetItems() {
    localStorage.removeItem('idDocQuestion');
    sessionStorage.removeItem('option');
}
resetItems();
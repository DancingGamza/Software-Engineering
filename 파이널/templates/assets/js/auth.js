var firebaseConfig = {
    apiKey: "AIzaSyDKsm3hUDIHJlCd6ga8sYFTxdjQGCesGD4",
    authDomain: "caucaucua-ae8eb.firebaseapp.com",
    projectId: "caucaucua-ae8eb",
    storageBucket: "caucaucua-ae8eb.appspot.com",
    messagingSenderId: "205259447185",
    appId: "1:205259447185:web:4ffd69786d0baed0795830",
    measurementId: "G-YY9LK77BL8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function requestLogin() {
    console.log('어 클릭하긴 했네?');
    const email = document.getElementById('exampleInputEmail').value
    const password = document.getElementById('exampleInputPassword').value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        if (userCredential) {
            alert('Login Successful');
            location.href = './index.html'
        }
      })
      .catch((error) => {
        console.log('error')
        alert('Login Failed', error.message);
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
}

document.getElementById('cau-login').addEventListener('click', requestLogin);
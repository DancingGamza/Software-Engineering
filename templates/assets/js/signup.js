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

function requestSignUp() {
    console.log('click check');
    const email = document.getElementById('exampleInputEmail').value
    const password = document.getElementById('exampleInputPassword').value
    const name = document.getElementById('exampleFirstName').value
    const university = document.getElementById('exampleFirstUniversity').value
    const major = document.getElementById('exampleLastMajor').value
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        if (userCredential) {
          alert('Sign Up Successful')
          location.href = './login.html'
            firebase.firestore().collection('user-data').doc(email).set({
              name,
              university,
              major
            })
        }
      })
      .catch((error) => {
        console.log('error')
        alert(`Sign Up Failed ${error.message}`);
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
}

document.getElementById('cau-register-btn').addEventListener('click', requestSignUp);
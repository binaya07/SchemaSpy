const firebaseConfig = {
    apiKey: "AIzaSyBf7u6IAxTKZLn9PF9gxNIrdB1EqwtFuy4",
    authDomain: "cpschemadoc.firebaseapp.com",
    databaseURL: "https://cpschemadoc.firebaseio.com",
    projectId: "cpschemadoc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();

if(localStorage.getItem('isLoggedIn')){
  window.location.href = "schemaSpy/index.html";
}

// Login
const loginForm = document.querySelector("#login-form");
const errorMsg = document.querySelector("#login-error");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get user info
  const username = loginForm["login-username"].value;
  const password = loginForm["login-password"].value;

  auth.signInWithEmailAndPassword(username, password).then(()=> {
    localStorage.setItem('isLoggedIn', true);
    window.location.href = "schemaSpy/index.html";
  }).catch((error)=>{
    errorMsg.classList.remove("no-display");
  });

});

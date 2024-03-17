
const loginButton = document.querySelector("#loginbutton")

loginButton.addEventListener("click", sendLoginRequest)

function sendLoginRequest() {
  const usernameInput = document.querySelector("#username")
  const passwordInput = document.querySelector("#password")

  const username = usernameInput.value
  const password = passwordInput.value

  if (validateCredentials(username, password)) {
    window.location.href = "./index2.html"
  } else {
    alert("Virheellinen käyttäjänimi tai salasana. Yritä uudelleen.")
    passwordInput.value = ""
  }
}

function validateCredentials(username, password) {
  
  const correctUsername = "käyttäjä1"
  const correctPassword = "salasana1"

  return username === correctUsername && password === correctPassword
}

function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}

function hideSidebar (){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}


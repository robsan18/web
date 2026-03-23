// REGISTER
const reg=document.getElementById("registerForm")

if(reg){

reg.addEventListener("submit",function(e){

e.preventDefault()

let user={
username:username.value,
email:email.value,
password:password.value
}

localStorage.setItem("user",JSON.stringify(user))

alert("Account created")

window.location="login.html"

})

}

// LOGIN
const login=document.getElementById("loginForm")

if(login){

login.addEventListener("submit",function(e){

e.preventDefault()

let user=JSON.parse(localStorage.getItem("user"))

if(loginUser.value===user.username &&
loginPass.value===user.password){

window.location="dashboard.html"

}else{

alert("Wrong login")

}

})

}

// LOGOUT
function logout(){
window.location="login.html"
}

// SHOW PASSWORD
function togglePassword(id){
let input=document.getElementById(id)
input.type = input.type==="password"?"text":"password"
}

// GOOGLE SEARCH
function searchGoogle(){
let q=document.getElementById("searchInput").value
window.location="https://www.google.com/search?q="+q
}

// VIDEO PLAYER
function playVideo(src,title){

let video=document.getElementById("lessonVideo")

video.src=src

document.getElementById("videoTitle").innerText=title

}

// CODE EDITOR
function runCode(){

let code=document.getElementById("code").value

let frame=document.getElementById("output").contentWindow.document

frame.open()
frame.write(code)
frame.close()

}

// DARK MODE
function toggleMode(){
document.body.classList.toggle("dark")
}

// MOBILE MENU
function toggleMenu(){
document.getElementById("menu").classList.toggle("show")
}

// CERTIFICATE NAME
let cert=document.getElementById("studentName")

if(cert){

let user=JSON.parse(localStorage.getItem("user"))

if(user) cert.innerText=user.username

}
// LOAD PROFILE
let profileName = document.getElementById("profileName")
let profileEmail = document.getElementById("profileEmail")

if(profileName){

let user = JSON.parse(localStorage.getItem("user"))

if(user){

profileName.innerText = user.username
profileEmail.innerText = user.email

}

}

// EDIT PROFILE
function editProfile(){

document.getElementById("editBox").style.display = "block"

}

// SAVE PROFILE
function saveProfile(){

let user = JSON.parse(localStorage.getItem("user"))

user.username = document.getElementById("editName").value
user.email = document.getElementById("editEmail").value

localStorage.setItem("user", JSON.stringify(user))

alert("Profile Updated")

location.reload()

}
// Tab Switching
function switchTab(tab){
  document.getElementById('htmlCode').style.display = tab==='html'?'block':'none';
  document.getElementById('cssCode').style.display = tab==='css'?'block':'none';
  document.getElementById('jsCode').style.display = tab==='js'?'block':'none';
}

// Run Code
function runCode(){
  const html = document.getElementById('htmlCode').value;
  const css = `<style>${document.getElementById('cssCode').value}</style>`;
  const js = `<script>${document.getElementById('jsCode').value}<\/script>`;
  
  const output = document.getElementById('output').contentWindow.document;
  output.open();
  output.write(html + css + js);
  output.close();

  // Save to localStorage
  localStorage.setItem('htmlCode', html);
  localStorage.setItem('cssCode', document.getElementById('cssCode').value);
  localStorage.setItem('jsCode', document.getElementById('jsCode').value);
}

// Reset
function resetCode(){
  document.getElementById('htmlCode').value='';
  document.getElementById('cssCode').value='';
  document.getElementById('jsCode').value='';
  runCode();
}

// Load saved code on page load
window.addEventListener('DOMContentLoaded', ()=>{
  if(localStorage.getItem('htmlCode')) document.getElementById('htmlCode').value = localStorage.getItem('htmlCode');
  if(localStorage.getItem('cssCode')) document.getElementById('cssCode').value = localStorage.getItem('cssCode');
  if(localStorage.getItem('jsCode')) document.getElementById('jsCode').value = localStorage.getItem('jsCode');
  runCode();
});

// Shortcut Ctrl+Enter to run code
document.addEventListener('keydown', (e)=>{
  if(e.ctrlKey && e.key==='Enter'){
    runCode();
  }
});
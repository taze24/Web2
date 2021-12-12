let username;
let password;
let inputpassword;
let inputusername;
function FunkPWinput() {
    username = document.getElementById("Username").value;
    password = document.getElementById("password").value;
    alert("Successfully Submitted \nYour Username and Password are: "+username+" "+password)
}
function FunkPassword() {
    inputpassword = (document.getElementById("passwordid").value);
    inputusername = (document.getElementById("usernameid").value);
    if ((inputpassword == password) && (inputusername == username))
        alert("The entered password and username are correct!");
    else
        alert("The entered password and username are incorrect!");

}

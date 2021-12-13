let username;
let password;
let inputpassword;
let inputusername;
function FunkPWinput() {
    if ((password == "") && (username == "")) {
        alert("Empty");
    }
    else {
        username = document.getElementById("FUNKusername").value;
        password = document.getElementById("FUNKpassword").value;
        alert("Successfully Submitted \nYour Username is: " + username + "\nYour Password is: " + password)
    }
}
function FunkPassword() {
    inputpassword = (document.getElementById("LOGINpasswordid").value);
    inputusername = (document.getElementById("LOGINusernameid").value);
    if ((inputpassword == "viktortaze") && (inputusername == "taze24"))
        alert("The entered password and username are correct!");
    else
        alert("The entered password and username are incorrect!");

}

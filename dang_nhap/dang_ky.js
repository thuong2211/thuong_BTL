function signup(e){
event.preventDefault();
var username = document.getElementById('username').value;
var gmail= document.getElementById('gmail').value;
var password = document.getElementById('password').value;
var confirm = document.getElementById('confirm').value;

var user = {
    username: username,
    email: gmail,
    password: password,
    confirm_pw: confirm,
};

var a = JSON.stringify(user);
localStorage.setItem(username, a);
}

function login(e){
    event.preventDefault();
    var username = document.getElementById('username').value;
    var gmail = document.getElementById('gmail').value;
    var password = document.getElementById('password').value;

    var user = localStorage.getItem(username);
    var data = JSON.parse(user);

    if(user == null){
        alert("Bạn cần điền lại thông tin để đằng nhập");
        return;
    } 
    else if(username == data.username && gmail == data.email && password == data.confirm_pw){
        if(username != "" && gmail != "" && password != ""){
            alert("Bạn đã đăng nhập thành công");
            window.location.href = "../trang_chu/trang_chu.html";
        }
        return;
    }
    else if(username == data.username && gmail == data.email && password != data.confirm_pw){
        alert("Bạn đã điền sai mật khẩu");
        return;
    } 
    else{
        alert("Bạn đã điền sai thông tin. Vui lòng nhập lại.");
        return;
    }
}


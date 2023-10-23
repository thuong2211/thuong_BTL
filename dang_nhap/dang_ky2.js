function send(){
    var arr = document.getElementsByTagName('input');
    var name = arr[1].value;
    var gmail = arr[2].value;
    var pw = arr[3].value;
    var cpw = arr[4].value;
    var sdt = arr[5].value;
    var dob = arr[6].value;
    var t2;
    var t3,t3_1,t3_2;
    var t5_3,t5,t5_2;
    var t6;

    //kiểm tra các trường có rỗng không
    if(name == "" || gmail == "" || pw == "" || cpw == "" || sdt == "" || dob == ""){
        alert("Hãy điền thông tin vào các trường");
        return;
    }

    //kiểm tả địa chỉ email hợp lệ
    if(isEmailAdress(gmail) == false){
        alert("Địa chỉ email không hợp lệ");
        t2 = 0;
        return;
    }else{
        t2 = 1;
    }

    //kiểm tra số điện thoại: là kiểu số, có 10 số, bắt đầu bằng số 0;
    if(isNaN(sdt)){//is not a number
        alert("Số điện thoại chỉ có số");
        t5 = 0;
        return;
    }else{
        t5 = 1;
    }

    if(checkLengthNumber(sdt) != 10){
        alert("Số điện thoại có 10 số");
        t5_2 = 0;
        return;
    }else{
        t5_2 = 1;
    }

    if(checkNumber(sdt) != 1){
        alert("Số điện thoại phải bắt đầu bằng số 0");
        t5_3 = 0;
        return;
    }else{
        t5_3 = 1;
    }
    //tổng hợp cả 3 điều kiện của số
    if(t5_2 == 1 && t5 == 1 && t5_3 == 1){
        t5 = 1;
    }else{
        t5 = 0;
    }

    //kiểm tra ngày tháng năm sinh
    // var t6 = checkDob(dob);
    // if(t6 == 3){
    //     alert("Ngày sinh sai định dạng");
    // }
    // if(t6 == 2){
    //     alert("Ngày tháng năm sinh không hợp lệ");
    // }


    //kiểm tra mật khẩu
    if(checkLengthPw(pw) < 8){
        alert("Mật khẩu có độ dài lớn hơn 8 chữ sô");
        t3_1 = 0;
        return;
    }else{
        t3_1 = 1;
    }
    if(checkPw(pw) == false){
        alert("Mật khẩu phải có kí tự hoa, kí tự số, kí tự thường và kí tự đặc biệt");
        t3_2 = 0;
        return;
    }else{
        t3_2 = 1;
    }
    if(t3_1 == 1 && t3_2 == 1){
        t3 = 1;
    }

    if(name != "" && t2 == 1 && t3 == 1 && cpw != "" && t5 == 1 && t6 != ""){
        alert("Bạn đã đăng ký thành công");
        window.location.href = "dang_nhap.html";
    }
    
}

function isEmailAdress(input){
    // theo sau bởi "@gmail.com".
    var gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  
    // Sử dụng test() để kiểm tra xem chuỗi đầu vào có khớp với mẫu không.
    return gmailRegex.test(input);
}

function checkLengthNumber(input){
    // Chuyển số thành chuỗi
    var numberString = input.toString(); // hoặc String(number)

    // Kiểm tra độ dài của chuỗi
    var length = numberString.length;

    return length;  
}

function checkNumber(input){
    var numberString = input.toString();
    var tempt;

    if(numberString[0] == 0){
        return tempt = 1;
    }
}

//  function detailDob(day, month, year){

    //kiểm tra có tồn tại ngày tháng năm đã nhập vào hay không;
    // if(day < 1 || day > 31) return 0;
    // if(month < 1 || month > 12) return 0;
    // if(year < 1900 || year > new Date().getFullYear()) return 0;

    //kiểm tra ngày tương thích với tháng hay không
    // if(day == 31){
    //     if(month == 2 || month == 4 || month == 6 || month == 9 || month == 11) return 0;
    //     if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) return 1;
    // }
    // var a = (year % 4);
    // if(month == 2){
    //     if(day > 29) return 0;
    //     else if(day == 29){
    //         if(a != 0) return 1;
    //         else return 0;
    //     }
    //     else return 1;
    // }

//     return 1;
// }

//  function checkDob(input){
//     var t6;
//     var parts = input.split("/");
//     if(parts.length == 3){
//         var day = parseInt(parts[1])
//         var month = parseInt(parts[2]);
//         var year = parseInt(parts[3]);

//         if(detailDob(day, month, year) ==  1){
//             console.log(day,month,year);
//             return t6 = 1;
//         }else{
//             return t6 = 2;
//         }
//     }else{
//         return t6 = 3;
//     }
// }

function checkLengthPw(input){
    var length = input.length;
    return length;
}

function checkPw(input){
    // đây là biểu thức chính quy gồm ít nhất 1 số, 1 thường, 1 hoa, 1 ký tự đặc biệt, và có ít nhất 8 số trở lên 
    //    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])(?!.*\s).{8,}$/

    var pw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])(?!.*\s).{8,}$/;
    return pw.test(input);
}


//để thanh header mờ dần khi lướt xuống dưới;
//và để nút button chỉ hiện ra khi lướt xuống dưới;
window.onscroll = function(){
    console.info(document.documentElement.scrollTop);
    var header = document.getElementById('myHeader');
    var text1 = document.getElementById('text1');
    var text2 = document.getElementById('text2');
    var text3 = document.getElementById('text3');
    var text4 = document.getElementById('title_lg');
    var backTop = document.getElementById('btn_bt');
    if(document.documentElement.scrollTop > 50 || document.body.scrollTop > 50){
      header.style.backgroundColor = "rgba(234, 228, 228, 0.8)";
      text1.style.color = "rgb(6, 74, 169)";
      text2.style.color = "rgb(6, 74, 169)";
      text3.style.color = "rgb(6, 74, 169)";
      text4.style.color = "rgb(6, 74, 169)";
      backTop.style.display = "block";
    }else{
      header.style.backgroundColor = "rgb(6, 74, 169)";
      text1.style.color = "white";
      text2.style.color = "white";
      text3.style.color = "white";
      text4.style.color = "white";
      backTop.style.display = "none";
    }
  }
  
  //quy định thời gian lướt lên trang đầu;
function gotoTop() {
  var time = setInterval(function() {
    document.documentElement.scrollTop -= 10;
    if(document.documentElement.scrollTop <= 0){
      clearInterval(time);
    }
   },10);
    //Mỗi lần nó sẽ dịch chuyển lên 10px sau 10s
    //Đến khi mà dịch chuyển đến đầu trang thì nó sẽ dừng qua hàm clearInterval()
}
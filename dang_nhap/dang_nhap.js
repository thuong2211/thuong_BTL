function finish(){
    var arr = document.getElementsByTagName('input');
    var name = arr[1].value;
    var gmail = arr[2].value;
    var pw = arr[3].value;

    //kiểm tra các trường có rỗng không
    if(name == "" || gmail == "" || pw == ""){
        alert("Hãy điền thông tin vào các trường");
        return;
    }    
}

//để thanh header mờ dần khi lướt xuống dưới;
//và để nút button chỉ hiện ra khi lướt xuống dưới;
window.onscroll = function(){
  console.info(document.documentElement.scrollTop);
  var header = document.getElementById('myHeader');
  var text1 = document.getElementById('text1');
  var text2 = document.getElementById('text2');
  var text3 = document.getElementById('text3');
  var text4 = document.getElementById('tt_lg');
  var text5 = document.getElementById('gio_hang');
  var backTop = document.getElementById('btn_bt2');
  if(document.documentElement.scrollTop > 50 || document.body.scrollTop > 50){
    header.style.backgroundColor = "rgba(234, 228, 228, 0.8)";
    text1.style.color = "rgb(6, 74, 169)";
    text2.style.color = "rgb(6, 74, 169)";
    text3.style.color = "rgb(6, 74, 169)";
    text4.style.color = "rgb(6, 74, 169)";
    text5.style.color = "rgb(232, 161, 62)"
    
  }else{
    header.style.backgroundColor = "rgb(6, 74, 169)";
    text1.style.color = "white";
    text2.style.color = "white";
    text3.style.color = "white";
    text4.style.color = "white";
    text5.style.color = "white";
  }

  if(document.documentElement.scrollTop > 50 || document.body.scrollTop > 50){
    backTop.style.display = "block";
  }
  else{
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
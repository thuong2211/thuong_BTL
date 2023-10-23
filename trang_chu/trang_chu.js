// function menu(){
//     var li1 = document.getElementById('li1');
//     if(li1.style.display === 'none' || li1.style.display === ''){
//         li1.style.display = 'block';
//     }
//     else{
//     li1.style.display = 'none';
//     }
// }


//để thanh header mờ dần khi lướt xuống dưới;
//và để nút button chỉ hiện ra khi lướt xuống dưới;
window.onscroll = function(){
  console.info(document.documentElement.scrollTop);
  var header = document.getElementById('myHeader');
  var text1 = document.getElementById('text1');
  var text2 = document.getElementById('text2');
  var text3 = document.getElementById('text3');
  var text4 = document.getElementById('title_lg');
  var text5 = document.getElementById('gio_hang');
  var backTop = document.getElementById('btn_bt');
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
  },5);
  //Mỗi lần nó sẽ dịch chuyển lên 15px sau 5s
  //Đến khi mà dịch chuyển đến đầu trang thì nó sẽ dừng qua hàm clearInterval()

}


var arr_photo=[
  "../../anh/anh1.jpg",
  "../../anh/anh44.webp",
  "../../anh/anh55.webp",
  "../../anh/anh2.jpg",
  "../../anh/anh22.webp",
  "../../anh/anh33.webp"
]

var index=0;

function next(){
  index++;
  if(index>=arr_photo.length) index=0;
  var photo = document.getElementById("photo_1");
  photo.src = arr_photo[index];
  // document.getElementById("count").innerHTML = (index + 1) + "/" + arr_photo.length;
}

function prev(){
  index--;
  if(index<0) index=arr_photo.length - 1;
  document.getElementById("photo_1").src = arr_photo[index];
  // document.getElementById("count").innerHTML = (index + 1) + "/" + arr_photo.length; 
}
setInterval("next()",3000);


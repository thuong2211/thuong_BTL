// const bigimg = document.querySelector(".product-content-left-big-img img")
// const smallimg = document.querySelectorAll(".product-content-left-small-img img")
// smallimg.forEach(function(imgitem,x){
//     imgitem.addEventListener("click",function(){
//         bigimg.src = imgItem.src
//     })
// })
//để thanh header mờ dần khi lướt xuống dưới;
//và để nút button chỉ hiện ra khi lướt xuống dưới;
window.onscroll = function(){
    console.info(document.documentElement.scrollTop);
    var header = document.getElementById('myHeader');
    var text1 = document.getElementById('text1');
    var text2 = document.getElementById('text2');
    var text3 = document.getElementById('text3');
    var text4 = document.getElementById('title_lg');
    var backTop = document.getElementById('btn_gtt');
    if(document.documentElement.scrollTop > 50 || document.body.scrollTop > 50){
      header.style.backgroundColor = "rgba(234, 228, 228, 0.😎";
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
      document.documentElement.scrollTop -= 25;
      if(document.documentElement.scrollTop <= 0){
        clearInterval(time);
      }
    },5);
  }



  function search(){
    var k = document.getElementById('kw');
    if( k != null ){
        k = k.value;
        if(k == "bút" || k == "Bút"){
            window.location.href = "./but/but_main.html";
        }
        else if(k == "Vở" || k == "vở"){
            window.location.href = "../vo/vo_main.html";
        }
        else if(k == "Tẩy" || k == "tẩy"){
            window.location.href = "./tay/tay_main.html";
        }
        else if(k == "Thước" || k == "thước"){
            window.location.href = "./thuoc/thuoc_main.html";
        }
        else{
            alert("Không có sản phẩm mà bạn muốn tìm");
            return;
        }
    }
}
// ------------product----------
const bigimg = document.querySelector(".product-content-left-big-img img")
const smallimg = document.querySelectorAll(".product-content-left-small-img img")
smallimg.forEach(function(imgItem,x){
imgItem.addEventListener("click",function(){
    bigimg.src = imgItem.src
})
})
let selectedColor = null;

function selectColor(image, colorName) {
// Bỏ lựa chọn trước (nếu có)
if (selectedColor) {
selectedColor.classList.remove('selected');
}

// Đặt màu đã chọn
selectedColor = image;
selectedColor.classList.add('selected');

// Lưu màu đã chọn vào biến hoặc có thể sử dụng để thêm vào giỏ hàng
// ở đây tôi chỉ hiển thị thông báo
alert(`Đã chọn màu: ${colorName}`);
}

function addToCart() {
if (selectedColor) {
const selectedColorName = selectedColor.getAttribute('alt');
alert(`Đã thêm sản phẩm có màu: ${selectedColorName} vào giỏ hàng`);
} else {
alert('Vui lòng chọn màu trước khi thêm vào giỏ hàng');
}
}
// Lấy nút "THÊM VÀO GIỎ"
const addToCartButton = document.getElementById('addToCartButton');

// Thêm sự kiện click vào nút "THÊM VÀO GIỎ"
addToCartButton.addEventListener('click', function() {
// Hiển thị thông báo "Thêm vào giỏ hàng thành công"
alert('Thêm vào giỏ hàng thành công');
});

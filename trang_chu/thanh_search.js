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
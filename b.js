function gettext()
{
let a =document.getElementById("number").value;
let ketqua=Math.floor(Math.random()*10);

           if(a==ketqua)
           {
                alert("chúc mừng bạn đã đoán đúng kết quả là "+ketqua)
           }
           else 
           {
               alert("bạn đã đoán sai rồi kết quả là "+ketqua)
           }
}
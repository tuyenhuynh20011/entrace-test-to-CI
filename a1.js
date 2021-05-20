let values=parseInt(prompt("vui lòng nhập kích thước vòng 4<n<20"))
let n=[];
if(values>4&&values<=20)
{
    n.push(values)
}
else if(values<4||values>20)
{
    let values2=parseInt(prompt("vui lòng nhập lại n"))
    n.push(values2)
}
let values3=parseInt(prompt("nhập số cần tìm vị trí đối diện"))
let number=[];
if(values3<n)
{
    number.push(values3)
}
else if(values3>n)
{
    let values4=parseInt(prompt("vui lòng nhập lại number"))
    number.push(values4)
}

function findOppositeNumber()
{
    var a=Math.floor(n/2)
    var temp=0;
    if(number<a)
    {
        temp=parseInt(number)+a
    }
    else
    {
        temp=parseInt(number)-a
    }
    console.log(temp)
}
findOppositeNumber(n,number)
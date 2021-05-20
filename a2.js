let a=prompt("vui lòng nhập chuỗi a")
let b=prompt("vui lòng nhập chuỗi b")
let temp="";
if(a.split("").length<=b.split("").length)
{
    for(let i=0;i<b.length;i++)
    {
        if(!a[i])
        {
            temp=temp+b[i]

        }
        else
        {
            temp=temp+a[i]+b[i]
        }
    }

}
else
{
    for(let i=0;i<a.split("").length;i++)
    {
        if(!b[i])
        {
            temp=temp+a[i]

        }
        else{
            temp=temp+a[i]+b[i]
        }
    }
}
console.log(temp)
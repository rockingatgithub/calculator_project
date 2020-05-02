function insert(num)
{
    document.getElementById("display-box").innerText += num;
}
function funequal()
{
    var exp = document.getElementById("display-box").innerText;
    if(exp)
    {
        document.getElementById("display-box").innerText = eval(exp);
    }
}
function funclear()
{
    document.getElementById("display-box").innerText ="" ;
}
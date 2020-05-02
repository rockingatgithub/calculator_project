var a=Infinity;
var b=Infinity;

//now for all the number keys....
function printone(){
    if(a==Infinity)
    {
        a=1;
    }
    else
    {
        b=1;
    }
    document.getElementById('display-box').innerHTML=1;
}
function printtwo(){
    if(a==Infinity)
    {
        a=2;
    }
    else
    {
        b=2;
    }
    document.getElementById('display-box').innerHTML=2;
}
function printthree(){
    if(a==Infinity)
    {
        a=3;
    }
    else
    {
        b=3;
    }
    document.getElementById('display-box').innerHTML=3;
}
function printfour(){
    if(a==Infinity)
    {
        a=4;
    }
    else
    {
        b=4;
    }
    document.getElementById('display-box').innerHTML=4;
}
function printfive(){
    if(a==Infinity)
    {
        a=5;
    }
    else
    {
        b=5;
    }
    document.getElementById('display-box').innerHTML=5;
}
function printsix(){
    if(a==Infinity)
    {
        a=6;
    }
    else
    {
        b=6;
    }
    document.getElementById('display-box').innerHTML=6;
}
function printseven(){
    if(a==Infinity)
    {
        a=7;
    }
    else
    {
        b=7;
    }
    document.getElementById('display-box').innerHTML=7;
}
function printeight(){
    if(a==Infinity)
    {
        a=8;
    }
    else
    {
        b=8;
    }
    document.getElementById('display-box').innerHTML=8;
}
function printnine(){
    if(a==Infinity)
    {
        a=9;
    }
    else
    {
        b=9;
    }
    document.getElementById('display-box').innerHTML=9;
}
function printzero(){
    if(a==Infinity)
    {
        a=0;
    }
    else
    {
        b=0;
    }
    document.getElementById('display-box').innerHTML=0;
}
function printten(){
    if(a==Infinity)
    {
        a=10;
    }
    else
    {
        b=10;
    }
    document.getElementById('display-box').innerHTML=10;
}

//function for addition
function funadd()
{
    a= a + b ;
}

//function for substraction
function funsub()
{
    a= a - b;
}
//function for multiply

function funmul()
{
    a= a * b;
}
//function for divison

function fundiv()
{
    a= a / b;
}
//function for equal.

function funequal()
{
    document.getElementById('display-box').innerHTML=a;
}

//function for all clear.....

function funac()
{
    //reset a and b....
    a=Infinity;
    b=Infinity;
    document.getElementById('display-box').innerHTML="";
}
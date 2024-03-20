var a=-10;
if(a>0)
    console.log("positive");

else if(a<0){
    console.log("negavtive");
}

else if(a==0){
     console.log("zero");
}


     var i=9;
     if(i%2==0)
     {
     console.log(`${i} is a even number`);
     }
     else{
        console.log(`${i} is a odd number`);
     }

    
var a=5;
var b=6;
var c=7;
var s=(a+b+c)/2;
var area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log("Area of a traingle is",area);


var year=2003;
if(year%4==0&& year%100!==0 || year%400==0)
{
    console.log("leap year");
}
else{
    console.log("not a leap year");
}


var c=60;
var f;
f=(9/5)*c+32;
console.log(f);


var f=45;
var c;
c=(f-32)*5/9;
console.log(c);

/*function getvalue(){
   /* var c=document.getElementById("ev1").value;
    var d=document.getElementById("ev2").value;

    text="";
    for(let i=0; i<c; i++){
        for(let j=0; j<d; j++){
            text=text+"apple";
        }
       text+="<br><br>";
    }
    document.getElementById("gopal").innerHTML=text;
    

    //while(c>10){
      //  console.log("c" +c + " is smaller than 10" );
        // d=c;
        //console.log("c" +d + " is smaller than 10" );
   // }

   


/*var basee={
   fname:"basee",
    age:"23",
    college:"miet",
    area:"pettavaithalai"
};

console.table(basee);
for (gopal in basee){
    console.log(gopal + ":" + basee[gopal]);
    
}*/

/*var text= "welcome to javascript";

console.log(text.length);
console.log(text.indexOf("welcome"));

let arr=text.search(/javascript/);
console.log(arr);

let gopl=text.match(/javascript/);
console.log(gopl);

let base=text.match(/javascript/gi);
console.log(base);
var output=text.toUpperCase();
console.log(output);

var output=text.toLowerCase();
console.log(output);

var output=text.slice(0,4);
console.log(output);

var output=text.substring(0,4);
console.log(output);

var output=text.substring(-10);
console.log(output);

var output=text.charAt(5);
console.log(output);

var output=text.charCodeAt(0);
console.log(output);

var output=text.startsWith("w");
console.log(output);

var output=text.endsWith("t");
console.log(output);

var output=text.replace("w");
console.log(output);

var output=text.charCodeAt(0);
console.log(output);

let today=new Date();

console.log(today.toDateString());
console.log(today.toLocaleDateString());
console.log(today.toISOString());
console.log(today.toLocaleString());
console.log(today.toString());
console.log(today.toTimeString());
console.log(today.toUTCString());
console.log(today.getFullYear());
console.log(today.getDate());
console.log(today.getHours());
console.log(today.getMilliseconds());
console.log(today.getSeconds());
console.log(today.getMonth());

var month=["jan","feb","mar","apr"];
console.log(month[today.getMonth()]);

let dob=new Date("2001-12-05");
console.log(dob);

let age=today.getFullYear()-dob.getFullYear();
console.log(age);*/

function getvalue(){
    var namelist
    =["karthick", "kavin", "kayal", "ragu", "mani", "harsh", "anand", "basheer"];   
    
    console.log(namelist);
     console.table(namelist);
   /*  console.table(namelist[0]);
     console.table(namelist[1]);
    console.table(namelist[2]);
    console.table(namelist[3]);
    console.table(namelist[4]);*/

 for (var a=0;a<namelist.length;a++)
{
    console.log(namelist[a]);
}

console.clear();
var value=namelist.forEach(function(name1)
{
    console.log(name1);
})
console.log("arrow output");

var result=namelist.forEach(name1=>console.log(name1));

var namelist=["karthick", "kavin", "kayal", "ragu", "mani", "harsh", "anand", "basheer"];
var define1="m";

var value=namelist.filter(name1=>name1.startsWith("k")||
name1.endsWith("k")|| name1.startsWith(define1));
console.log(result);

var listofnumbers=[1,2,3,4];
var result=listofnumbers.map(number=>number*2);
console.log(result);
}
getvalue();

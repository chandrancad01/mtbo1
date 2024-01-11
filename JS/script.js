a=5;
b=10;
c=15;

console.log(a+b);
console.log(a+b-c);
console.log(a*b-c);
console.log(a/b-c);
console.log(a+b%c);
console.log(typeof a);
console.log(a+b+c);


var x=true;
console.log(x,typeof x);
console.log(x);


// const a=10;

const f={name:"bashee", age:23};
console.log(f,typeof f);
f.name="ram"
console.log(f,typeof f);



f.name="ram";
console.log(f, typeof f);


//ternary or conditional operator
//condition ? statement1 : statement2;



v1="s";
console.log(v1);
var output=v1=="0"? "v1 has value" : "v1 doesnot have value";
console.log(output);


console.log(v1);
var output=v1=="s"? "v1 has value" : "v1 doesnot have value";
console.log(output);

m=65;
//35 grade c 60 grade b 80 grace a 90 grade distintion
m=65;
var mark= (35<m && m<60) ? "grade c" : (60<m && m<80) ? "grade b" :  (80<m && m<90) ? "grade a" :  "no grade";
console.log(65);

function findgrade1(m){
//35 grade c 60 grade b 80 grace a 90 grade distintion
m=65;
var mark= (35<m && m<60) ? "grade c" : (60<m && m<80) ? "grade b" :  (80<m && m<90) ? "grade a" :  "no grade";
console.log(mark);
}
findgrade1(60);

var findgrade2=(m)=>{
    var mark= (35<=m && m<60) ? "grade c": (60<=m && m<80) ? "grade B" : (80<=m && m<90) ? "grade A" : 
    (90<=m && m<=100) ? "Grade distintion" : "fail" ;
     console.log(mark);
};
console.log(findgrade2(95));

function checkgrade(){
    console.log("welcome");
    console.log("just trying")
}

console.log(findgrade2(95));

var checkgrade1=(a,b)=> {
    console.log(a+b);
    return a+b;
};
checkgrade(10);
// to get output in log using function
console.log("added value",checkgrade1(1,2))

//to store output in variable to print in console
var printmsg =checkgrade1(1,2);
console.log(printmsg);

//trying to short the code
var checkgrade2=(a,b)=> a+b;

console.log(checkgrade2(5,10));


//trying to short the code
var checkgrade2=()=> checkgrade();

console.log(checkgrade2());


//conditional statements
//if condition 

function findgradechecking(m){
    if(35>m && m!=null)
    {
        console.log("no grade");
        console.log("fail");
    }
}
findgradechecking(30);


//if else condition
function gradechecking(m){
    if(35>m && m!=null)
    {
        console.log("no grade");
        console.log("fail");

    }
    else{
        console.log("pass");
        console.log(" grade b"); 
    }
}
gradechecking(90);
//nestedif else condition
function gradechecking(m){
    if(35>m && m!=null){
    console.log("pass")
       console.log("grade c");

}
else if(35<m && m!=null && m<=60)
{
    console.log("pass");
    console.log(" grade b"); 
}



else if 
    (60<m && m!=null && m<=80){

    console.log("pass");
    console.log("grade a");

}
else{
    gradechecking(prompt("enter mark"));
}
}
gradechecking(99);


// SWITCH CONDITIONAL STATEMENT

function checkingWithSwitch(a)
{

    console.log(a, typeof a);

   var a=Number(a);
    console.log(a, typeof a);
    switch(a){
        case 1:
            // statement
            console.log('executed case s', typeof a);
            break;
        case 2:
            // statement
            console.log("case 2 executed",a);
            
            break;
        case 3:
            // statement
            console.log("case 3 executed");
            break;
        
        default:
            // statement
            
            alert("cases not in list");
    }

}
console.clear();
checkingWithSwitch(prompt("Enter the condition value"));



console.clear();

function checkingWithSwitch(a1,b1,a)
{

   // var a1, b1;

    switch(a){
        case 'add':
            // statement
            console.log('executed case s', a1+b1);
            break;
        case 'subtract':
            // statement
            console.log("case 2 executed",a1-b1);
            
            break;
        case 'multiply':
            // statement
            console.log("case 3 executed", a1*b1);
            break;
        
        default:
            // statement
            
            alert("operator not in the list");
    }

}
console.clear();
checkingWithSwitch(2,5,"add");




function checkingWithSwitch(a)
{

   var a1, b1;
   a1=prompt("enter a1");
   b1=prompt("enter b1");
   a1=Number(a1);
   b1=Number(b1);
   

    switch(a){
        case 'add':
            // statement
            console.log('added value of ',a1, 'and ',b1,'is .. ', a1+b1);
            break;
        case 'subtract':
            // statement
            console.log('subtracted value of ',a1, 'and ',b1,'is .. ', a1-b1);
            
            break;
        case 'multiply':
            // statement
            console.log("case 3 executed", a1*b1);
            break;
        
        default:
            // statement
            
            alert("operator not in the list");
    }

}
console.clear();
checkingWithSwitch(prompt("Enter Operator"));


// increment operator

var a=2;
a++;
console.log(a);

var a=2;
var x=a++;
console.log('increment with assignment',x);
console.log('increment with assignment',a);

console.log(x+a);

var a=2;
++a;
console.log('prefix increment',a);

var a=2;
var x=++a;
console.log('prefix increment with assignment',x);
console.log('prefix increment with assignment',a);

console.log(x+a);

//decrement 
var a=2;
a--;
console.log(a);


var a=2;
var x=--a;
console.log('increment with assignment',x);
console.log('increment with assignment',a);
//alert("welcome to our world");

/*console.log("create java script project");
console.log(12323);
console.log(12323);
console.log(12323);
console.log(12323);
console.log([22,33,4,55,33]);
console.log({fname:'shaji',age:26});
console.table({fname:'shaji',age:26});
console.error("custom sample error");
console.warn("warning");
console.clear();
console.time("timer");
for(i=0; i<10000; i++){

    console.log(i);
}
console.timeEnd("timer");
console.clear();
*/
/*var a=10;
var b=20;
console.log(a+b);

if(true){
    const get="welcome our site";
    console.log(get);
}
*/
/*var a=23;
console.log(a);

var a=44;
console.log(a);
*/
/*
let c=22;
console.log(c);
c=33;
console.log(c);

const d=44;
console.log(d);
d=50;
console.log(d);*/

/*const student={'name':'shaji','age':25};
console.log(student);
console.table(student);
console.log(student.name);
student.name="kavi";
console.table(student);*/
/*
var a=22;
console.log(typeof a);
var fname="shaji";
   console.log(typeof fname);

   var set=true;
   console.log(typeof set);

   var get=null;
   console.log(typeof null);

   let g;
   console.log(typeof g);

   var s1=Symbol();
 console.log(s1);

 var s2=Symbol();
 console.log(s2);

 console.log(s1==s2);*/
/*
 let a=23;
 console.log(a,typeof a);
 a=String(a);
 console.log(a, typeof a);

 var d=22.4;
 console.log(d, typeof d);
 d=String(d);
 console.log(d, typeof d);

 var get=null;
 console.log(get, typeof get);
get=String(get);
console.log(get, typeof get); 

var ad=new Date();
console.log(ad, typeof ad);
ad=String(ad);
console.log(ad,typeof ad);
*/
/*
let a=20;
let b=5;
let c;

c=a%b;
c=2**6
console.log(c);
*/
/*
let c;
c=Math.PI;
c=Math.E;

c=Math.floor(5.7);
c=Math.ceil(7.1);
c=Math.round(6.6);
console.log(c);
*/
/*
let firstname="shaji";
let lastname="shajahan";

c=firstname+" "+lastname;

*/
/*
c=firstname.concat(" "+lastname);
console.log("concatenation: "+c);

c="shaji";
c+=" shajahan";
console.log(" "+c);

c='that\'s my pen';
console.log(c);
*/
let first_name="SHAJAHAN s";
c=first_name.length;
c=first_name.toLowerCase();
c=first_name.lastIndexOf('H');
c=first_name.charAt(4);
c=first_name.charCodeAt(2);

c=first_name.substr(0,3);

let text="0123456789"
c=text.substring(0,4);
c=text.substring(5,0);
c=text.substring(2,8);
c=text.slice(-3); 
console.log(c);

let b="this is my java script project";
c=b.split(" ");
console.table(c);
let k="i am from aranthangi";

c=k.replace('aranthangi','chennai');
console.log(c);

let d= ['monkey', 'lion', 'cat'];
console.log(d.includes('king'));

a=" get ";
console.log(a.length);
a=a.trim();
console.log(a.length);

a="4";
a=a.padStart(3,0);
console.log(a);

a="4";
a=a.padEnd(8,0);
console.log(a);
console.log(String.fromCharCode(84,85,86));


let gname="shajahan";
let age="28";
let role="developer";
let city="aranthangi";
let output="";
output+=`<table border="2px">
<tr><th>gname</th><td>${gname}</td></tr>
<tr><th>gname</th><td>${age>25?"good":"bad"}</td></tr>
<tr><th>gname</th><td>${role}</td></tr>
<tr><th>gname</th><td>${city}</td></tr>
</table>`;

document.body.innerHTML=output;

let h=[10,20,30,40];
console.log(h); 
console.table(h);
console.log(h[3])

let g=new Array(23,33,55,22);
console.table(g);
let T=new Array("shaji",33,age,{m1:67,m2:73,m4:88,m5:44});
console.table(T);

const number=[1,2,3,4,5,6,7,8,9,10];

number.forEach((value)=>{
    console.log(value);

});

number.forEach((value,index)=>{
  
     console.log("value: "+value+" index: " +index)
}

);
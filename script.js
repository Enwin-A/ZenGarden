let body = document.getElementById("body");

let house = document.getElementById("icon-1");
house.addEventListener("click", f_house);
body.style.background="url(images/nonameleaves.jpg)";
body.style.backgroundSize="cover";
// body.style.backgroundSize="100rem"; //use rem to uhh make the mobile screen compatible
var b = document.getElementById("titlename");
b.style.display="block";
let x = document.getElementById("overall");
x.style.display = "none";
var p = document.getElementById("content");
p.style.display = "block";
var z = document.getElementById("content1");
z.style.display = "none";
var c = document.getElementById("content2");
c.style.display = "none";
var v = document.getElementById("tips");
v.style.display = "none";
var n = document.getElementById("tips1");
n.style.display = "none";
var n = document.getElementById("tips1");
n.style.display = "none";
var m = document.getElementById("med");
m.style.display = "none";
// let y = document.getElementsByid("titlename");
// x.style.display = "none";


function f_house() {
  body.style.background="url(images/nonameleaves.jpg)";
  body.style.backgroundSize="100rem";
  // body.style.backgroundSize="cover";

  var b = document.getElementById("titlename");
  b.style.display="block";
  let x = document.getElementById("overall");
  x.style.display = "none";
  var p = document.getElementById("content");
  p.style.display = "block";
  var z = document.getElementById("content1");
  z.style.display = "none";
  var c = document.getElementById("content2");
  c.style.display = "none";
  var v = document.getElementById("tips");
  v.style.display = "none";
  var n = document.getElementById("tips1");
  n.style.display = "none";
  var m = document.getElementById("med");
  m.style.display = "none";

  activated.style.left = "15%";
  body.style.backgroundColor = "#173f35";
  house.style.backgroundColor = "#3c6242";
  person.style.backgroundColor = "#212121";


  

  mail.style.backgroundColor = "#212121";
  star.style.backgroundColor = "#212121";
  bell.style.backgroundColor = "#212121";

  house.style.top = "10%";
  house.style.width = "75px";
  house.style.height = "75px";

  person.style.top = "50%";
  person.style.width = "50px";
  person.style.height = "50px";

  mail.style.top = "50%";
  mail.style.width = "50px";
  mail.style.height = "50px";

  star.style.top = "50%";
  star.style.width = "50px";
  star.style.height = "50px";

  bell.style.top = "50%";
  bell.style.width = "50px";
  bell.style.height = "50px";

  activated.style.transitionDuration = "0.7s";
  house.style.transitionDuration = "0.7s";
}

let person = document.getElementById("icon-2");
person.addEventListener("click", f_person);


// const btn = document.getElementById("icon-2");
  // const backgroundContainer = document.getElementById("container");
  // btn.addEventListener("click", function() {
  //   backgroundContainer.style.background="url(images/nonameleaves.jpg)";
  // });
  // const btn = document.getElementById("icon-2");
  // const backgroundContainer = document.getElementById("container");
  // person.addEventListener("click", function() {
  //   backgroundContainer.style.background="url(images/nonameleaves.jpg)";
  // });


function f_person() {
  body.style.background="url(images/nonameleaves.jpg)";
  body.style.backgroundSize="100rem";

  var b = document.getElementById("titlename");
  b.style.display="none";
  var p = document.getElementById("content");
  p.style.display = "none";
  var z = document.getElementById("content1");
  z.style.display = "none";
  var c = document.getElementById("content2");
  c.style.display = "none";
  var v = document.getElementById("tips");
  v.style.display = "none";
  var n = document.getElementById("tips1");
  n.style.display = "none";


  activated.style.left = "38.8%";
  house.style.backgroundColor = "#212121";
  body.style.backgroundColor = "#61876E";
  person.style.backgroundColor = "#70937C";
  mail.style.backgroundColor = "#212121";
  star.style.backgroundColor = "#212121";
  bell.style.backgroundColor = "#212121";

  house.style.top = "50%";
  house.style.width = "50px";
  house.style.height = "50px";

  person.style.top = "10%";
  person.style.width = "75px";
  person.style.height = "75px";

  mail.style.top = "50%";
  mail.style.width = "50px";
  mail.style.height = "50px";

  star.style.top = "50%";
  star.style.width = "50px";
  star.style.height = "50px";

  bell.style.top = "50%";
  bell.style.width = "50px";
  bell.style.height = "50px";

  activated.style.transitionDuration = "0.7s";
  person.style.transitionDuration = "0.7s";

  var x = document.getElementById("overall");
    x.style.display = "block";
  var m = document.getElementById("med");
  m.style.display = "block";

}

let mail = document.getElementById("icon-3");
mail.addEventListener("click", f_mail);

function f_mail() {
  body.style.background="url(images/leafpic2.jpg)";
  body.style.backgroundSize="cover";
  // body.style.backgroundSize="70rem";
  let x = document.getElementById("overall");
  x.style.display = "none";
  var p = document.getElementById("content");
  p.style.display = "none";
  var c = document.getElementById("content2");
  c.style.display = "none";
  var b = document.getElementById("titlename");
  b.style.display="none";
  var v = document.getElementById("tips");
  v.style.display = "block";
  var n = document.getElementById("tips1");
  n.style.display = "none";
  var m = document.getElementById("med");
  m.style.display = "none";

  activated.style.left = "62.8%";
  house.style.backgroundColor = "#212121";
  person.style.backgroundColor = "#212121";
  mail.style.backgroundColor = "#A6BB8D";
  body.style.backgroundColor = "#8da86d";
  star.style.backgroundColor = "#212121";
  bell.style.backgroundColor = "#212121";

  house.style.top = "50%";
  house.style.width = "50px";
  house.style.height = "50px";

  person.style.top = "50%";
  person.style.width = "50px";
  person.style.height = "50px";

  mail.style.top = "10%";
  mail.style.width = "75px";
  mail.style.height = "75px";

  star.style.top = "50%";
  star.style.width = "50px";
  star.style.height = "50px";

  bell.style.top = "50%";
  bell.style.width = "50px";
  bell.style.height = "50px";

  activated.style.transitionDuration = "0.7s";
  mail.style.transitionDuration = "0.7s";

  var z = document.getElementById("content1");
  z.style.display = "block";
  
}

let star = document.getElementById("icon-4");
star.addEventListener("click", f_star);

function f_star() {
  body.style.background="url(images/leafpic2.jpg)";
  // body.style.backgroundSize="70rem";
  body.style.backgroundSize="cover";
  

  var b = document.getElementById("titlename");
  b.style.display="none";
  let x = document.getElementById("overall");
  x.style.display = "none";
  var p = document.getElementById("content");
  p.style.display = "none";
  // here ive hidden the page 4 content 
  var z = document.getElementById("content1");
  z.style.display = "none";
  var v = document.getElementById("tips");
  v.style.display = "none";
  var n = document.getElementById("tips1");
  n.style.display = "block";
  var m = document.getElementById("med");
  m.style.display = "none";


   //THIS IS THE MIDDLE BUTTON 
  activated.style.left = "84.8%"; //CHANGEDE IT FROM 5O% TO 67.6%
  house.style.backgroundColor = "#212121";
  person.style.backgroundColor = "#212121";
  mail.style.backgroundColor = "#212121";
  body.style.backgroundColor = "#bfa274";
  star.style.backgroundColor = "#CFB997";
  bell.style.backgroundColor = "#212121";

  house.style.top = "50%";
  house.style.width = "50px";
  house.style.height = "50px";

  person.style.top = "50%";
  person.style.width = "50px";
  person.style.height = "50px";

  mail.style.top = "50%";
  mail.style.width = "50px";
  mail.style.height = "50px";

  star.style.top = "10%";
  star.style.width = "75px";
  star.style.height = "75px";

  bell.style.top = "50%";
  bell.style.width = "50px";
  bell.style.height = "50px";

  activated.style.transitionDuration = "0.7s";
  star.style.transitionDuration = "0.7s";

  // here ive displayed the page 4 content 
  var c = document.getElementById("content2");
  c.style.display = "block";
  
  
}

let bell = document.getElementById("icon-5");
bell.addEventListener("click", f_bell);

// function f_bell() {
//   activated.style.left = "85%";
//   house.style.backgroundColor = "#212121";
//   person.style.backgroundColor = "#212121";
//   mail.style.backgroundColor = "#212121";
//   star.style.backgroundColor = "#212121";
//   bell.style.backgroundColor = "#FDA769";
//   body.style.backgroundColor = "#fdaf78";

//   house.style.top = "50%";
//   house.style.width = "50px";
//   house.style.height = "50px";

//   person.style.top = "50%";
//   person.style.width = "50px";
//   person.style.height = "50px";

//   mail.style.top = "50%";
//   mail.style.width = "50px";
//   mail.style.height = "50px";

//   star.style.top = "50%";
//   star.style.width = "50px";
//   star.style.height = "50px";

  // bell.style.top = "10%";
  // bell.style.width = "75px";
  // bell.style.height = "75px";

//   activated.style.transitionDuration = "0.7s";
//   bell.style.transitionDuration = "0.7s";
// }

/*
top = 10%
w & h = 75px
*/

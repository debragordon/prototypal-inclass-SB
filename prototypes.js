// A basic animal function
function Animal () {
  this.family = "animal";
  this.eyes = [];
  // console.log("THIS", this);
}

Animal.prototype.setFamily = function (newFamily) {
  this.family = newFamily;
}


// Animal();
var a = new Animal();
// a.setFamily("cat");
console.log("a", a);

var salamander = new Animal();
salamander.skinTexture = "slimy";
console.log("salamander", salamander);

var kangaroo = new Animal();
kangaroo.property = "jumpy";
console.log("kangaroo", kangaroo);



function Doge () {
  this.species = "Doge";
}
Doge.prototype = new Animal();

var doge1 = new Doge();
var doge2 = new Doge();
doge2.setFamily("dog");
console.log("doge1", doge1);
console.log("doge2", doge2);



function Angus () {
  this.name = "Angus";
}
Angus.prototype = new Doge ();
var angus = new Angus ();
console.log("angus", angus);
angus.family = "bird";
console.log("angus", angus.family, angus.species, angus.name);
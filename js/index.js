//console.log("hola");
var btnCipher= document.getElementById("cipher");
var btnDecipher= document.getElementById("decipher");
var cipherText= document.getElementById("text-to-convert");

//console.log("hola");

var verifyMyText= function(){
  if (cipherText.value ==="" || cipherText.value >= 65 && ascii <= 90 || cipherText.value >= 97 && ascii <= 122)
 {
    console.log("whatttt!!!");
  }else{
    console.log("super!!");
  }
}
verifyMyText(cipherText.value);


btnCipher.onclick=function(){
  //console.log("hola");
  for (var i = 0; i < cipherText.value.length; i++) {
    //var ascii = cipherText.charCodeAt(i);
    console.log(cipherText.value);
  }
};
btnDecipher.onclick=function(){
  console.log("hello");
};



$(document).ready(function(){
/*  $( window ).on( "load")*/
  $("main.image-inicio").fadeOut(500);

  });

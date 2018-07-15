//se crean variables globales
var btnCipher= document.getElementById("cipher");
var btnDecipher= document.getElementById("decipher");
var cipherText= document.getElementById("text-to-convert");

//verificando que se ingrese data
var verifyMyText= function(){
  if (cipherText.value ==="")
 {
    alert("Por favor introcude texto valido");
  }else{
    return cipherText.value;
    }
}
//agregando evento al boton
btnCipher.onclick=function(){
  //console.log("hola");
    if (verifyMyText(cipherText.value)=== true) {
    }
      var ascii= document.getElementById("text-to-convert").value;
      for (var i = 0; i < ascii.length; i++) {
        console.log(ascii.charCodeAt([i]));

      }

    //console.log(verifyMyText());
    cipherText.value="";
};
btnDecipher.onclick=function(){
  //console.log("hello");
  if (verifyMyText()=== true) {
  }
  var newAscii= document.getElementById("text-to-convert").value;
  for (var i = 0; i < newAscii.length; i++) {
    console.log(newAscii.charCodeAt([i]));

  }
  //console.log(verifyMyText());
  cipherText.value="";

};




$(document).ready(function(){
/*  $( window ).on( "load")*/
  $("main.image-inicio").fadeOut(500);

  });

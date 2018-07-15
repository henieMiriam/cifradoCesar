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
    if (verifyMyText(cipherText.value)=== true) {
    }
      var ascii= document.getElementById("text-to-convert").value;
      for (var i = 0; i < ascii.length; i++) {
        if (ascii.charCodeAt([i])>= 65 && ascii.charCodeAt([i])<= 90) {
            var doCipher= (ascii.charCodeAt(i)-65+33)%26+65;
            var reCipher=String.fromCharCode(doCipher);
            console.log(reCipher);
        }else if ( ascii.charCodeAt([i])>=97 && ascii.charCodeAt([i])<= 122) {
          var doCiphers= (ascii.charCodeAt(i)-65+33)%26+65;
          var reCiphers=String.fromCharCode(doCiphers);
          console.log(reCiphers);
        }else{
          alert("sorry... este no es un texto valido; no debe contener numeros o caracteres especiales,intenta de nuevo ");
        }

      }
      cipherText.value="";
};
btnDecipher.onclick=function(){
  if (verifyMyText()=== true ) {
  }
  var newAscii= document.getElementById("text-to-convert").value;
  for (var i = 0; i < newAscii.length; i++) {

    if (newAscii.charCodeAt([i])>=65 && newAscii.charCodeAt([i])<= 90) {
        var newCipher= (newAscii.charCodeAt(i)+65-33)%26+65;
        var newDecipher=String.fromCharCode(newCipher);
        console.log(newDecipher);
    }else if ( newAscii.charCodeAt([i])>=97 && newAscii.charCodeAt([i])<= 122) {
      var newCiphers= (newAscii.charCodeAt(i)+65-33)%26+65;
      var newDeciphers=String.fromCharCode(newCiphers);
      console.log(newDeciphers);
    }else{
      alert("sorry... este no es un texto valido; no debe contener numeros o caracteres especiales,intenta de nuevo ");
    }

  }
  cipherText.value="";

};




$(document).ready(function(){
/*  $( window ).on( "load")*/
  $("main.image-inicio").fadeOut(500);

  });

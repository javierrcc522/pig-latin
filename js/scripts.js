
//Back_End Logic

var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
var consonants = ["b", "B", "c", "C", "d", "D", "f", "F", "g", "G", "h", "H", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"];
// this will add a function with a name and a parameter that can pass an argument
// this is a for loop starting at 0, rolling through the vowels one a time
// if loop meets criteria it concatenates "way" onto the back

function wordSplitter(str) {
  str = str.split(" ");
  for(var index = 0; index < str.length; index ++) {
    if (str.split(" "));
    //alert(str.join());
    return;
  };
};

function userPigLatin(str) {
  for(var index = 0; index < vowels.length; index ++) {
    if (str.charAt(0) === vowels[index]) {
      str = str.concat("way");
      alert(str);
      return;
    } else if (str.slice(0,2) === "qu" || str.slice(0,2) === "Qu") {
       var x = str.slice(0,2);
       str = str.slice(2).concat(x);
       alert(str);
       return;
     };
  };

};





//Front_End Logic
$(document).ready(function(){
  $("form#latinInput").submit(function(event){
    event.preventDefault();

    var userLatin = $("input#latin").val();
    var result = userPigLatin(userLatin);
    $("#result").text(result);
    //alert(userLatin);

  });
});

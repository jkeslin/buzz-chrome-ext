//The code that is fired upon page load
//to check your plugin js is working uncomment the next line.
var all = document.getElementsByTagName('p')

for(var i = 0; i < all.length; i++){
  var buzzParagraph = all[i].innerText.toLowerCase().replace(/the/g, 'BUZZWORD');
  all[i].innerText = buzzParagraph;
}


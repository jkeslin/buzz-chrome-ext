//The code that is fired upon page load
//to check your plugin js is working uncomment the next line.
var all = document.getElementsByTagName('p')

var buzzwords = ['disrupt', 'innovate', 'innovative', 'innovation', 'space', 'vertical', 'big data', 'emerging', 'solution', 'platform', 'iterate', 'paradigm', 'passion', 'impact', 'hacking', 'change']


for(var i = 0; i < all.length; i++){
  for (var word = 0; word< buzzwords.length; word++){
      var re = new RegExp(buzzwords[word],"g");
      var buzzParagraph = all[i].innerText.toLowerCase().replace(re, 'BUZZWORD');
      all[i].innerText = buzzParagraph;
  }
}


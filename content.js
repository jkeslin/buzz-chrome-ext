//The code that is fired upon page load
//to check your plugin js is working uncomment the next line.
var all = document.getElementsByTagName('p')

var buzzwords = ['disrupt', 'innovate', 'innovative', 'innovation', 'space', 'vertical', 'big data', 'emerging', 'solution', 'platform', 'iterate', 'paradigm', 'passion', 'impact', 'hacking', 'change', 'changing']


for(var i = 0; i < all.length; i++){
  for (var word = 0; word< buzzwords.length; word++){
      var re = new RegExp(buzzwords[word],"g");
      var buzzParagraph = all[i].innerHTML.toLowerCase().replace(re, '<span class= "buzzword">BUZZWORD</span>');

      all[i].innerHTML = buzzParagraph;

  }
  $('.buzzword').css({'color':'red', 'font-weight': 'bold', 'background-color': 'yellow'})
}


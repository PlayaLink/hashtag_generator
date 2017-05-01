function generateHashtag (str) {
  var words = [];
  if(str.length > 140 || str === ""){
    return false;
  }
  words = str.split(" ");
  words.forEach( word => capitalizeFirst(word) );
  return "#" + words.join("");
}

function capitalizeFirst (word) {
  word.toLowerCase();
  return word.charAt(0).toUpperCase() + word.slice(1);
}

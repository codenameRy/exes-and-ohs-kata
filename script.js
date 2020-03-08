function XO(str) {
    //code here
    str = str.toLowerCase();
    
    // console.log(str);
    var countX = 0;
    var countO = 0;
    
    for(var i = 0; i < str.length; i++){
      let letter = str[i];
      if(letter === 'x'){
        countX++;
      } else if(letter === 'o'){
        countO++;
      }
    }
    
    // console.log(countO + ' -- ' + countX);
    
    if(countX === countO){
      return true;
    } else {
      return false;
    }
}

console.log(XO('xo')); //true);
console.log(XO("xxOo")); //true);
console.log(XO("xxxm")); //false);
console.log(XO("Oo")); //false);
console.log(XO("ooom")); //false);
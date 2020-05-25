function showDiamond(letter, rows) {
     if (rows === undefined){
       rows = new Array();
     }
   
  var padding = Array(rows.length + 1).join('-');
     if (letter === 'A') {
       rows.unshift(padding + 'A' + padding);
     } else {
       var charCode = letter.charCodeAt(0);
       var innerSpaces = Array((charCode - 'A'.charCodeAt(0)) * 2).join('-');
       rows.unshift(padding + letter + innerSpaces + letter + padding);
       showDiamond(String.fromCharCode(charCode - 1), rows);
     }

     return rows.concat(rows.slice(0, -1).reverse()).join('\n') + '\n';
   }
 
console.log(showDiamond("D")) 
 
module.exports = {
     showDiamond 
}
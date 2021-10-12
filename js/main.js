function find_missing_letter_in(givenLetters){
let alpha = 'abcdefghijklmnopqrstuvxyz';
let start =alpha.indexOf(givenLetters[0]);

for(i = 0 ;i <givenLetters.length ; i++){
  
    if(givenLetters[i]!== alpha[start+i]){
        return alpha[start+i];
    }

}
return "No missing  Letter in Sequence "
}

function convert (n){
    let str = n.toString();

    let arr = str.split("");

    arr = arr.map((x)=>parseInt(x));
    arr= arr.reverse();

     //return n.toString().split().map((x)=>+x).reverse() ; 

    return arr ; 
}
//console.log(find_missing_letter_in("defgi"));
console.log(convert(564987654));

console.log(convert(529132));

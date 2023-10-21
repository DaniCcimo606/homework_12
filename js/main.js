let numb, result;

numb = prompt(`Enter a five-digit number`);
while(numb < 10000 || numb > 99999) {
    numb = prompt(`Enter a five-digit number`);
}
console.log(numb);

result = numb.toString().split(``);
console.log(result);
console.log(result.join(` `));
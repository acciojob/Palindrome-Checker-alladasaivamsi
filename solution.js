// complete the given function

function palindrome(str)
{
    str = str.toLowerCase();
  
    let arr = [...str];
    let arrCopy = [..str];
    let arrReverse = arr.reverse();
        arr = arrCopy;
  
    console.log(`reverseArray:${arrReverse}`);
    console.log(`array:${arr}`);

    for(let i = 0; i < arr.length; i++) 
    {
      if(arrCopy[i] != arrReverse[i]) 
      {
        return false;
      }
    }
    return true;
}
console.log(palindrome("abc"));
module.exports = palindrome

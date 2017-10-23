/*this function converts a number to a string, the contents of which depends on 
the number’s prime factors. * If the number contains `3` as a prime factor, 
output `"Pling"`. * If the number contains `5` as a prime factor, output `"Plang"`
. * If the number contains `7` as a prime factor, output `"Plong"`. 
* If the number does not contain `3`, `5`, or `7` as a prime factor, just pass 
the number’s digits straight through. *Examples* * 28's prime-factorization is 2,
2, 7.    * In raindrop-speak, this would be a simple `"Plong"`. * 1755 
prime-factorization is 3, 3, 3, 5, 13.    * In raindrop-speak, this would be 
a `"PlingPlang"`. * The prime factors of 34 are 2 and 17.    * Raindrop-speak 
doesn’t know what to make of that, so it just goes with the straightforward
`"34"` */
const primeRain=(val)=>{
  //let val=value;
  let output="";
  
  if(val<=0||isNaN(val)|| val!==parseInt(val))
  return "Invalid format";
if(val %3===0)
  {
    output="Pling";
   
  }
 if(val %5===0 )
  {
    if(output==="")
    {
    output="Plang";
    }
    else 
    {
    output+="Plang";
    }
  }
  if(val %7===0)
  {
    if(output==="")
    {
    output="Plong";
    }
    else 
    {
    output+="Plong";
    }
  }
  if(output==="")
  {
    return val;
  }
  else
  {
  return output;
  }
}

module.exports ={primeRain}

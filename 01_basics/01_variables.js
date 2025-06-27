const accountId = 12345
let accountEmail = "abcd@gmail.com"
let accountPassword = "12345678"
let accountCity = "Gorakhpur"
console.log(accountId);
console.table([accountId,accountCity,accountEmail,accountPassword]);
/* koi bhi value jo const me likhi h usko change nahi kar sakte jaise
    accountId = 6789   - ye galat h , isse change nahi hoga*/
/* let me lihki hui value change ho sakti h jaise
      accountEmail = pqrst@gmail  - ye change ho jayegi */    
   
/* Javascript me hm var nahi use karte only let use karna h
  var is not used because of issue in block scope and functional scope */
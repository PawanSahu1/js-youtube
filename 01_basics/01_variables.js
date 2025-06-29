const accountId = 112233
let accountEmail = "pawan@yahoo.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 111222333//not allowed
accountEmail = "pawansahu@yahoo"
accountPassword = "13579"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and funtional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
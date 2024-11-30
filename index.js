function receivesAFunction(func,a,b){
    return func(a,b);

}
function add(a,b){
    return a + b
}
console.log(receivesAFunction(add,5,5))


function returnsANamedFunction(){
   return function Name(){
    console.log("My name is rose")
   }
}
function returnsAnAnonymousFunction(){
 return function(){
    console.log('My name .....')
 }
}
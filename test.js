function reverse(str){
    return str.reverse() 
}
function string(ch){
ch.length;
}
function capitalize(str){
    return str.touppercase();
}
function maxmin(arr){
    max=0
    min=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i>max]){
            max=arr{i};
        if(min<arr[i]){
            min=arr[i];
        }
    

        }
        }
        return(max,min);
    }
function sum(arr){
    let result=0;
    for(let i=0;i<arr.length;i++){
        result+=arr[i];
    }
}
function pair(arr){
    let result=[];
    var a=0;
    var b=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            a=arr[i];
        if(arr[i]%2!=0){
            b=arr[i];
            result=[result,a,b];
        }
        }
    }
}
function factorial(n){
    return n*factorial(n-1);
}
function isPrime(n){
    if(n<=1) return false;
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0) return false;
    }
    return true;
}
function fibonacci(n){
    let a = 0, b = 1, c;
    if (n === 0) return a;
    if (n === 1) return b;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}
   
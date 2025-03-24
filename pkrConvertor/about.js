

let usdTopkr = 280;
let pkrTousd = 1;
function convertorUsd(usd){
    return usd * pkrTousd;
    
}
function convertorPkr(pkr){
    return pkr * usdTopkr;
}
console.log("20 usd to pkr",convertorPkr(20))
console.log("30 pkr to usd",convertorUsd(30))
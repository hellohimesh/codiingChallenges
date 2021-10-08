let ar = [10,20,20,10,10,30,50,10,20];
console.log(ar);
let matched = [];
let unmatched = [];

function sockMerchant(n, ar) {
  
  while (ar.length > 0) {
    let itsmatch = false;
    console.log(ar.length);
    console.log(ar);
    if (ar.length > 1) {
      for (let i = 1; i < ar.length; i++) {
        if (ar[0] == ar[i]) {
          itsmatch = true;
          matched.push(ar[0]);
          //   console.log("matched elements",ar[0]+'=='+ar[i]);
          //console.log(ar+'index '+i+'   deleted element'+ar.splice(i,1));
          ar.splice(i, 1);
          ar.splice(0, 1);
        }
      }
    }
    console.log('remainign', ar);
    if (itsmatch == false) {
      console.log("it does not match", ar[0]);
      ar.splice(0, 1);
      console.log(ar);
    }
    console.log("matcheed", matched);
    
    // console.log(ar);
  }
  return matched.length;
  console.log(ar.length);
}


console.log(sockMerchant(ar.length, ar));

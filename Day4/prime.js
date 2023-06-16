// Prime Number
let isprime = true;
function isprimeNumber(Num)
{
    //check is num is divisible by 1 & num itself
    //if yes then prime number
    //else not a prime number
    if(Num <=1){
        isprime = false;
    }
    else if(Num==2 || Num==3){
        isprime=true;
    }
        // 47 /2,/3,/4,/5.../46
    else if(Num%2==0 || Num%3==0) //check if num is divisible by 2 & 3
    {
        isprime = false;
    }
    else{
        for(i = 4; i<=Math.sqrt(Num); i=i+6)
        {   //loop prv number
            //console.log(i);
            if(Num%i==0)
            {
            isprime = false;
            break;
            }
        
            else{
            isprime = true;
            }
    
    }
    
}
console.log(isprime +  "-" + Num);
}

isprimeNumber(47);
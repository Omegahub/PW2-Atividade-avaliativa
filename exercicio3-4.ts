let numero: number =112;
let parImpar = function(numero:number):void
{
    if(numero % 2 == 0)
    {
        console.log("PAR")
    }
    else
    {
       console.log("Impar");
    }
}

console.log(`${parImpar(numero)}`)
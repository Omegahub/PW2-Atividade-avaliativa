export class piscina
{
   constructor(public diametro:number, public custoConstrucao:number){}
   raio()
   {
    return this.diametro / 2;
   }
   area()
   {
       return 3.14159 * (this.raio() * this.raio());
   }
   custoTotal()
   {
       return this.area() * this.custoConstrucao
   }
   
    
}
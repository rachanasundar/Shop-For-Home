export class Discount {
    constructor(
      public  key:{
            email:String,
            coupon:String
        },
        public discount:number
    ){}
}

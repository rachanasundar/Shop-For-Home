export class Order {
    constructor(
        public keys:{
             dateAndTime:string,
         email:String,
         productId:number,
        },
        public productName:String,
        public productPrice:number,
        public imageUrl  :String,
        public quantity:number,
        public categories:String
    ){

    }
}

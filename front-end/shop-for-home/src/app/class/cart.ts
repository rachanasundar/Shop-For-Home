export class Cart {
    constructor(
        public keys :{
             email:String,
            productId:number,
        },        
        public productName:String,
        public productPrice:number,
        public imageUrl  :String,
        public quantity:number,
        public categories:String
    ){} 
}

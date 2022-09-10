export class WishList {
    constructor(
        public keys :{
             email:String,
            productId:number,
        },        
        public productName:String,
        public productPrice:number,
        public imageUrl  :String,
        public categories:String
    ){}
}

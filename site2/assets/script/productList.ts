export class Products{
    name : string;
    image: string;
    price: number;
    rating:number;
    category:string;
    remark:string;
    constructor(name:string,image:string,price:number,rating:number,category:string,remark:string){
        this.name = name;
        this.image = image;
        this.price = price;
        this.rating = rating;
        this.category=category;
        this.remark = remark;
    }
}
  var product1:Products = new Products("Lifting Glow Serum","assets/images/product1.jpeg",100000,5,"skin-care","top-product");
  var product2:Products = new Products("Facial Wash","assets/images/product1.jpeg",80000,5,"skin-care","top-product");
  var product3:Products = new Products("Acne Toner","assets/images/product1.jpeg",50000,5,"skin-care","top-product");
  var product4:Products = new Products("Eye Treatment Serum","assets/images/product1.jpeg",30000,5,"skin-care","top-product");
  var product5:Products = new Products("Lifting Glow Serum","assets/images/product1.jpeg",100000,5,"skin-care","b");
  var product6:Products = new Products("Facial Wash","assets/images/product1.jpeg",80000,5,"skin-care","b");
  var product7:Products = new Products("Acne Toner","assets/images/product1.jpeg",50000,5,"skin-care","b");
  var product8:Products = new Products("Eye Treatment Serum","assets/images/product1.jpeg",30000,5,"skin-care","b");
  var product9:Products = new Products("Lifting Glow Serum","assets/images/product1.jpeg",100000,5,"skin-care","b");
  var product10:Products = new Products("Facial Wash","assets/images/product1.jpeg",80000,5,"skin-care","b");
  var product11:Products = new Products("Acne Toner","assets/images/product1.jpeg",50000,5,"skin-care","b");
  var product12:Products = new Products("Eye Treatment Serum","assets/images/product1.jpeg",30000,5,"skin-care","b");
  export var products =[product1,product2,product3,product4,product5,product6,product7,product8,product9,product10,product11,product12];
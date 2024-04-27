export class Donation {
  private id:any;
  private quantity:any;
  private expirationDate:any;
  private nameProduct:any;
  private ong:any;
  private typeProduct:any;
  private urlImage:any;

  constructor(id:any, quantity:any, expirationDate:any, nameProduct:any, ong:any, typeProduct:any, urlImage:any) {
    this.id = id;
    this.quantity = quantity;
    this.expirationDate = expirationDate;
    this.nameProduct = nameProduct;
    this.ong = ong;
    this.typeProduct = typeProduct;
    this.urlImage = urlImage;
  }
}

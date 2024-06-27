export class Profile {
  name: string;
  email: string;
  ruc: string;
  phone: string;
  description: string;
  image: string;
  user: string;
  constructor(name: string, email: string, ruc: string, phone: string, description: string,image: string, user: string) {
    this.name = name;
    this.email = email;
    this.ruc = ruc;
    this.phone = phone;
    this.description = description;
    this.image = image;
    this.user = user;
  }
}

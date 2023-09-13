export class Personne {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    birthDay: Date;
    phone: string;

    constructor() {
        this.id = 0;
        this.firstName = "";
        this.lastName = "";
        this.address = "";
        this.birthDay = new Date();
        this.phone = "";
      }
}
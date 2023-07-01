export class Play {
  id: number = 0;
  name: string;
  description: string;
  image: string;
  ticketsLeft: number;

  constructor(id:number = 0,name: string = "", description: string= "", image: string= "", ticketsLeft: number = 50) {
    this.id=id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.ticketsLeft = ticketsLeft;
  }
}

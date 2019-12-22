// export interface Post {
//     "name": {"title": string; "first": string; "last": string;},
//     "dob": { "date": string; "age": number; },
//     "id": {"name": string;"value": number;},
//     "nat": string;
// }

export class User {
    public id: Id;
    public name: Name;
    public dob: Dob;
    public picture: Picture;
    public nat: string;
}

export class Id {
  public name: string;
  public value: string;
}

export class Name {
    public title: string;
    public first: string;
    public last: string;
}

export class Dob {
    public date: string;
    public age: number;
}

export class Picture {
    public large: string;
    public medium: string;
    public thumbnail: string;
}

// este de abajo se agrego motivo de prueba para aprender a mapear ingredientes...

export class Infor {
  public seed: string;
  public results: number;
  public page: number;
  public version: string;
}


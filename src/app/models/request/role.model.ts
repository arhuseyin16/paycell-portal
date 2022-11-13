import { Authority } from "./authority.model";

export class Role {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public authorities: Authority[]
  ) {
  }

}

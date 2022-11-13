import { Authority } from "./authority.model";
import { Role } from "./role.model";

export class Permission {
  constructor(
    public authorities: Authority[],
    public roles: Role[]
  ) {
  }
}

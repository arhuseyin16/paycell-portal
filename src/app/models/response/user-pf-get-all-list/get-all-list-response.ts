import { City } from "./city";
import { Town } from "./town";

export class GetAllListResponse {
  constructor(
    public cityList: City[],
    public townMap: Map<string, Town[]>,
  ) {
  }
}

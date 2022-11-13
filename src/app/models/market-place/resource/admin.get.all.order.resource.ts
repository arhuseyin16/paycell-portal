import { AdminOrderResource } from './admin.order.resource';

export class AdminGetAllOrderResource {
  constructor(
    public adminOrderResources: AdminOrderResource[],
  ) {
  }
}

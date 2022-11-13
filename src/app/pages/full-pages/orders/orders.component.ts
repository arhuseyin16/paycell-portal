import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PwlService } from '../../../services/pwl.service';
import { MessageService } from '../../../shared/services/message.service';
import { NgForm } from '@angular/forms';
import { RequestMethod } from 'app/models/request/request.type.enum';
import { AdminOrderResource } from '../../../models/market-place/resource/admin.order.resource';
import { OrderState } from '../../../models/market-place/order.state.enum';
import { AdminOrderStatusUpdateDto } from 'app/models/market-place/dto/admin.order.status.update.dto';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class OrdersComponent {
  isSubmitted2 = false;
  isSubmitted3 = false;
  isSubmitted4 = false;
  isSubmitted5 = false;
  isSubmitted6 = false;
  cargoSelection;

  openOrders: AdminOrderResource[];
  sendingOrders: AdminOrderResource[];
  completedOrders: AdminOrderResource[];
  cancellationsAndRefunds: AdminOrderResource[];

  constructor(private modalService: NgbModal,
              private modalSecondaryService: NgbModal,
              private modalThirdService: NgbModal,
              private pwlService: PwlService,
              private messageService: MessageService,
              private cdr: ChangeDetectorRef) {
                this.getOrders();
  }

  openPrimary(content) {
    this.modalService.open(content, { centered: true});
  }

  openSecondary(content) {
    this.modalSecondaryService.open(content, { centered: true});
  }
  openThird(content) {
    this.modalThirdService.open(content, { centered: true})
  }
  cancelOrderModal(content) {
    this.modalThirdService.open(content, { centered: true})
  }

  deleteCargoCode(orderId: number) {
    this.setOrderStatus(orderId, OrderState.PREPARING);
    this.messageService.addSuccess('Gönderi Kodu başarılı bir şekilde silindi.');
  }

  approveOrder(orderId: number) {
    this.setOrderStatus(orderId, OrderState.PREPARING);
    this.messageService.addSuccess('Sipariş başarılı bir şekilde onaylandı.');
  }

  sendCargo(orderId: number, content) {
    if (this.cargoSelection === '1') {
      this.setOrderStatus(orderId, OrderState.WAITING_SEND_TO_CARGO);
      this.openThird(content);
      this.messageService.addSuccess('Sipariş başarılı bir şekilde güncellendi');
    }

    if (this.cargoSelection === '2') {
      this.setOrderStatus(orderId, OrderState.SEND_TO_CARGO);
      this.messageService.addSuccess('Sipariş başarılı bir şekilde güncellendi');
    }
  }

  submitForm(form: NgForm) {
    this.isSubmitted2 = true;
    if (!form.valid) {
      return false;
    } else {
      this.messageService.addSuccess('Başarılı');
    }
  }

  submitForm2(form2: NgForm) {
    this.isSubmitted2 = true;
    if (!form2.valid) {
      return false;
    } else {
      this.messageService.addSuccess('Başarılı');
    }
  }

  submitForm3(form3: NgForm, orderId: number) {
    this.isSubmitted3 = true;
    if (!form3.valid) {
      return false;
    } else {

      this.setOrderStatus(orderId, OrderState.CANCELLED);
      this.messageService.addSuccess('Sipariş başarılı bir şekilde iptal edildi.');
    }
  }
  submitForm4(form4: NgForm) {
    this.isSubmitted4 = true;
    if (!form4.valid) {
      return false;
    } else {
      this.messageService.addSuccess('Başarılı');
    }
  }
  submitForm5(form5: NgForm) {
    this.isSubmitted5 = true;
    if (!form5.valid) {
      return false;
    } else {
      this.messageService.addSuccess('Gönderildi');
    }
  }

  submitForm6(form6: NgForm) {
    this.isSubmitted6 = true;
    if (!form6.valid) {
      return false;
    } else {
      this.messageService.addSuccess('Gönderildi');
    }
  }

  getOrders() {
    this.pwlService.request(RequestMethod.GET, 'order-service/external/order/admin/all-orders-by-merchant', null).subscribe(
      res => {
        if (res != null && res.status === 200 && res.body != null) {
          const ordersMerchant: AdminOrderResource[] = res.body.adminOrderResources;

          this.openOrders = ordersMerchant.filter(order => OrderState.getOpenOrderStateList().includes(order.orderState));
          this.sendingOrders = ordersMerchant.filter(order => OrderState.getSendingOrdersStateList().includes(order.orderState));
          this.completedOrders = ordersMerchant.filter(order => OrderState.getCompletedOrdersStateList().includes(order.orderState));
          this.cancellationsAndRefunds = ordersMerchant.filter(order => OrderState.getCancellationsAndRefundsStateList().includes(order.orderState));
          this.cdr.detectChanges();
        }
      },
      err => {
        console.log('err', err);
      }
    );
  }

  setOrderStatus(orderId: number, orderState: OrderState) {
    this.pwlService.request(RequestMethod.POST, 'order-service/external/order/admin/update-order-status', new AdminOrderStatusUpdateDto(orderId, orderState)).subscribe(
      res => {
        this.getOrders();
      },
      err => {
        console.log('err', err);
      }
    );
  }

}


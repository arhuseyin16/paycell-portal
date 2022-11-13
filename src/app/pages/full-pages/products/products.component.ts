import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PwlService } from '../../../services/pwl.service';
import { Router } from "@angular/router";
import { RequestMethod } from 'app/models/request/request.type.enum';
import {MessageService} from "../../../shared/services/message.service";
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  products: Object[];

  page = 0;
  totalElements = 0;

  constructor(private pwlService: PwlService, private cdr: ChangeDetectorRef, private router: Router , private messageService: MessageService) {
  }

  getProductList(page: number) {
    this.pwlService.request(RequestMethod.POST, 'product-service/external/product-model/merchant/page', (page - 1)).subscribe(
      res => {
        if (res.status === 200) {
          const body: any = res.body;
          this.products = body?.content;
          console.log("products", this.products);
          this.page = body?.page;
          this.totalElements = body?.totalElements;
          this.cdr.detectChanges();
        }
      },
      err => {
        console.log("err", err);
      }
    );
  }
  duplicateProductConfirmDialog(id:any){
    Swal.fire({
      text: "Ürünü  kopyalamak istediğinizden emin misiniz?",
      showCancelButton: true,
      confirmButtonText: "Evet",
      cancelButtonText: "Hayır?",
      title: 'Ürün Kopyalama'
    })
      .then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.duplicateProduct(id)
          Swal.fire('Kopyalandı!', '', 'success')
        } else if (result.isDismissed) {
          Swal.fire('Kopyalanmadı', '', 'info')
        }
      })
  }

  duplicateProduct(id: any) {
    this.pwlService.request(RequestMethod.POST, 'product-service/external/product-model/merchant/duplicate', parseInt(id)).subscribe(
      res => {
        if (res.status === 200) {
          this.getProductList(1);
        }
      },
      err => {
        console.log("err", err);
      }
    );
  }
  deleteProductConfirmDialog(id: any){
    Swal.fire({
      text: "Ürünü silmek istediğinizden emin misiniz?",
      showCancelButton: true,
      confirmButtonText: "Evet",
      cancelButtonText: "Hayır?",
      title: 'Ürün Silme'
    })
      .then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.deleteProduct(id)
          Swal.fire('Silindi!', '', 'success')
        } else if (result.isDismissed) {
          Swal.fire('Silinmedi', '', 'info')
        }
      })
  }

  deleteProduct(id: any) {
    this.pwlService.request(RequestMethod.POST, 'product-service/external/product-model/merchant/delete', parseInt(id)).subscribe(
      res => {
        if (res.status === 200) {
          this.getProductList(1);
        }
      },
      err => {
        console.log("err", err);
      }
    );
  }

  editProduct(id: number) {
    this.router.navigate(['/edit-product/' + id]);
  }

  copyToClipboard(id) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      var item='https://www.paycellmarketplace.com.tr/product/'+ id;
      e.clipboardData.setData('text/plain', (item));
      e.preventDefault();
      document.removeEventListener('copy', null);
      this.messageService.addSuccess('Kopyalama işlemi Başarılı')
    });
    document.execCommand('copy');
  }


  removeProduct() {

  }

  loadPage(selectedPage: number) {
    this.getProductList(selectedPage);
  }

  ngOnInit(): void {
    this.getProductList(1);
  }


}


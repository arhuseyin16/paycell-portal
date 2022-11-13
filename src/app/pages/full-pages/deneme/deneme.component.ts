import { Component } from '@angular/core';
import { I18nMappingService } from "../../../services/i18n-mapping.service";
import { HttpResponse } from "@angular/common/http";


@Component({
  selector: 'app-deneme',
  templateUrl: './deneme.component.html',
  styleUrls: ['./deneme.component.scss']
})

export class DenemeComponent {
  name = '';
  i18nFile: any;
  i18nCallFailed = false;

  constructor(private i18nMappingService: I18nMappingService) {
  }

  change(event) {
    this.name = event;
    if (this.name === 'can') {
      this.getI18File();
    }
  }

  getI18File() {
    this.i18nMappingService
      .getFile('tr')
      .subscribe(
        (res: HttpResponse<any[]>) => this.i18nFile = JSON.stringify(res.body),
        (res: HttpResponse<any>) => this.i18nCallFailed = true
      )
    ;
  }
}

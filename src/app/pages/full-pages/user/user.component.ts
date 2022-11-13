import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgbdSortableHeader, SortEvent } from "../../../shared/directives/sortable.directie";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";
import { NgxSpinnerService } from "ngx-spinner";
import { I18nMappingService } from "../../../services/i18n-mapping.service";
import { HttpResponse } from "@angular/common/http";
import { UserService } from "../../../services/user.service";
import { User } from "../../../models/user.model";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  userList: User[];
  isLoading= false;

  constructor(
    private spinner: NgxSpinnerService,
    private userService: UserService,
  ) {
    this.loadUserList(null);
  }

  loadUserList(event) {
    this.isLoading = true;
    this.spinner.show("spinner1");
    this.userService.query({
    }).subscribe(
      (res: HttpResponse<any[]>) => this.onSuccess(res.body, res.headers),
      (res: HttpResponse<any>) => this.onError(res.body)
    );
  }

  private onSuccess(data, headers) {
    this.userList = data.content;
    this.isLoading = false;
    this.spinner.hide("spinner1");
  }

  private onError(error) {
    this.isLoading = false;
    this.spinner.hide("spinner1");
  }
}

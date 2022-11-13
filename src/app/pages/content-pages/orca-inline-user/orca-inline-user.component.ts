import { Component, OnInit } from '@angular/core';

import {NgxSpinnerService} from "ngx-spinner";

import {HttpResponse} from "@angular/common/http";
import {User} from "../../../models/user.model";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-orca-inline-user',
  templateUrl: './orca-inline-user.component.html',
  styleUrls: ['./orca-inline-user.component.scss']
})
export class  OrcaInlineUserComponent implements OnInit {
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
  ngOnInit(): void {
  }

}





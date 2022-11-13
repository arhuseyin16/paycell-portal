import { Component, EventEmitter, OnDestroy } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { IMessage, MessageService } from "../../services/message.service";
import { ToastrService } from "ngx-toastr";
import { NavigationStart, Router } from "@angular/router";

export interface IAlert {
  type: string;
  message: string;
}

export interface IError {
  httpErrorResponse: HttpErrorResponse,
  defaultMessage: string
}

@Component({
  selector: 'app-message',
  template: '',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnDestroy {

  messageEmitter: EventEmitter<IMessage>;

  constructor(private messageService: MessageService,
              private toastrService: ToastrService,
              private router: Router) {
    this.messageEmitter = messageService.getEmitter();
    this.messageEmitter.subscribe(message => this.showPositionTopFullWidth(message));

    router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        this.removeToastr();
      }
    });
  }

  ngOnDestroy() {
    this.removeToastr();
    if (this.messageEmitter) {
      this.messageEmitter.unsubscribe();
      this.messageEmitter = null;
    }
  }

  removeToastr() {
    this.toastrService.clear();
  }

  showPositionTopFullWidth(message: IMessage) {
    //success
    //info
    //warning
    //error

    this.removeToastr();
    if (message && message.type) {
      const positionClass = 'toast-top-full-width';
      const progressBar = true;
      const timeOut = 15000

      if(message.type === "success") {
        this.toastrService.success(message.message, null,
          {
            positionClass: positionClass,
            progressBar: progressBar,
            timeOut: timeOut
          });
      }

      if(message.type === "error") {
        this.toastrService.error(message.message, null,
          {
            positionClass: positionClass,
            progressBar: progressBar,
            timeOut: timeOut
          });
      }
    }
  }

}

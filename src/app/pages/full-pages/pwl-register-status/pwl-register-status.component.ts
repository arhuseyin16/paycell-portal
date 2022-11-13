/**
 * @author Emre Dinc
 */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-status',
  templateUrl: './pwl-register-status.component.html',
  styleUrls: ['./pwl-register-status.component.scss']
})
export class PwlRegisterStatusComponent {
  public approved: boolean = false;
  public rejected: boolean = false ;
  public waiting: boolean = false;

  constructor(private route: ActivatedRoute) {
    const state = this.route.snapshot.params['state'];
    if (state) {
      if(state === 'approved') {
        this.approved = true;
      } else if (state === 'submitted') {
        this.waiting = true;
      } else if (state === 'rejected') {
        this.rejected = true;
      } 
    }
  }

  whichPage(flagNo: number) {
    if (flagNo == 1) {
      this.waiting = true;
      this.approved = false;
      this.rejected = false;
    }
    if (flagNo == 2) {
      this.waiting = false;
      this.approved = true;
      this.rejected = false;
    }
    if (flagNo == 3) {
      this.waiting = false;
      this.approved = false;
      this.rejected = true;
    }
  }
}


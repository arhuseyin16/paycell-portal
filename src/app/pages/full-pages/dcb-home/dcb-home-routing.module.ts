import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DcbHomeComponent} from "./dcb-home.component";

const routes: Routes = [
  {
    path: '',
    component: DcbHomeComponent,
    data: {
      title: 'Ana Sayfa'
    }
    // children: [
    //   {
    //     path: 'page',
    //     component: PageComponent,
    //     data: {
    //       title: 'Page'
    //     }
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DcbHomeRoutingModule { }

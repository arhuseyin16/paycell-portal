import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DcbCollectionSummaryComponent} from "./dcb-collection-summary.component";

const routes: Routes = [
  {
    path: '',
    component: DcbCollectionSummaryComponent,
    data: {
      title: 'Tahsilat Özet Raporu'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class dcbCollectionSummaryRoutingModule {
}

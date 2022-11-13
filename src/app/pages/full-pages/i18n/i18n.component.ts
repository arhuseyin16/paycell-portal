import { Component, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { NgbdSortableHeader, SortEvent } from "../../../shared/directives/sortable.directie";
import { I18nMappingService } from "app/services/i18n-mapping.service";
import { HttpResponse } from "@angular/common/http";
import {
  ColumnMode,
  DatatableComponent
} from '@swimlane/ngx-datatable';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-i18n',
  templateUrl: './i18n.component.html',
  styleUrls: ['./i18n.component.scss', '/assets/sass/libs/datatables.scss'],
  encapsulation: ViewEncapsulation.None
})

export class I18nComponent {

  i18nList: any[];
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  public ColumnMode = ColumnMode;
  public editing = {};
  public edited = [];
  private tempData = [];
  @ViewChild(DatatableComponent) table: DatatableComponent;

  isLoading= false;
  constructor(
    private spinner: NgxSpinnerService,
    private i18nMappingService: I18nMappingService,
  ) {
    // this.itemsPerPage = PAGINATION.ITEMS_PER_PAGE;
    // this.routeData = this.activatedRoute.data.subscribe((data) => {
    //   this.page = data['pagingParams'].page;
    //   this.previousPage = data['pagingParams'].page;
    //   this.reverse = data['pagingParams'].ascending;
    //   this.predicate = data['pagingParams'].predicate;
    // });

    this.loadI18nList(null);
  }

  serverSideSetPage(event) {
    // this.http
    //   .get('assets/data/datatable-data.json')
    //   .pipe(map((data) => data as Array<any>))
    //   .subscribe((data) => {
    //     this.serverSideRowData = data;
    //   });
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

  }

  inlineEditingUpdate(event, cell, rowIndex) {

    this.editing[rowIndex + '-' + cell] = false;
    this.i18nList[rowIndex][cell] = event.target.value;
    this.i18nList = [...this.i18nList];
  }

  filterUpdate(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.tempData.filter(function (d) {
      return d.full_name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.i18nList = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  update(){
    this.i18nMappingService
      .update(this.i18nList)
      .subscribe(
      (res: HttpResponse<any[]>) => this.onSuccess(res.body, res.headers),
      (res: HttpResponse<any>) => this.onError(res.body)
    );
  }

  loadI18nList(event) {
    this.isLoading = true;
    this.spinner.show("spinner1");
    this.i18nMappingService.query({
      // page: this.page - 1,
      // size: this.itemsPerPage,
      // sort: this.sort(),
      // fromDate: this.fromDate,
      // toDate: this.toDate
    }).subscribe(
      (res: HttpResponse<any[]>) => this.onSuccess(res.body, res.headers),
      (res: HttpResponse<any>) => this.onError(res.body)
    );
  }

  private onSuccess(data, headers) {
    // this.links = this.parseLinks.parse(headers.get('link'));
    // this.totalItems = headers.get('X-Total-Count');
    this.i18nList = data.content;
    this.isLoading = false;
    this.spinner.hide("spinner1");
    console.log(data);
  }

  private onError(error) {
    // this.alertService.error(error.error, error.message, null);
    this.isLoading = false;
    this.spinner.hide("spinner1");
  }
}

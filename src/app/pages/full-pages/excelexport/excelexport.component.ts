import { Component, OnInit, Input } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excelexport',
  templateUrl: './excelexport.component.html',
  styleUrls: ['./excelexport.component.css']
})
export class ExcelexportComponent {

  @Input() data: string[];
  @Input() fileName: string;


  exports(): void {
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName + '.xlsx');
  }


}

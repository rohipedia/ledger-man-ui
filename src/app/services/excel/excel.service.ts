import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  public onFileUpload(event): Promise<any> {
    return new Promise((resolve, reject) => {
      let workBook = null;
      let jsonData = null;
      const reader = new FileReader();
      const file = event.target.files[0];
      reader.onload = (event) => {
        const data = reader.result;
        workBook = XLSX.read(data, { type: 'binary' });
        jsonData = workBook.SheetNames.reduce((initial, name) => {
          const sheet = workBook.Sheets[name];
          initial[name] = XLSX.utils.sheet_to_json(sheet);
          return initial;
        }, {});
        resolve(jsonData);
      }
      reader.readAsBinaryString(file);
    });      
  }

  public downloadExcel() {
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Sheet 1');
    const header = ['serial', 'question', 'a', 'b', 'c', 'd', 'correct', 'stream'];
    worksheet.addRow(header);
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'Questions.xlsx');
    });
  }

}
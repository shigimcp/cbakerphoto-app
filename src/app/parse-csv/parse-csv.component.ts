import { Component, OnInit } from '@angular/core';

import { ViewChild } from '@angular/core';
import { CSVRecord } from '../CSVRecord';

import { ElementRef } from '@angular/core';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Component({
  selector: 'app-parse-csv',
  templateUrl: './parse-csv.component.html',
  styleUrls: ['./parse-csv.component.scss']
})


export class ParseCSVComponent implements OnInit {

    @ViewChild('csvReader') csvReader: any;
    public records: any[] = [];


    constructor() { }

    ngOnInit(): void {
    }


    uploadListener($event: any): void {

        // const text = [];
        const files = $event.srcElement.files;

        console.log('$event.type = ' + $event.type);
        console.log('$event.srcElement = ' + $event.srcElement);
        console.log('$event.srcElement.files = ' + $event.srcElement.files);
        console.log('files = ' + files);

        if (this.isValidCSVFile(files[0])) {

            const input = $event.target;
            const reader = new FileReader();

            reader.readAsText(input.files[0]);

            reader.onload = () => {
                const csvData = reader.result;
                // console.log('csvData = ' + csvData);

                const csvRecordsArray = (csvData as string).split(/\r\n|\n/);
                // console.log('csvRecordsArray = ' + csvRecordsArray);
                // console.log('csvRecordsArray.length = ' + csvRecordsArray.length);

                const headersRow = this.getHeaderArray(csvRecordsArray);

                this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
            };

            // const reader.onerror = function() {
            reader.onerror = () => {
                console.log('error has occured while reading file!');
            };

        } else {
            alert('Please import valid .csv file.');
            this.fileReset();
        }
    }

    getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {

        // console.log('csvRecordsArray.length = ' + csvRecordsArray.length);
        // console.log('headerLength = ' + headerLength);

        const csvArr = [];

        for (let i = 1; i < csvRecordsArray.length; i++) {

            const curruntRecord = (csvRecordsArray[i]).split(',');

            if (curruntRecord.length === headerLength) {

                const csvRecord: CSVRecord = new CSVRecord();

                // csvRecord.FileName = curruntRecord[0].trim();
                // csvRecord.Directory = curruntRecord[1].trim();
                // csvRecord.MIMEType = curruntRecord[2].trim();
                // csvRecord.ImageWidth = curruntRecord[3].trim();
                // csvRecord.ImageHeight = curruntRecord[4].trim();
                // csvRecord.ImageSize = curruntRecord[5].trim();

                csvRecord.Directory = curruntRecord[0].trim();
                csvRecord.FileName = curruntRecord[1].trim();
                csvRecord.ImageWidth = curruntRecord[2].trim();
                csvRecord.ImageHeight = curruntRecord[3].trim();
                csvRecord.MIMEType = curruntRecord[4].trim();

                csvArr.push(csvRecord);
            }
        }
        return csvArr;
    }

    isValidCSVFile(file: any) {
        return file.name.endsWith('.csv');
    }

    getHeaderArray(csvRecordsArr: any) {
        const headers = (csvRecordsArr[0]).split(',');
        const headerArray = [];

        // for (let j = 0; j < headers.length; j++) {
        for (const j of headers) {
            headerArray.push(headers[j]);
        }
        return headerArray;
    }

    fileReset() {
        this.csvReader.nativeElement.value = '';
        this.records = [];
    }
}

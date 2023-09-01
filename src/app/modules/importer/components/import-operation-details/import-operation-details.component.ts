import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-operation-details',
  templateUrl: './import-operation-details.component.html',
  styleUrls: ['./import-operation-details.component.css']
})
export class ImportOperationDetailsComponent implements OnInit {
  isFilesDropped:boolean = true;
  isLocationsTableDropped:boolean = true;
  uploadProgress:number = 0 ;
  intervalId;
  constructor() { }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      if (this.uploadProgress < 100) {
        this.uploadProgress += 10;
      } else {
        clearInterval(this.intervalId); 
      }
    }, 1000);
  }

}

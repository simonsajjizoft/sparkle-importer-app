import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-locations-table',
  templateUrl: './locations-table.component.html',
  styleUrls: ['./locations-table.component.css']
})
export class LocationsTableComponent implements OnInit {
  dataSource: any;
  shownColumns: any;
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>([]);
    this.shownColumns =  ['id','files', 'start','end','collection'];
  }

  ngAfterViewInit(){
    this.dataSource = new MatTableDataSource<any>([]);
    this.fetchFiles()
  }

  fetchFiles(){
    this.dataSource.data = [
      {id:'00631',files:4,start:'02-05-2023',end:'02-05-2023',collection:'35235'},
      {id:'00632',files:10,start:'02-05-2023',end:'02-05-2023',collection:'83235'},
      {id:'00633',files:6,start:'02-05-2023',end:'02-05-2023',collection:'2235'},
      {id:'00634',files:11,start:'02-05-2023',end:'02-05-2023',collection:'935'},
      {id:'00635',files:7,start:'02-05-2023',end:'02-05-2023',collection:'87886'},
      {id:'00636',files:8,start:'02-05-2023',end:'02-05-2023',collection:'33555'},
      {id:'00637',files:14,start:'02-05-2023',end:'02-05-2023',collection:'635'},
      {id:'00638',files:17,start:'02-05-2023',end:'02-05-2023',collection:'77235'},
      {id:'00639',files:2,start:'02-05-2023',end:'02-05-2023',collection:'23235'},
    ];
  }

}

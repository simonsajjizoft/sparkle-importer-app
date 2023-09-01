import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-files-import-table',
  templateUrl: './files-import-table.component.html',
  styleUrls: ['./files-import-table.component.css']
})
export class FilesImportTableComponent implements OnInit,AfterViewInit {
  dataSource: any;
  shownColumns: any;
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>([]);
    this.shownColumns =  ['name', 'size','createdDate','status','remove'];
  }

  ngAfterViewInit(){
    this.dataSource = new MatTableDataSource<any>([]);
    this.fetchFiles()
  }

  fetchFiles(){
    this.dataSource.data = [
      {id:1,name:'1351_57134_3252.txt',size:'24',createdDate:'02-05-2023',status:'55'},
      {id:2,name:'7351_34134_3255.txt',size:'67',createdDate:'08-05-2023',status:'processing'},
      {id:3,name:'6351_34134_3253.txt',size:'14',createdDate:'08-05-2023',status:'75'},
      {id:4,name:'6611_34734_8257.txt',size:'64',createdDate:'07-15-2023',status:'processing'},
      {id:5,name:'9351_34134_3293.txt',size:'24',createdDate:'07-05-2023',status:'92'},
      {id:6,name:'9351_34134_3553.txt',size:'44',createdDate:'07-04-2023',status:'completed'},
      {id:7,name:'8351_34134_3667.txt',size:'8',createdDate:'07-04-2023',status:'25'},
      {id:8,name:'7351_44934_5753.txt',size:'16',createdDate:'07-04-2023',status:'waiting'},
      {id:9,name:'5373_63144_7251.txt',size:'35',createdDate:'07-04-2023',status:'waiting'},
      {id:10,name:'2345_44434_4653.txt',size:'22',createdDate:'07-05-2023',status:'waiting'},
      {id:11,name:'9351_34634_3253.txt',size:'61',createdDate:'07-05-2023',status:'processing'},
      {id:12,name:'9351_36134_3253.txt',size:'22',createdDate:'07-05-2023',status:'45'},
      {id:13,name:'7351_27134_3253.txt',size:'28',createdDate:'07-05-2023',status:'waiting'},
      {id:14,name:'9351_34134_3253.txt',size:'6',createdDate:'07-05-2023',status:'waiting'},
      {id:15,name:'6351_34134_3253.txt',size:'24',createdDate:'07-05-2023',status:'processing'},
      {id:16,name:'7351_34134_3253.txt',size:'40',createdDate:'07-05-2023',status:'waiting'},
      {id:17,name:'5455_54555_9253.txt',size:'34',createdDate:'07-05-2023',status:'waiting'}, 
      {id:18,name:'5551_34134_3253.txt',size:'54',createdDate:'07-05-2023',status:'waiting'},
    ];
  }

}

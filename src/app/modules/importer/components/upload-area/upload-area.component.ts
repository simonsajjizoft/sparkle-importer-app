import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-area',
  templateUrl: './upload-area.component.html',
  styleUrls: ['./upload-area.component.css']
})
export class UploadAreaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onDrop(files) {
  
  }

  fileDrop(event): void {
    event.preventDefault();
    event.stopPropagation();
    let filesCheck = false;
    for (var i = 0; i < event?.dataTransfer?.files.length; i++) {
      if (event?.dataTransfer?.files[i]?.size > 0) filesCheck = true; // for prevent drop images from zip file;
    };
    if (filesCheck) this.onDrop(event?.dataTransfer?.files);
  }

  fileDrag(event): void {
    event.preventDefault();
    event.stopPropagation();
  }


}

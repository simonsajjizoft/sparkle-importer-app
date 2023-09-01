import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BulkUploadService {
  imagesForUpload: any = {};
  imageUploaded: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private apiservice: ApiService) { }

  fileUpload(files, inValidFiles, logId, endPoint, bulkuploadactivityid): void {
    this.imagesForUpload[logId] = {};
    this.imagesForUpload[logId].files = [...files];
    this.imagesForUpload[logId].errors = [...inValidFiles];
    for (let i = 0; i < files.length; i++) {
      if(files[i]?.status !== 'Failed') this.fileUploadApi(files[i], logId, endPoint, bulkuploadactivityid);
    };
  }
  
  fileUploadApi(file, logId, endPoint, bulkuploadactivityid): void {
    let formData = new FormData();
    formData.append("image[]", file?.file);
    let currentFile: any = {};
    this.imagesForUpload[logId]?.files?.forEach(element => {
      if(element?.timeId === file?.timeId) currentFile = element;
    });
    currentFile.api = this.apiservice.bulkImageUpload(`${environment.imageApiUrl}/image/${endPoint}?code=${environment.imageApiFunctionKey}&bulkuploadid=${logId}&bulkuploadactivityid=${bulkuploadactivityid}`, formData).subscribe(data => {
      setTimeout(()=>{
        let allApiCompleted = true;
        this.imagesForUpload[logId]?.files?.forEach(element => {
          if (!element?.api?.closed && element?.status !== "Failed") allApiCompleted = false; 
        });
        if(allApiCompleted) {
          delete this.imagesForUpload[logId];
          this.imageUploaded.next(true);
        }
      }, 1000);
    });
  }
}

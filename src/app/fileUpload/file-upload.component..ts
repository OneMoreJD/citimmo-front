import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { UploadFileService } from './upload-file.service';
import { Observable } from 'RxJs';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent implements OnInit {

    selectedFiles: FileList;
    pathselectedFiles: string;
    progressInfos = [];
    message ='';

    //fileInfos: Observable<any>;
    fileInfos = [];

    ngOnInit() {
      //this.fileInfos = this.uploaFileService.getFiles();
    }

    constructor(private uploaFileService: UploadFileService){}

    selectFiles(event){
      this.progressInfos = [];
      console.log("target path : " + event.target.value);
      this.selectedFiles = event.target.files;
      this.pathselectedFiles = event.target.value;
      for (let i = 0; i < this.selectedFiles.length; i++){
        this.fileInfos[i]=  this.selectedFiles[i];
        console.log("files : " +  this.fileInfos[i].name)
      }

      //console.log("this.fileInfos : " + this.fileInfos.subscribe( ) );
    }

    uploadFiles(){
      this.message = '';
      for (let i = 0; i < this.selectedFiles.length; i++){
        this.upload(i, this.selectedFiles[i]);
      }
    }

    upload(idx, file) {
      this.progressInfos[idx] = { value: 0, fileName: file.name };

      this.uploaFileService.pushFileToStorage(file).subscribe(
        event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
           // this.fileInfos = this.uploaFileService.getFiles();
          }
        },
        err => {
          this.progressInfos[idx].value = 0;
         // this.message = 'Le fichier ' + file.name + ' ne peut pas être uploadé.';
        });
    }
}

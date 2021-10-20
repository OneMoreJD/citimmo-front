import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UploadFileService {

  private baseUrl = 'http://localhost:8080/uploadFile';

  constructor(private https: HttpClient) { }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const METHODE ='POST';
    const data: FormData = new FormData();
        data.append('file', file);
        let newRequest = new HttpRequest('POST', this.baseUrl,  data, {
            reportProgress: true,
            responseType: 'text',
        });
        return this.https.request(newRequest);
  }

  getFiles(): Observable<any> {
    return this.https.get('${this.baseUrl}/files');
  }

}

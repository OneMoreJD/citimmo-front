import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';
import { DialogData } from './dialog.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }

  openDialog(data:DialogData): Observable<boolean> {
    return this.dialog
          .open(DialogComponent,
              {
                data,
                width: '400px',
                disableClose: true,
              })
          .afterClosed();
  }
}

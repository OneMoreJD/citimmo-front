import { Component, Inject, OnInit } from '@angular/core';
import { DialogService } from './dialog.service';
import { DialogData } from './dialog.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:DialogData, private dialogService:DialogService) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialogService.openDialog(this.data);
  }

}

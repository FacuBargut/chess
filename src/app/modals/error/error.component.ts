import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';



@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  error: String;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {error: string}) { }

  ngOnInit(): void {
    this.error = this.data.error;
  }

}

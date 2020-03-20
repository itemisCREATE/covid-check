import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTestComponent } from '../dialogs/create-test/create-test.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  createTest() {
    const dialogRef = this.dialog.open(CreateTestComponent, {
      data: 'data'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        //TODO:
        console.log('result');
      }
    });
  }
}

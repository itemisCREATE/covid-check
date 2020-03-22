import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTestComponent } from '../dialogs/create-test/create-test.component';
import { MatTableDataSource } from '@angular/material/table';
import { PatientService } from '../service/patient.service';
import { Examination } from '../model/model';

@Component({
  selector: 'app-examination-list',
  templateUrl: './examination-list.component.html',
  styleUrls: ['./examination-list.component.css']
})
export class ExaminationListComponent implements OnInit {

  dataSource = new MatTableDataSource();

  displayedColumns: string[] = ['fileNumber', 'date', 'status'];

  constructor(private dialog: MatDialog, private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.patients.subscribe({
      next: (patientList) => this.dataSource.data = patientList,
      error: (error) => console.log(error)
    });
  }

  dateNullSafe(p: Examination) {
    if (p.date != null) {
      return p.date.toDate();
    } else {
      return null;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  createTest() {
    const dialogRef = this.dialog.open(CreateTestComponent, {
      data: 'data'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('result');
      }
    });
  }
}

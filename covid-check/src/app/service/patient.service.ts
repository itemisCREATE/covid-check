import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import { Patient } from '../model/model';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private patientCollection: AngularFirestoreCollection<Patient>;
  patients: Observable<Patient[]>;

  constructor(private afs: AngularFirestore) {
    this.patientCollection = afs.collection<Patient>('patient');
    this.patients = this.patientCollection.snapshotChanges().pipe(map(patient => {
      return patient.map(a => {
        const data = a.payload.doc.data() as Patient;
        const id = a.payload.doc.id;
        data.id = id;
        return data;
      });
    }))
  }

  addItem(patient: Patient) {
    this.patientCollection.add(patient);
  }
  update(patient: Patient) {
    const patientDoc = this.afs.collection<Patient>('patient/').doc(patient.id);
    patientDoc.update(patient);
  }

  delete(patient: Patient) {
    const patientDoc = this.afs.collection<Patient>('patient/').doc(patient.id);
    patientDoc.delete();
  }

  patientObservable(patient: Patient): Observable<Patient> {
    const patientDoc = this.afs.collection<Patient>('patient/').doc(patient.id);
    return patientDoc.snapshotChanges().pipe(map(actions => actions.payload.data() as Patient));
  }
}

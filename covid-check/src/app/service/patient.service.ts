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

  private itemsCollection: AngularFirestoreCollection<Patient>;
  patients: Observable<Patient[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Patient>('patient');
    this.patients = this.itemsCollection.snapshotChanges().pipe(map(patient => {
      return patient.map(a => {
        const data = a.payload.doc.data() as Patient;
        const id = a.payload.doc.id;
        data.id = id;
        return data;
      });
    }))
  }

  addItem(item: Patient) {
    this.itemsCollection.add(item);
  }
  update(item: Patient) {
    const itemDoc = this.afs.collection<Patient>('patient/').doc(item.id);
    console.log("Update " + item.firstname);
    itemDoc.update(item);
  }
}

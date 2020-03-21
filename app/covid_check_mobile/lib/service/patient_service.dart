import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:covidcheckmobile/model/patient.dart';
import 'package:firebase_auth/firebase_auth.dart';

class PatientService {

//  FUture<List<Patient>> _getPatientStream(String useruid) async* {
//    var snapshots = Firestore.instance.collection('patient').where('useruid', isEqualTo: useruid).snapshots();
//    if(await snapshots.isEmpty){
//      yield [];
//    }
//    await for (QuerySnapshot sn in snapshots) {
//      yield sn.documents.map<Patient>((doc) => Patient.fromDocument(doc)).toList();
//    }
//  }

  Future<Patient> getPatient(String useruid) async {
    var snapshots =  Firestore.instance.collection('patient').where('useruid', isEqualTo: useruid).snapshots();
    if(await snapshots.isEmpty){
      return null;
    }
    var docs = (await snapshots.first).documents;
    if(docs.isEmpty){
      return null;
    }
    return Patient.fromDocument(docs.first);
  }

  void submitPatient(Patient patient, FirebaseUser user){
    Firestore.instance.collection('patient').add(patient.toMap(user.uid));
  }
}

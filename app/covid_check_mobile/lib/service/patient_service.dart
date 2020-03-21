import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:covidcheckmobile/model/patient.dart';

class PatientService {
  Stream<List<Patient>> _getPatientStream() async* {
    var snapshots = Firestore.instance.collection('patient').snapshots();
    await for (QuerySnapshot sn in snapshots) {
      yield sn.documents.map<Patient>((doc) => Patient.fromDocument(doc)).toList();
    }
  }

  Stream<Patient> getPatient() async* {
    List<Patient> patients = await _getPatientStream().first;
    for (Patient p in patients){
      yield p;
    }
  }

  void submitPatient(Patient patient){
    Firestore.instance.collection('patient').add(patient.toMap());
  }

}

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:covidcheckmobile/model/patient.dart';

class PatientService {
  Stream<List<Patient>> _getPatientStream() async* {
    var snapshots = Firestore.instance.collection('patient').snapshots();
    await for (QuerySnapshot sn in snapshots) {
      yield sn.documents.map<Patient>((p) => Patient.fromDocument(p));
    }
  }

  Future<Patient> getPatient() async {
    List<Patient> patients = await _getPatientStream().first;
    return patients.first;
  }
}

import 'package:cloud_firestore/cloud_firestore.dart';

class Patient {
  String id;
  String filenumber;
  String firstname;
  String lastname;
  Timestamp dateofbirth;
  String address;
  String zip;
  String city;
  Gender gender;
  List<Examination> examinations;
  Appointment appointment;
  bool needsTesting = true;

  Patient(
      {
        this.id,
        this.filenumber,
      this.firstname,
      this.lastname,
      this.address,
      this.zip,
      this.city,
      this.gender,
      this.examinations,
      this.dateofbirth,
      this.needsTesting=false});

  factory Patient.fromDocument(DocumentSnapshot doc) {
    print(doc.toString());
    return Patient(
        id: doc.documentID,

        firstname: doc['firstname'].toString(),
        lastname: doc['lastname'].toString(),
        dateofbirth: doc['dateofbirth'],
        address: doc['address'],
        zip: doc['zip'],
        city: doc['city'],
        gender: _genderForIndex(doc['gender']),
        needsTesting: _needsTesting(doc['needsTesting']),
        examinations: doc['examinations']);
  }

  Map<String, dynamic> toMap(String userUID) {
    return {
      'useruid': userUID,
      'firstname': this.firstname,
      'lastname': this.lastname,
      'dateofbirth': this.dateofbirth,
      'address': this.address,
      'zip': this.zip,
      'city': this.city,
      'gender': this.gender,
      'needsTesting': this.needsTesting,
    };
  }
}

Gender _genderForIndex(int index) {
  if (index == null) {
    return null;
  }
  return Gender.values[index];
}

bool _needsTesting(bool needsTesting) {
  if (needsTesting == null) {
    return false;
  }
  return needsTesting;
}

enum Gender { m, f, d }

class Examination {
  Timestamp date;
  String filenumber;
  int status;
}

class Appointment {
  Timestamp time;
  String room;
  String address;
  String zip;
  String city;
}

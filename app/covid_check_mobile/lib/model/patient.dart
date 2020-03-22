import 'package:cloud_firestore/cloud_firestore.dart';

class Patient {
  String id;
  String filenumber;
  String firstname;
  String lastname;
  Timestamp dateofbirth;
  String street;
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
        this.dateofbirth,
      this.street,
      this.zip,
      this.city,
      this.gender,
      this.examinations,
      this.appointment,
      this.needsTesting=false});

  factory Patient.fromDocument(DocumentSnapshot doc) {
    print(doc.toString());
    return Patient(
        id: doc.documentID,
        filenumber:  doc['filenumber'].toString(),
        firstname: doc['firstname'].toString(),
        lastname: doc['lastname'].toString(),
        dateofbirth: doc['dateofbirth'],
        street: doc['street'],
        zip: doc['zip'],
        city: doc['city'],
        gender: _genderForIndex(doc['gender']),
        needsTesting: _needsTesting(doc['needsTesting']),
        appointment: doc['appointment'],
        examinations: doc['examinations']);
  }

  Map<String, dynamic> toMap(String userUID) {
    return {
      'useruid': userUID,
      'firstname': this.firstname,
      'lastname': this.lastname,
      'dateofbirth': this.dateofbirth,
      'address': this.street,
      'zip': this.zip,
      'city': this.city,
      'gender': this.gender,
      'filenumber' : this.filenumber,
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

  Examination({
    this.date,
    this.filenumber,
    this.status,
  });

  factory Examination.fromDocument(DocumentSnapshot doc) {
    print(doc.toString());
    return Examination(
        filenumber:  doc['filenumber'].toString(),
        date: doc['date'],
        status: doc['status']
    );
  }

}

class Appointment {
  Timestamp date;
  String org;
  String room;
  String street;
  String zip;
  String city;

  Appointment({
    this.date,
    this.org,
    this.room,
    this.street,
    this.zip,
    this.city,
  });

  factory Appointment.fromDocument(DocumentSnapshot doc) {
    return Appointment(
        date: doc['date'],
        org: doc['org'],
        room: doc['room'],
        street: doc['street'],
        zip: doc['zip'],
        city: doc['city']
    );
  }
}

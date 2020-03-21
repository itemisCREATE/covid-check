import 'package:cloud_firestore/cloud_firestore.dart';

class Patient {
   String id;
   String fileNumber;
   String firstName;
   String lastName;
   Timestamp dateOfBirth;
   String address;
   String zip;
   String city;
   Gender gender;
   List<Examination> examinations;

  Patient(
      {this.id,
      this.fileNumber,
      this.firstName,
      this.lastName,
      this.address,
      this.zip,
      this.city,
      this.gender,
      this.examinations,
      this.dateOfBirth});

  factory Patient.fromDocument(DocumentSnapshot snap) {
    return Patient(
      id: snap.documentID,
      fileNumber: snap['fileNumber'],
      firstName: snap['firstName'],
      lastName: snap['lastName'],
      dateOfBirth: snap['dateOfBirth'],
      address: snap['address'],
      zip: snap['zip'],
      city: snap['city'],
      gender: snap['gender'],
      examinations: snap['examinations']
    );
  }
}

enum Gender { m, f, d }

class Examination {}

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

  Patient(
      {this.id,
      this.filenumber,
      this.firstname,
      this.lastname,
      this.address,
      this.zip,
      this.city,
      this.gender,
      this.examinations,
      this.dateofbirth}
   );

  factory Patient.fromDocument(DocumentSnapshot doc) {
    print(doc.toString());
    return Patient(
      id: doc.documentID,
        filenumber: doc['filenumber'].toString(),
        firstname: doc['firstname'].toString(),
        lastname: doc['lastname'].toString(),
        dateofbirth: doc['dateofbirth'],
      address: doc['address'],
      zip: doc['zip'],
      city: doc['city'],
      gender: Gender.values[doc['gender']],
      examinations: doc['examinations']
    );
  }

  Map<String, dynamic> toMap(){
    return {
      'firstname': this.firstname,
      'lastname': this.lastname,
      'dateofbirth': this.dateofbirth,
      'address': this.address,
      'zip': this.zip,
      'city': this.city,
      'gender': this.gender,
    };
  }
}

Gender _genderForIndex(int index){
  return Gender.values[index];
}

enum Gender { m, f, d }

class Examination {}

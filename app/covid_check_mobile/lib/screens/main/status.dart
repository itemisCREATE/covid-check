import 'package:covidcheckmobile/model/patient.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class Status extends StatelessWidget {
  final FirebaseUser user;
  final Patient patient;

  Status(this.user, this.patient);

  @override
  Widget build(BuildContext context) {
    return Center(child: Text("TODO"),);
  }

}
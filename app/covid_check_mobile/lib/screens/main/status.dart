import 'package:covidcheckmobile/model/patient.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class Status extends StatelessWidget {

  Status(FirebaseUser user, Patient patient);

  @override
  Widget build(BuildContext context) {
    return Center(child: Text("TODO"),);
  }

}
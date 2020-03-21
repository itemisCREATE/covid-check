import 'package:covidcheckmobile/model/patient.dart';
import 'package:covidcheckmobile/screens/main/status.dart';
import 'package:covidcheckmobile/screens/wizard/wizard.dart';
import 'package:covidcheckmobile/service/patient_service.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class Dashboard extends StatefulWidget {
  final FirebaseUser user;

  Dashboard(this.user);

  @override
  DashboardState createState() => DashboardState(this.user);
}

class DashboardState extends State<Dashboard> {
  final PatientService service = PatientService();
  final FirebaseUser user;

  DashboardState(this.user);

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
        future: service.getPatient(user.uid),
        builder: (context, snapshot) {
           if(snapshot.hasError){
             return Wizard(this.user);
           }
           return snapshot.hasData ? Wizard(this.user) : Center(child:CircularProgressIndicator());
        }
    );
  }
}
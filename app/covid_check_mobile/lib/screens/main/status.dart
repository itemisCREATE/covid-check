import 'package:covidcheckmobile/model/patient.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class Status extends StatelessWidget {
  final FirebaseUser user;
  final Patient patient;

  Status(this.user, this.patient);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Übersicht"),
      ),
      body: Column(
        children: <Widget>[
          Card(
              child: Container(
            height: 150,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: <Widget>[
                ListTile(
                  leading: Icon(Icons.calendar_today, size: 50),
                  title: Text('Termin'),
                  subtitle: Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: <Widget>[
                      SizedBox(height: 10.0),
                      Row(
                        children: <Widget>[
                          const Text('19.03.20 '),
                          const Text('8:00 Uhr'),
                        ],
                      ),
                      SizedBox(height: 10.0),
                      Row(
                        children: <Widget>[
                          const Text('Raum 42.42'),
                        ],
                      ),
                      Row(
                        children: <Widget>[
                          const Text('Gesundheitsamt DO'),
                        ],
                      ),
                      Row(
                        children: <Widget>[
                          const Text('Hoher Wall 9-11')
                        ],
                      ),
                      Row(
                        children: <Widget>[
                          const Text('44137 Dortmund')
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ),
          )),
          Card(
              child: Container(
            height: 250,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: <Widget>[
                ListTile(
                  leading: Icon(Icons.info, size: 50),
                  title: Text('Handlungsempfehlung'),
                  subtitle: Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: <Widget>[
                      Row(
                        children: <Widget>[
                          const Text('19.03.20 '),
                          const Text('8:00'),
                        ],
                      ),
                      Row(
                        children: <Widget>[
                          const Text('Gesundheitsamt DO'),
                          const Text('An der Ecke 13'),
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ),
          )),
          Card(
              child: Container(
            height: 150,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: <Widget>[
                ListTile(
                  leading: Icon(Icons.person, size: 50),
                  title: Text('Persönliche Daten'),
                  subtitle: Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: <Widget>[
                      SizedBox(height: 10.0),
                      Row(
                        children: <Widget>[
                          Text("${patient.firstname} ${patient.lastname}"),
                        ],
                      ),
                      Row(
                        children: <Widget>[
                          Text("${_genderText(patient.gender)}"),
                        ],
                      ),
                      SizedBox(height: 5.0),
                      Row(
                        children: <Widget>[
                          Text("${patient.street}"),
                        ],
                      ),
                      Row(
                        children: <Widget>[
                          Text("${patient.zip} ${patient.city}"),
                        ],
                      ),
                      SizedBox(height: 10.0),
                    ],
                  ),
                ),
              ],
            ),
          )),
        ],
      ),
    );
  }

  String _genderText(Gender gender) {
    switch (gender) {
      case Gender.m:
        return "männlich";
      case Gender.f:
        return "weiblich";
      default:
        return "divers";
    }
  }
}

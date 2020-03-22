import 'package:covidcheckmobile/model/patient.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class TestStatus extends StatelessWidget {
  final FirebaseUser user;
  final Patient patient;

  DateTime _date;

  TestStatus(this.user, this.patient);

  @override
  Widget build(BuildContext context) {
        return Scaffold(
      appBar: new AppBar(
        title: Text("Ihr persönlicher Test Status")),
      body: Stepper(
        steps: _statusSteps(),
        currentStep: 1,
      )
    );
  }
    List<Step> _statusSteps() {
      
    // TODO: get from DB / Server
    List<DateTime> dates = [
      DateTime.now().add(Duration(days:2)),
    ];

    return [
      Step(
        title: Text("Termin Anfrage"),
        subtitle: Text("Ihre Daten wurden erfolgreich übermittelt."),
        isActive: true,
        state: StepState.complete,
        content: Text("Ihre Daten wurden erfolgreich übermittelt.")
      ),
      Step(
        title: Text("Termin Auswahl"),
        isActive: true,
        state: StepState.editing,
        content: Column(
          children: <Widget>[
            Text("Bitte wählen Sie einen der folgenden Termine"),
            Column(
              children: <Widget>[
                Row(
                  children: <Widget>[
                    Radio(
                      value: DateTime.now().add(Duration(days:2)),
                      groupValue: this._date, 
                      onChanged: (DateTime value) => this._date = value,
                    ),
                    Text(DateTime.now().add(Duration(days:2)).toIso8601String())
                  ],
                ),
                Row(
                  children: <Widget>[
                    Radio(
                      value: DateTime.now().add(Duration(days:4)),
                      groupValue: this._date, 
                      onChanged: (DateTime value) => this._date = value,
                    ),
                    Text(DateTime.now().add(Duration(days:2)).toIso8601String())
                  ],
                ),
              ],
            )
          ],
        )
      ),
      Step(
        title: Text("Test Ergebnis"),
        isActive: false,
        state: StepState.indexed,
        content: Text("Das Testergebnis steht noch aus. Es wird in vorraussichtlich 2 Tagen feststehen. Wir werden Sie darüber informieren.")
      )
    ];
  }


}

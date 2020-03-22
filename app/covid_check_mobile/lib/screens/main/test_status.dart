import 'package:covidcheckmobile/model/patient.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class TestStatus extends StatefulWidget {
  final FirebaseUser user;
  final Patient patient;

  TestStatus(this.user, this.patient);

  @override
  _TestStatusState createState() => _TestStatusState();
}

class _TestStatusState extends State<TestStatus> {

  // TODO: get from DB / Server
  static final List<DateTime> _dates = [
    DateTime.now().add(Duration(days: 2)),
    DateTime.now().add(Duration(days: 2, hours: 3)),
    DateTime.now().add(Duration(days: 4, hours: -1)),
  ];

  // the state of the stepper
  int currentStep = 1;
  DateTime _date;

  List<Step> getSteps() {
  return [
      Step(
          title: Text("Termin Anfrage"),
          subtitle: Text("Ihre Daten wurden erfolgreich übermittelt."),
          isActive: currentStep >= 0,
          state: currentStep >= 0 ? StepState.complete : StepState.indexed,
          content: Text("Ihre Daten wurden erfolgreich übermittelt.")),
      Step(
          title: Text("Termin Auswahl"),
          isActive: currentStep >= 1,
          state: currentStep >= 1 ? StepState.complete : StepState.indexed,
          subtitle: this._date != null ? Text(_formatDate(this._date)) : null,
          content: Column(
            children: <Widget>[
              Text("Bitte wählen Sie einen der folgenden Termine"),
              Column(
                children: <Widget>[
                  Row(
                    children: <Widget>[
                      Radio(
                        value: _dates[0],
                        groupValue: this._date,
                        onChanged: (DateTime value) => setState(()=>this._date = value),
                      ),
                      Text(_formatDate(_dates[0]))
                    ],
                  ),
                  Row(
                    children: <Widget>[
                      Radio(
                        value: _dates[1],
                        groupValue: this._date,
                        onChanged: (DateTime value) => setState(()=>this._date = value),
                      ),
                      Text(_formatDate(_dates[1]))
                    ],
                  ),
                  Row(
                    children: <Widget>[
                      Radio(
                        value: _dates[2],
                        groupValue: this._date,
                        onChanged: (DateTime value) => setState(()=>this._date = value),
                      ),
                      Text(_formatDate(_dates[2]))
                    ],
                  ),
                ],
              )
            ],
          )),
      Step(
          title: Text("Test Ergebnis"),
          isActive: currentStep >= 2,
          state: StepState.indexed,
          content: Text(
              "Das Testergebnis steht noch aus. Es wird in vorraussichtlich 2 Tagen feststehen. Wir werden Sie darüber informieren."))
    ];
  }
  @override
  Widget build(BuildContext context) {
    List<Step> _steps = getSteps();

    return Scaffold(
        appBar: new AppBar(title: Text("Ihr persönlicher Test Status")),
        body: Stepper(
          steps: getSteps(),
          currentStep: this.currentStep,
          onStepContinue: nextStep,
          onStepTapped: showStep,
          controlsBuilder: (BuildContext context, {VoidCallback onStepContinue, VoidCallback onStepCancel}) {
            if (currentStep == 1) {
              return RaisedButton.icon(
                icon: Icon(Icons.calendar_today),
                color: Theme.of(context).accentColor,
                label: Text("Termin bestätigen"),
                onPressed: onStepContinue
              );
            }
            return SizedBox(height: 20.0);
          }
        )
      );
  }

  void nextStep() {
    setState(() {
      if (getSteps().length > currentStep+1) {
        currentStep = currentStep+=1;
      }
    });
  }

  void showStep(int index) {
    setState(() {
      currentStep = index;
    });
  }

  static String _formatDate(DateTime date) {
    return "Am " +
        date.day.toString() +
        "." +
        date.month.toString() +
        "." +
        date.year.toString() +
        " um " +
        date.hour.toString() +
        ":" +
        date.minute.toString() +
        " Uhr";
  }
}

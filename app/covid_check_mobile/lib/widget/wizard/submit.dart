import 'package:flutter/material.dart';

import 'title.dart';

class SubmitForm extends StatefulWidget {

  final PageController controller;
  final int index;

  SubmitForm(this.index, this.controller);

  @override
  State<StatefulWidget> createState() {
    return SubmitFormState(this.index, this.controller);
  }
}

class SubmitFormState extends State<SubmitForm>{
  PageController controller;
  final int index;

  String email;
  String phone;

  SubmitFormState(this.index, this.controller);

  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
        shrinkWrap: true,
        children: <Widget>[
          Container(
              padding: EdgeInsets.all(30),
              child: Form(
                  key: _formKey,
                  child: Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: <Widget>[
                        FormTitle("Übermitteln Sie ihre Daten um Terminvorschläge zu erhalten", index),
                        SizedBox(height: 20.0),
                        Column(
                          children: <Widget>[
                            Row(children: <Widget>[
                              Text("Herr Bla Blubb")
                            ],),
                            Row(children: <Widget>[
                              Text("Wohnhaft in Buxtehude")
                            ],),
                            Row(children: <Widget>[
                              Text("Email: "),
                              Text("abc@de.com")
                            ],),
                            Row(children: <Widget>[
                              Text("Telefon: "),
                              Text("123 456 789")
                            ],),
                            Row(children: <Widget>[
                              Text("Spezifische Beschwerden: "),
                              Text("Ja")
                            ],),
                            Row(children: <Widget>[
                              Text("Kontakt mit potenziell infizierten Personen"),
                              Text("Nein")
                            ],),
                            Row(children: <Widget>[
                              Text("Aus Risikogebiet kommend: "),
                              Text("Ja")
                            ],)
                          ],
                        ),
                        SizedBox(height: 20.0),
                        RaisedButton.icon(
                          color: Theme.of(context).accentColor,
                          onPressed: submitData,
                          icon: Icon(Icons.send),
                          label: Text("Daten übermitteln"),
                        )
                      ]
                  )
              )
          )
        ],
      ),
    );
  }

  void submitData() {
    // Submit data to firebase DB
  }
}
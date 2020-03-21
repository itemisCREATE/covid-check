import 'package:flutter/material.dart';

import 'title.dart';

class NameForm extends StatefulWidget {

  final PageController controller;

  NameForm(this.controller);

  @override
  State<StatefulWidget> createState() {
    return NameFormState(this.controller);
  }
}

class NameFormState extends State<NameForm>{
  PageController controller;

  String title;
  String surname;
  String lastname;

  NameFormState(this.controller);

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
                        FormTitle("Anrede und Name", 0),
                        SizedBox(height: 20.0),
                        TextFormField(
                            onSaved: (value) => title = value,
                            keyboardType: TextInputType.text,
                            decoration:
                            InputDecoration(labelText: "Anrede")),
                        SizedBox(height: 20.0),
                        TextFormField(
                            onSaved: (value) => surname = value,
                            decoration:
                            InputDecoration(labelText: "Vorname")),
                        SizedBox(height: 20.0),
                        TextFormField(
                            onSaved: (value) => lastname = value,
                            decoration:
                            InputDecoration(labelText: "Nachname")),
                        SizedBox(height: 20.0),
                      ]
                  )
              )
          )
        ],
      ),
    );
  }}
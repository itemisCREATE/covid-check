import 'package:flutter/material.dart';

import 'title.dart';

class ContactForm extends StatefulWidget {

  final PageController controller;
  final int index;

  ContactForm(this.index, this.controller);

  @override
  State<StatefulWidget> createState() {
    return ContactFormState(this.index, this.controller);
  }
}

class ContactFormState extends State<ContactForm>{
  PageController controller;
  final int index;

  String email;
  String phone;

  ContactFormState(this.index, this.controller);

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
                        FormTitle("Bitte geben Sie ihre E-Mail und Telefonnummer an damit wir Sie kontaktieren können", index),
                        SizedBox(height: 20.0),
                        TextFormField(
                            onSaved: (value) => email = value,
                            keyboardType: TextInputType.text,
                            decoration:
                            InputDecoration(labelText: "Email")),
                        SizedBox(height: 20.0),
                        TextFormField(
                            onSaved: (value) => phone = value,
                            decoration:
                            InputDecoration(labelText: "Telefonnummer")),
                        SizedBox(height: 20.0),
                      ]
                  )
              )
          )
        ],
      ),
    );
  }}
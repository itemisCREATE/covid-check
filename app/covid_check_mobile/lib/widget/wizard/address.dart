import 'package:covidcheckmobile/widget/wizard/title.dart';
import 'package:flutter/material.dart';

class AddressForm extends StatefulWidget {
  final PageController controller;

  AddressForm(this.controller);

  @override
  State<StatefulWidget> createState() {
    return AddressFormState(this.controller);
  }
}

class AddressFormState extends State<AddressForm> {
  final PageController controller;

  String address = '';
  String postcode = '';
  String city = '';

  AddressFormState(this.controller);

  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
            children: <Widget>[
              Container(
                  padding: EdgeInsets.all(30),
                  child: Form(
                      key: _formKey,
                      child: Column(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: <Widget>[
                            FormTitle("Anschrift", 1),
                            SizedBox(height: 20.0),
                            TextFormField(
                                onSaved: (value) => address = value,
                                keyboardType: TextInputType.text,
                                decoration:
                                    InputDecoration(labelText: "Addresse")),
                            SizedBox(height: 20.0),
                            TextFormField(
                                onSaved: (value) => postcode = value,
                                decoration:
                                    InputDecoration(labelText: "Postleitzahl")),
                            SizedBox(height: 20.0),
                            TextFormField(
                                onSaved: (value) => city = value,
                                decoration:
                                    InputDecoration(labelText: "Stadt")),
                            SizedBox(height: 20.0),
                          ]
                      )
                  )
              )
            ],
          ),
    );
  }
}

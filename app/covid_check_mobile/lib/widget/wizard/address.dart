import 'package:covidcheckmobile/widget/wizard/title.dart';
import 'package:flutter/material.dart';

import '../../screens/wizard/wizard.dart';

class AddressForm extends StatefulWidget {
  final PageController controller;
  final int index;

  AddressForm(this.index, this.controller);

  @override
  State<StatefulWidget> createState() {
    return AddressFormState(this.index, this.controller);
  }
}

class AddressFormState extends State<AddressForm> {
  final PageController controller;
  final int index;

  AddressFormState(this.index, this.controller);

  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    final patient = Wizard.of(context).patient;

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
                    FormTitle("Anschrift", index),
                    SizedBox(height: 20.0),
                    TextFormField(
                        onChanged: (value) => patient.address = value,
                        keyboardType: TextInputType.text,
                        decoration:
                            InputDecoration(labelText: "Addresse")),
                    SizedBox(height: 20.0),
                    TextFormField(
                        onSaved: (value) => patient.zip = value,
                        decoration:
                            InputDecoration(labelText: "Postleitzahl")),
                    SizedBox(height: 20.0),
                    TextFormField(
                        onSaved: (value) => patient.city = value,
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

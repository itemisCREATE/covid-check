import 'package:covidcheckmobile/widget/wizard/address.dart';
import 'package:covidcheckmobile/widget/wizard/frage.dart';
import 'package:covidcheckmobile/widget/wizard/name.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class Wizard extends StatelessWidget {
 final FirebaseUser user;

 PageController controller = PageController(
     initialPage: 0
 );
 Wizard(this.user);

  @override
  Widget build(BuildContext context) {
    return PageView(
      controller: this.controller,
      scrollDirection: Axis.vertical,
      children: <Widget>[
        NameForm(this.controller),
        AddressForm(this.controller),
        Question(2, "Noch ein paar Fragen", this.controller),
      ],
    );;
  }

}
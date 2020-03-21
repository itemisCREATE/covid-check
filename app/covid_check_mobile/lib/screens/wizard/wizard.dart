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
        Question(2, "Haben Sie aktuell folgende Beschwerden: Husten, Fieber, Atemnot, sonstige Erkältungssymptome?", this.controller),
        Question(3, "Hatten Sie Kontakt mit einer Person, bei der eine Coronavirus-Infektion festgestellt oder vermutet wurde (bis maximal 14 Tage vor Erkrankungsbeginn)?", this.controller),
        Question(4, "Waren Sie in den letzten 14 Tagen in einem Risikogebiet wie zum Beispiel China, Südkorea, dem Iran, Italien oder Frankreich (bis maximal 14 Tage vor Erkrankungsbeginn)?", this.controller),
      ],
    );;
  }

}
import 'package:covidcheckmobile/widget/wizard/address.dart';
import 'package:covidcheckmobile/widget/wizard/frage.dart';
import 'package:covidcheckmobile/widget/wizard/name.dart';
import 'package:covidcheckmobile/widget/wizard/contact.dart';
import 'package:covidcheckmobile/widget/wizard/submit.dart';
import 'package:covidcheckmobile/model/patient.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class Wizard extends InheritedWidget {
  final FirebaseUser user;
  final Patient patient = new Patient();

  PageController controller = PageController(initialPage: 0);
  
  Wizard(this.user) : super(child: _pageView);

  static final _pageController = PageController(initialPage: 0);
  static final _pageView = PageView(
      controller: _pageController,
      scrollDirection: Axis.vertical,
      children: <Widget>[
        NameForm(0, _pageController),
        AddressForm(1, _pageController),
        Question(2, _pageController),
        ContactForm(3, _pageController),
        SubmitForm(4, _pageController)
      ],
    );

  static Wizard of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType();
  }

  @override
  bool updateShouldNotify(InheritedWidget oldWidget) => true;
}

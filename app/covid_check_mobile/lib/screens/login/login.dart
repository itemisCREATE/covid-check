import 'package:covidcheckmobile/widget/login/email.dart';
import 'package:covidcheckmobile/widget/login/google.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_auth_buttons/flutter_auth_buttons.dart';

class LoginScreen extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => LoginScreenState();
}
class LoginScreenState extends State<LoginScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('CovidCheck Login'),
          actions: <Widget>[],
        ),
        body: SingleChildScrollView(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: <Widget>[
                Column(
                  children: <Widget>[
                    EmailLogin(),
                    SizedBox(height: 40),
                    GoogleLogin(),
                    SizedBox(height: 30),
                    FacebookSignInButton(onPressed: () {
                      // call authentication logic
                    }),
                  ],
                )
              ],
            )));
  }
}
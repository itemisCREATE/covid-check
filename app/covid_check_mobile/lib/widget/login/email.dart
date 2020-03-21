import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:provider/provider.dart';
import 'package:covidcheckmobile/widget/auth.dart';

class EmailLogin extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return EmailLoginState();
  }
}
class EmailLoginState extends State<EmailLogin> {
  final _formKey = GlobalKey<FormState>();
  String _password;
  String _email;
  @override
  Widget build(BuildContext context) {
    return Container(
        margin: EdgeInsets.all(30),
        child: Form(
            key: _formKey,
            child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: <Widget>[
                  SizedBox(height: 20.0),
                  Text(
                    'Login Information',
                    style: TextStyle(fontSize: 20),
                  ),
                  SizedBox(height: 20.0),
                  TextFormField(
                      onSaved: (value) => _email = value,
                      keyboardType: TextInputType.emailAddress,
                      decoration: InputDecoration(labelText: "Email Address")),
                  TextFormField(
                      onSaved: (value) => _password = value,
                      obscureText: true,
                      decoration: InputDecoration(labelText: "Password")),
                  SizedBox(height: 20.0),
                  Wrap(
                    crossAxisAlignment: WrapCrossAlignment.center,
                    spacing: 60,
                    children: <Widget>[
                      RaisedButton(
                        child: Text("REGISTER"),
                        color: Colors.transparent,
                        onPressed: _onRegistration,
                      ),
                      RaisedButton(child: Text("LOGIN"), onPressed: _onSubmit),
                    ],
                  )
                ])));
  }
  Future _onRegistration() async {
    return _buildErrorDialog(context, "Not implemented");
  }
  Future _onSubmit() async {
    final form = _formKey.currentState;
    form.save();
    // Validate will return true if is valid, or false if invalid.
    if (form.validate()) {
      try {
        FirebaseUser result =
        await Provider.of<Authentication>(context, listen: false)
            .loginUser(email: _email, password: _password);
        print(result);
      } on AuthException catch (error) {
        return _buildErrorDialog(context, error.message);
      } on Exception catch (error) {
        return _buildErrorDialog(context, error.toString());
      }
    }
  }
  Future _buildErrorDialog(BuildContext context, _message) {
    return showDialog(
      builder: (context) {
        return AlertDialog(
          title: Text('Error Message'),
          content: Text(_message),
          actions: <Widget>[
            FlatButton(
                child: Text('Cancel'),
                onPressed: () {
                  Navigator.of(context).pop();
                })
          ],
        );
      },
      context: context,
    );
  }
}
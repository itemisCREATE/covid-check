import 'package:flutter/cupertino.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_auth_buttons/flutter_auth_buttons.dart';
import 'package:provider/provider.dart';
import 'package:covidcheckmobile/widget/auth.dart';

class GoogleLogin extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => GoogleLoginState();
}
class GoogleLoginState extends State<GoogleLogin> {
  FirebaseUser user;
  @override
  Widget build(BuildContext context) {
    return Container(
      child: GoogleSignInButton(
        onPressed: () {
          _signInWithGoogle().then((value) => setState(()=> this.user = value));
          Navigator.of(context).pop();
        },
      ),
    );
  }
  Future<FirebaseUser> _signInWithGoogle() async {
    try {
      return await Provider.of<Authentication>(context, listen: false).loginWithGoogle();
    } on AuthException catch (error) {
      return _buildErrorDialog(context, error.message);
    } on Exception catch (error) {
      return _buildErrorDialog(context, error.toString());
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
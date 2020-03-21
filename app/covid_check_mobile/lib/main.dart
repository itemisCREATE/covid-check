import 'package:covidcheckmobile/screens/wizard/wizard.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:covidcheckmobile/widget/auth.dart';
import 'package:covidcheckmobile/screens/login/login.dart';

void main() => runApp(
    ChangeNotifierProvider<Authentication>(
      child: CovidCheck(),
      create: (BuildContext context) {
        return Authentication();
      },
    )
);

class CovidCheck extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'CovidCheck',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
      ),
      home: CovidCheckHome(title: 'CovidCheck'),
    );
  }
}

class CovidCheckHome extends StatefulWidget {
  CovidCheckHome({Key key, this.title}) : super(key: key);
  final String title;
  @override
  _CovidCheckHomeState createState() => _CovidCheckHomeState();
}

class _CovidCheckHomeState extends State<CovidCheckHome> {

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<FirebaseUser>(
     future: Provider.of<Authentication>(context).getUser(),
      builder: (context, AsyncSnapshot<FirebaseUser> snapshot){
       if(snapshot.connectionState == ConnectionState.done){
         if(snapshot.error != null){
           return Text(snapshot.error.toString());
         }
       }
       return snapshot.hasData ?  Wizard(snapshot.data) : LoginScreen();
      },
     );
  }
}

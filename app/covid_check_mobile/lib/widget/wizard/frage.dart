import 'package:flutter/material.dart';

import 'title.dart';

class Question extends StatefulWidget {

  final PageController controller;
  final int index;

  Question(this.index, this.controller);

  @override
  State<StatefulWidget> createState() {
    return QuestionState(this.index, this.controller);
  }
}

class QuestionState extends State<Question>{
  final PageController controller;
  final int index;

  bool symptoms;
  bool contact;
  bool riskarea;

  QuestionState(this.index, this.controller);

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
                        FormTitle("Noch ein paar Fragen", this.index),
                        SizedBox(height: 20.0),
                        Column(
                          children: <Widget>[
                            Column(
                              children: <Widget>[
                                Text("Haben Sie aktuell folgende Beschwerden: Husten, Fieber, Atemnot, sonstige Erkältungssymptome?"),
                                Switch(
                                    activeColor: Theme.of(context).accentColor,
                                    value: false,
                                    onChanged: (newValue){
                                      setState(() {
                                        symptoms = newValue;
                                      });
                                    }
                                )
                              ],
                            ),
                            Column(
                              children: <Widget>[
                                Text("Hatten Sie Kontakt mit einer Person, bei der eine Coronavirus-Infektion festgestellt oder vermutet wurde (bis maximal 14 Tage vor Erkrankungsbeginn)?"),
                                Switch(
                                    activeColor: Theme.of(context).accentColor,
                                    value: false,
                                    onChanged: (newValue){
                                      setState(() {
                                        contact = newValue;
                                      });
                                    }
                                )
                              ],
                            ),
                            Column(
                              children: <Widget>[
                                Text("Waren Sie in den letzten 14 Tagen in einem Risikogebiet wie zum Beispiel China, Südkorea, dem Iran, Italien oder Frankreich (bis maximal 14 Tage vor Erkrankungsbeginn)?"),
                                Switch(
                                      activeColor: Theme.of(context).accentColor,
                                      value: false,
                                      onChanged: (newValue){
                                        setState(() {
                                          riskarea = newValue;
                                        });
                                      }
                                  ),
                              ],
                            ),
                          ],
                        )
                      ]
                  )
              )
          )
        ],
      ),
    );
  }}
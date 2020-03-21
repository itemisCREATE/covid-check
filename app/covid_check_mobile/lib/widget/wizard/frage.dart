import 'package:flutter/material.dart';

import 'title.dart';

class Question extends StatefulWidget {

  final PageController controller;
  final String question;
  final int index;

  Question(this.index, this.question, this.controller);

  @override
  State<StatefulWidget> createState() {
    return QuestionState(this.index, this.question, this.controller);
  }
}

class QuestionState extends State<Question>{
  final PageController controller;
  final int index;
  final String question;
  bool answer;


  QuestionState(this.index, this.question, this.controller);

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
                        FormTitle(this.question, this.index),
                        SizedBox(height: 20.0),
                        Center(
                          child: Switch(
                              activeColor: Colors.red,
                              value: false,
                              onChanged: (newValue){
                                setState(() {
                                  answer = newValue;
                                });
                              }
                          )
                          ,
                        )

                      ]
                  )
              )
          )
        ],
      ),
    );
  }}
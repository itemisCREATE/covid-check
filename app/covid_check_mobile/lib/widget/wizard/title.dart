import 'package:flutter/material.dart';

class FormTitle extends StatelessWidget {
  final String title;
  final int index;
  const FormTitle(this.title, this.index);
  @override
  Widget build(BuildContext context) {
    return Container(
        padding: const EdgeInsets.all(10),
        child: Row(
          children: <Widget>[
            Expanded(child: Text(this.title, style: Theme.of(context).textTheme.title)),
            Column(children: <Widget>[
              index == 0 ? Icon(Icons.lens, color: Colors.grey[100]) : Icon(Icons.lens, color: Colors.grey[500]),
              index == 1 ? Icon(Icons.lens, color: Colors.grey[100]) : Icon(Icons.lens, color: Colors.grey[500]),
              index == 2 ? Icon(Icons.lens, color: Colors.grey[100]) : Icon(Icons.lens, color: Colors.grey[500]),
              index == 3 ? Icon(Icons.lens, color: Colors.grey[100]) : Icon(Icons.lens, color: Colors.grey[500]),
              index == 4 ? Icon(Icons.lens, color: Colors.grey[100]) : Icon(Icons.lens, color: Colors.grey[500]),
            ],crossAxisAlignment: CrossAxisAlignment.end,
            )
          ],
        )
    );
  }
}
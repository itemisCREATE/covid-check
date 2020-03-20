import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: Observable<firebase.User>;
  public userDetails: firebase.User = null;
  private authCredential: firebase.auth.OAuthCredential = null;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
        } else {
          this.userDetails = null;
          this.authCredential = null;
        }
      }
    );
  }

  getAccessToken() {
    return this.authCredential.accessToken;
  }

  signInWithGoogle() {
    return this.firebaseAuth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    ).then(function (result) {
      this.authCredential = result.credential;
    }.bind(this));
  }

  isLoggedIn() {
    return this.userDetails != null;
  }

  getUserId() {
    if (this.isLoggedIn) {
      return this.userDetails.uid;
    }
    return null;
  }

  logout() {
    this.firebaseAuth.signOut()
      .then((res) => this.router.navigate(['/']));
  }

}
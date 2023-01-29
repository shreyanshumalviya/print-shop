import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'print-app';

  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  firebaseConfig = {
    apiKey: 'AIzaSyAm01Yz8lddGriZKvUzc9pezInAC5Q4XFY',
    authDomain: 'file-print.firebaseapp.com',
    projectId: 'file-print',
    storageBucket: 'file-print.appspot.com',
    messagingSenderId: '926486126056',
    appId: '1:926486126056:web:a61903865868cede6f985d',
  };

  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);
}

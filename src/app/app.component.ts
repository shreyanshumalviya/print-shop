import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';

import {
  Storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from '@angular/fire/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'print-app';
  path: any = '';
  constructor(private storage: Storage) {}

  firebaseConfig = {
    apiKey: 'AIzaSyAm01Yz8lddGriZKvUzc9pezInAC5Q4XFY',
    authDomain: 'file-print.firebaseapp.com',
    projectId: 'file-print',
    storageBucket: 'file-print.appspot.com',
    messagingSenderId: '926486126056',
    appId: '1:926486126056:web:a61903865868cede6f985d',
  };

  // app = initializeApp(this.firebaseConfig);

  // While the file names are the same, the references point to different files
  // mountainsRef.name === mountainImagesRef.name;           // true
  // mountainsRef.fullPath === mountainImagesRef.fullPath;   // false

  // name(params: type) {
  //   const file = selectedFile.item(0);
  //   const filePath = `files/${new Date().getTime()}_${file.name}`;
  //   const uploadTask = this.storage.upload(filePath, file);

  //   uploadTask.then(() => {
  //     // Handle successful upload
  //   });
  // }

  uploadImage() {
    console.log(this.path);
    // this.storage.upload('/files' + Math.random() + this.path, this.path);
    const mountainsRef = ref(this.storage, 'mountains.jpg');
    const uploadTask = uploadBytesResumable(mountainsRef, this.path);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );
  }
  upload($event: any) {
    this.path = $event.target.files[0];
  }
}

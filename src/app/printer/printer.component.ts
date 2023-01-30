import { Component } from '@angular/core';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
// import { Storage } from '@angular/fire/storage';
import { environment } from '../../environments/environment';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.css'],
})
export class PrinterComponent {
  // constructor(private storage: Storage) {}
  firebaseConfig = environment.firebase;
  app = initializeApp(this.firebaseConfig);

  download() {
    const storage = getStorage();
    const starsRef = ref(storage, 'mountains.jpg');

    getDownloadURL(starsRef)
      .then((url) => {
        // Insert url into an <img> tag to "download"
        console.log(url);
        window.open(url, '_blank');
      })
      .catch((error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/object-not-found':
            // File doesn't exist
            break;
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;

          // ...

          case 'storage/unknown':
            // Unknown error occurred, inspect the server response
            break;
        }
      });
  }
}

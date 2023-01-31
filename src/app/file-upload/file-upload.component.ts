import { Component } from '@angular/core';
import {
  Storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from '@angular/fire/storage';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent {
  title = 'print-app';
  progress: String | undefined = undefined;
  path: any = '';

  constructor(private storage: Storage) {}

  uploadImage() {
    const mountainsRef = ref(this.storage, 'mountains.jpg');
    const uploadTask = uploadBytesResumable(mountainsRef, this.path);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.progress = 'Uploading!';
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            this.progress = progress + '% uploaded, Upload Paused';
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        this.progress = 'upload Failed!';
      },
      () => {
        this.progress = 'File uploaded, ask to print!';
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { PrinterComponent } from './printer/printer.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
// import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [AppComponent, PrinterComponent, FileUploadComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    // AngularFireStorageModule,
    // AngularFireModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

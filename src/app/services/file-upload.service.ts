import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, finalize } from 'rxjs';
import { FileUpload } from '../shared/models/file-upload';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private basePath = '/uploads';

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  pushFileToStorage(fileUpload: FileUpload): Observable<number> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask
      .snapshotChanges()
      .pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe((downloadURL) => {
            fileUpload.url = downloadURL;
            fileUpload.name = fileUpload.file.name;
            this.saveFileData(fileUpload);
          });
        })
      )
      .subscribe();

    return uploadTask.percentageChanges();
  }

  private saveFileData(fileUpload: FileUpload): void {
    this.firestore.collection(this.basePath).add(fileUpload);
  }

  getFiles(numberItems): AngularFirestoreCollection<FileUpload> {
    return this.firestore.collection(this.basePath, (ref) =>
      ref.limitToLast(numberItems)
    );
  }

  deleteFile(fileUpload: FileUpload): void {
    this.deleteFileFirestore(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch((error) => console.log(error));
  }

  private deleteFileFirestore(key: string): Promise<void> {
    // Create a reference to the Firestore database document for the file
    const docRef = this.firestore.collection(this.basePath).doc(key);

    // Delete the document
    return docRef.delete();
  }

  private deleteFileStorage(name: string): void {
    // Create a reference to the file in Firestore Storage
    const storageRef = this.storage.ref(this.basePath).child(name);

    // Delete the file using the reference
    try {
      storageRef.delete();
    }
    catch (error) {
      console.log(error);
    }
    
  }
}

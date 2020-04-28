import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private firestore: AngularFirestore) {
  }
  getStudents() {
    return this.firestore.collection('students').snapshotChanges();
  }
}

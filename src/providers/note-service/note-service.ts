//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from '../../models/note.model';
import {Storage} from '@ionic/storage';

@Injectable()
export class NoteServiceProvider {
  notes: Note[] = [];
  note : Note;
  constructor(public storage: Storage) {

  }

  saveNote(note: Note){
    // add the now date as a unique number for each note
    note.createDate = Date.now();
    this.notes.push(note);
    // add to the storage
    this.storage.set('notes', this.notes);

  }

  gatAllNotes(){
    return this.storage.get('notes').then(
      (notes) => {
        this.notes = notes == null ? [] : notes;
        return [...this.notes];
      }
    )
  }

  getNote(createDate: number) {
    return this.storage.get('notes').then((notes) => {
      this.note = [...notes].find(r => r.createDate === createDate);
      return this.note;
    })
  }

  deleteNote(createDate: number) {
    this.notes = this.notes.filter((note) =>{
      return note.createDate !== createDate;
    })
    this.storage.set('notes', this.notes);

  }

}

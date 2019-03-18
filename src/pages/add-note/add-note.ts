import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NoteServiceProvider } from '../../providers/note-service/note-service';
import { Note } from '../../models/note.model';
import { FormGroup, Validator, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {
  formGroup: FormGroup;
  note: Note;
  title: string;
  content: string;
  date: Date;
  constructor(public navCtrl: NavController,private noteServiceProvider: NoteServiceProvider) {
      this.formGroup = new FormGroup({
        title: new FormControl,
        content: new FormControl,
        date: new FormControl
      });

    }

  saveNote(note: Note) {
    this.noteServiceProvider.saveNote(note);
    this.navCtrl.pop();
  }




}

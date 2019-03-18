import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddNotePage } from '../add-note/add-note';
import { NoteServiceProvider } from '../../providers/note-service/note-service';
import { Note } from '../../models/note.model';
import { ViewNotePage } from '../view-note/view-note';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private notes: Promise<Note[]>;
  private note :Note;
  constructor(public navCtrl: NavController, private noteServiceProvider:NoteServiceProvider) {

  }

  ionViewWillEnter(){
    this.notes = this.getAllNote();
  }

  addNote(){
    this.navCtrl.push(AddNotePage);
  }
  getAllNote(){
    return this.noteServiceProvider.gatAllNotes();
  }

  getNote(createDate) {
    console.log("from home : ", createDate);
    this.noteServiceProvider.getNote(createDate).then((n) =>{
      this.note = n;
      this.navCtrl.push(ViewNotePage, {note:this.note});
    })

  }

}

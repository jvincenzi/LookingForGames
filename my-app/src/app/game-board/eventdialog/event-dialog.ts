import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CallNodeService } from '../../call-node.service';
import { CommentItem } from '../../Comment';

@Component({
  selector: 'event-dialog',
  templateUrl: './event-dialog.html',
  styleUrls: ['./event-dialog.css']
})


export class eventDialog implements OnInit{
  newComment: CommentItem = new CommentItem();

  _id = new FormControl('');
  Name = new FormControl('');
  Comment = new FormControl('');
  date = new FormControl('');
  

  addRecord(): void {

    this.newComment._id = (new Date().valueOf()).toString();  // fairly safe random number if unlucky and get a duplicate, Mongo will just reject, user can try again
    this.newComment.Name = this.Name.value;
    this.newComment.Comment = this.Name.value;
    this.newComment.Date = this.date.value;

    this.callNodeService.insertComment(this.newComment).subscribe();
  }

  submitCommentForm() {
    //////////////////////////////////
    // Put field verification here. //
    //////////////////////////////////
    
    this.addRecord();
  }

  //constructor(private formBuilder: FormBuilder) { }
  constructor(private callNodeService: CallNodeService) { }

  ngOnInit() { }

}
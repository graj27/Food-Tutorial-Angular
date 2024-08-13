import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit {

  // will send these values where we want to use them
  @Input() visible: boolean = false;
  @Input() notFoundMessage:string="Nothing Found!";
  @Input() resetLinkText: string="Reset";
  @Input() resetLinkRoute: string="/";

  ngOnInit() {
  }
}

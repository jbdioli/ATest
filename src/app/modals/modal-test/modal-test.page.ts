import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-test',
  templateUrl: './modal-test.page.html',
  styleUrls: ['./modal-test.page.scss'],
})
export class ModalTestPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onOpen() {
    console.log('Hello Console');
  }

}

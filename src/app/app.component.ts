import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss']})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'app';
chills: any;
ngOnInit() {
  this.chills = false;
}

  ngAfterViewInit() {
    const audio = new Audio('../assets/ghostadventures.mp3');
    audio.play();

  }
}

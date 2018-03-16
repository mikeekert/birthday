import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss']})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'app';
chills: any;
played: any;
ngOnInit() {
  this.chills = false;
}

  ngAfterViewInit() {
  }
  public play() {
    const audio = new Audio('../assets/ghostadventures.mp3');
    // audio.play();
    this.played = true;
  }
}

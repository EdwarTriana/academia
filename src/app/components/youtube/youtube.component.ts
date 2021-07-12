import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  videos = [
    {
      video: '1BiG9eCYCU0'
    },
    {
      video: 'JjWL-1B8qI8'
    }
  ]
  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      
  }

}

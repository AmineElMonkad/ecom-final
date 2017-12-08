import {Component, Input, OnInit} from '@angular/core';
import {Photo} from "../../../core/models/photo";

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {

  @Input() listPhotos: Array<Photo>;
  @Input() selectedPhoto: Photo;
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(image: Photo) {
    this.selectedPhoto = image;
  }
}

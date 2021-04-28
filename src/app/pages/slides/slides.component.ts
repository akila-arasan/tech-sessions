import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  currentSlideId: number = 1;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      paramMap && (
        this.currentSlideId = Number(paramMap.get('id'))
      )
    })
   }

  ngOnInit(): void {
    console.log('here', this.activatedRoute);
  }

}

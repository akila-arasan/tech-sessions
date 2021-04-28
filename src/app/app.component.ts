import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SystemDesignSession';

  keyMap = {
    previous: 'b',
    next: 'n'
  }

  slideBounds = {
    lower: 1,
    upper: 10
  }

  currentSlideId: number = 1;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.navigateToSlide(1)

  }

  @HostListener('document:keypress', ['$event']) listenToKeyPress(event: KeyboardEvent) {
    console.log('event', event);
    if(event && [this.keyMap.previous, this.keyMap.next].includes(event.key)) {
      this.handleSlideChange(event.key);
    }
  }

  handleSlideChange(key: string) {
    this.activatedRoute.firstChild?.firstChild?.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      console.log('here', id);
      this.currentSlideId = Number(id)
    })
    console.log('handleSlideChange', this.activatedRoute);
    this.changeSlide(this.currentSlideId, key)
  }

  navigateToSlide(id: number) {
    console.log('navigatetoSlide', id);
    this.router.navigate([`/sd-session-docs/${id}`]);
  }

  isOutOfBound(slideId: number, key: string): boolean {
    if(slideId === this.slideBounds.lower && key === this.keyMap.previous) return true;

    if(slideId === this.slideBounds.upper && key === this.keyMap.next) return true;

    return false;
  }

  changeSlide(slideId: number, key: string) {
    if(this.isOutOfBound(slideId, key)) return;
    if(key === this.keyMap.previous) {
      this.navigateToSlide((--slideId));
    }

    if(key === this.keyMap.next) {
      this.navigateToSlide((++slideId))
    }
  }
}

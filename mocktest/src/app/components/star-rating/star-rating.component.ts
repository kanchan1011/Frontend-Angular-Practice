import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css',
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Input() maxStars: number = 5;
  @Output() ratingChange = new EventEmitter<number>();

  stars: boolean[] = [];

  ngOnInit() {
    this.updateStars();
  }
  updateStars() {
    this.stars = Array(this.maxStars)
      .fill(false)
      .map((_, i) => i < this.rating);
  }
  selectRating(index: number) {
    this.rating = index + 1;
    this.updateStars();
    this.ratingChange.emit(this.rating);
  }
}

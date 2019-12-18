import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html', //relative path, pt ca sunt in acelasi loc ca si componenta
    styleUrls: ['./star.component.css']
})


export class StartComponent implements OnChanges {
   @Input() rating: number;  //inca nu am un mod de a lua datele pt rating, am hardcodat
    starWidth: number; // se calculeaza pe baza rating-ului
    //vrem ca width sa se recalculeze de fiecare data cand se schimba rating number 
   @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>() ;



   onClick(): void {
       this.ratingClicked.emit( `The rating ${this.rating} was clicked`) ;
   }
   
    ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
}
}
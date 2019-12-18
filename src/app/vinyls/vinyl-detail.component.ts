import { Component, OnInit } from '@angular/core';
import { IVinyl } from './vinyl';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router'


@Component({
  selector: 'app-vinyl-detail',
  templateUrl: './vinyl-detail.component.html',
  styleUrls: ['./vinyl-detail.component.css']
})
export class VinylDetailComponent implements OnInit {
  pageTitle: string = 'Record Detail';
  vinyl: IVinyl;

 /* player: YT.Player;
  private id: string = 'qDuKsiwS5xw';
 
  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }  */


  
  constructor(private route: ActivatedRoute, 
               private router: Router) //definesc dependintele serviciilor
                                       //sunt variabile, instante ale serviciilor pe care le folosesc in clasa componentei 
  { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.vinyl = {
      "vinylId":id,
      "vinylRecord":"The Universe Smiles Upon You",
      "vinylArtist":"Khruangbin",
      "vinylCategory":"Psychedelic, Funk",
      "releaseDate":"June, 2017",
      "price":23.99,
      "imageURL":"https://img.discogs.com/sXkvzLl39Y-APDFCE2j1FAFfChY=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8149748-1457110415-4454.jpeg.jpg",
      "starRating":3.8
    }   //am hardcodat datele, in mod normal se face cu http
  }
   
  onBack() :void{
    this.router.navigate(['/products']);
  }

}

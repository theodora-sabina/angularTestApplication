import { Component, OnInit } from "@angular/core";
import { IVinyl} from "./vinyl"
import { VinylService } from "./vinyl.service"

@Component ({
    // selector: 'app-vinyls',  nu mai am nevoie de selector, pentru ca am implementat routing
    templateUrl: './vinyl-list.component.html',
    styleUrls: ['./vinyl-list.component.css']
})

export class VinylListComponent implements OnInit {
    pageTitle: string = 'Vinyl Records';
    imageWidth: number = 100;
    imageHeight: number = 70;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listfilter(value: string) {
        this._listFilter = value; //setez lista filtrata de produse
        this.filteredVinyls = this.listFilter ? this.performFilter(this.listFilter) : this.vinyls;
    }
    filteredVinyls: IVinyl[];
    vinyls: IVinyl[] = []; 

constructor (private vinylService: VinylService) {
 //this._listFilter = ' ';
} 
 // pot pune codul pentru a apela serviciul care imi populeaza tabelul in constructor
// dar se face apel catre un backend server sa preiau datele si nu vreau sa execut in constructor

    performFilter(filterBy: string): IVinyl[] {
        filterBy = filterBy.toLocaleLowerCase();  //pentru a putea compara usor valoarea filtrata 
        return this.vinyls.filter((vinyl: IVinyl) =>  //returnez lista de vinyl-uri filtrate
            //folosesc metoda de filtare "filter" de la array, ca sa creez un array nou conform conditiilor din functie 
            //definesc functia de filtrare (=>) 
            //convertesc numele vinyl-ului la lowercase
            //folosesc indexOf ca sa caut filterBy in numele vinyl-ului
            //daca se indeplineste conditia, atunci elementul este adaugat in lista filtrata
            vinyl.vinylRecord.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit() {
        // this.vinyls = this.vinylService.getVinyls(); (modific pentru ca am adaugat abservable si trebuie sa subscriu)
        this.vinylService.getVinyls().subscribe(
            vinyls =>{ this.vinyls = vinyls;  //parametrul metodei subscribe este vinyls (ceea ce returneaza observable), adica un array de vinyls
                                             // apoi se seteaza proprietatea vinyls de pe local cu array-ul de vinyls returnat 
                this.filteredVinyls = this.vinyls; // am mutat asta aici pentru ca 
            },
            error => this.errorMessage = <any>error // cast, transforma eroarea primita in orice tip de date
        );   // a doua functie din subscribe care se executa daca am eroare pe observable 
              // se seteaza variabila locala errorMessage cu eroarea returnata 

            // din cauza ca ngOnInit se executa dupa construtor => vinyls va fi gol, asa ca am mutat filteredVinyls din constructor in ngOnInit()
    } //aici se pot face orice initializari ale componentei 
    // aici extrag datele pentru tabel 

    onRatingClicked(message: string) :void {
       // this.pageTitle  = 'Vinyls Record ' + message;
    }
 
}
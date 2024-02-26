import { Component } from '@angular/core';
import { LogosComponent } from "../../shared/logos/logos.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShoppingCart, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-pets',
    standalone: true,
    templateUrl: './pets.component.html',
    styleUrl: './pets.component.css',
    imports: [LogosComponent, RouterLink, FontAwesomeModule, CommonModule]
})
export class PetsComponent {
    star = faStar
    cart = faShoppingCart
    search = faMagnifyingGlass
    heart = faHeart
    compare = faCodeCompare

    toppets: any = [
        {
            id: 1,
            mainimg: "../../../assets/images/pets/pet9.jpg",
            name: 'Steel Bowl Puppy',
            newprice: '$114.00 ',
            oldprice: '$120.00'
        },
        {
            id: 2,
            mainimg: "../../../assets/images/pets/pet10.jpg",
            name: 'Calcium Milk Bone',
            newprice: '$133.00 ',
            oldprice: '$140.00'
        },
        {
            id: 3,
            mainimg: "../../../assets/images/pets/pet11.jpg",
            name: 'Dog Sleep Mat',
            newprice: '$122.40 ',
            oldprice: '$136.00'
        },
        {
            id: 4,
            mainimg: "../../../assets/images/pets/pet12.jpg",
            name: 'Dog Super Bone Toy',
            newprice: '$128.00 ',
            oldprice: '$149.00'
        },


    ]


    petblog: any = [
        {
            id: 0,
            img: 'assets/images/pets/pet16.jpg',
            date: '25 January 2018',
        },
        {
            id: 1,
            img: 'assets/images/pets/pet15.jpg',
            date: '26 January 2018',
        },
        {
            id: 2,
            img: 'assets/images/pets/pet17.jpg',
            date: '27 January 2018',
        },
    ]

}

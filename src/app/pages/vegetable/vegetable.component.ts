import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShoppingCart, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-vegetable',
    standalone: true,
    templateUrl: './vegetable.component.html',
    styleUrl: './vegetable.component.css',
    imports: [RouterLink, FontAwesomeModule, CommonModule]
})
export class VegetableComponent {

    star = faStar
    cart = faShoppingCart
    search = faMagnifyingGlass
    heart = faHeart
    compare = faCodeCompare


    vegetable: any = [
        {
            id: 1,
            mainimg: "../../../assets/images/vegetable/veg3.jpg",
            name: 'Beetroot',
            newprice: '$31.00 ',
            oldprice: '$35.00'
        },
        {
            id: 2,
            mainimg: "../../../assets/images/vegetable/veg4.jpg",
            name: 'Cabbage',
            newprice: '$11.00 ',
            oldprice: '$15.00'
        },
        {
            id: 3,
            mainimg: "../../../assets/images/vegetable/veg5.jpg",
            name: 'Onion',
            newprice: '$10.00 ',
            oldprice: '$14.00'
        },
        {
            id: 4,
            mainimg: "../../../assets/images/vegetable/veg6.jpg",
            name: 'Brinjal',
            newprice: '$19.00 ',
            oldprice: '$30.00'
        },


    ]

  


}

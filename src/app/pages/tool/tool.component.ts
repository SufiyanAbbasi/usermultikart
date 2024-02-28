import { Component } from '@angular/core';
import { DeliveryComponent } from "../../shared/delivery/delivery.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShoppingCart, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { LogosComponent } from "../../shared/logos/logos.component";

@Component({
    selector: 'app-tool',
    standalone: true,
    templateUrl: './tool.component.html',
    styleUrl: './tool.component.css',
    imports: [DeliveryComponent, CommonModule, RouterLink, FontAwesomeModule, LogosComponent]
})
export class ToolComponent {
    star = faStar
    cart = faShoppingCart
    search = faMagnifyingGlass
    heart = faHeart
    compare = faCodeCompare

    showContent: boolean = true;
    toggleContent(){
        this.showContent = !this.showContent; 
    }

    
    mytool: any = [
        {
            id: 0,
            name: 'AUTO PARTS',
            img: '../../../assets/images/tool/tool7.jpg',
            text1: 'Shock Resistant Parts',
            text2: 'Skeleton Parts',
            text3: 'Slow Parts',
            text4: 'Solar Power Parts',
        },
        {
            id: 1,
            name: 'BRAKES & STEERING',
            img: '../../../assets/images/tool/tool8.jpg',
            text1: 'Shock Resistant Parts',
            text2: 'Skeleton Parts',
            text3: 'Slow Parts',
            text4: 'Solar Power Parts',
        },
        {
            id: 2,
            name: 'ENGINE & DRIVETRAIN',
            img: '../../../assets/images/tool/tool9.jpg',
            text1: 'Shock Resistant Parts',
            text2: 'Skeleton Parts',
            text3: 'Slow Parts',
            text4: 'Solar Power Parts',
        },
        {
            id: 3,
            name: 'EXTERIOR ACCESORIES',
            img: '../../../assets/images/tool/tool10.jpg',
            text1: 'Shock Resistant Parts',
            text2: 'Skeleton Parts',
            text3: 'Slow Parts',
            text4: 'Solar Power Parts',
        },
    ]

    popularprod: any = [
        {
            id: 1,
            mainimg: "../../../assets/images/tool/tool11.jpg",
            name: 'Wheel Bairing',
            newprice: '$114.00 ',
            // oldprice: '$120.00'
        },
        {
            id: 2,
            mainimg: "../../../assets/images/tool/tool12.jpg",
            name: 'Cable Clutch',
            newprice: '$420.00 ',
            // oldprice: '$140.00'
        },
        {
            id: 3,
            mainimg: "../../../assets/images/tool/tool13.jpg",
            name: 'Cap Wheel',
            newprice: '$532.40 ',
            // oldprice: '$136.00'
        },
        {
            id: 4,
            mainimg: "../../../assets/images/tool/tool14.jpg",
            name: 'Suspensons',
            newprice: '$408.00 ',
            oldprice: '$149.00'
        },


    ]
    populartool: any = [
        {
            id: 1,
            mainimg: "../../../assets/images/tool/tool11.jpg",
            name: 'Wheel Bairing',
            newprice: '$114.00 ',
            // oldprice: '$120.00'
        },
        {
            id: 2,
            mainimg: "../../../assets/images/tool/tool12.jpg",
            name: 'Cable Clutch',
            newprice: '$420.00 ',
            // oldprice: '$140.00'
        }


    ]

}

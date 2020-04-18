// REF: https://github.com/wynfred/ngx-masonry
// REF: https://github.com/wynfred/ngx-masonry-demo

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import * as Portraits from '../../assets/data/json/portraits.json';


@Component({
    selector: 'app-portraits',
    templateUrl: './portraits.component.html',
    styleUrls: ['./portraits.component.scss']
})


export class PortraitsComponent implements OnInit {

    title: 'Portraits';

    portraitsItems: any[] = (Portraits as any).portraits;

    @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

    masonryImages: string[];
    limit = 9;

    public masonryOptions: NgxMasonryOptions = {
        gutter: 0,
    };

    constructor() { }

    ngOnInit(): void {
        // console.log(Portraits);
        // console.log('Portraits.portraits[1].FileName = ' + Portraits.portraits[1].FileName);
        // console.log('this.portraitsItems = ' + this.portraitsItems);

        this.masonryImages = this.portraitsItems.slice(0, this.limit);
    }

    showMoreImages() {
        this.limit += 9;
        this.masonryImages = this.portraitsItems.slice(0, this.limit);
    }

    insertImage() {
        this.masonryImages.splice(0, 0, this.portraitsItems[0]);
        this.masonry.reloadItems();
        this.masonry.layout();
    }

    removeImage() {
        this.masonryImages.pop();
    }
}

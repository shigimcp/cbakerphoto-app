// REF: https://github.com/wynfred/ngx-masonry
// REF: https://github.com/wynfred/ngx-masonry-demo

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import * as Still from '../../assets/data/json/still.json';


@Component({
    selector: 'app-still',
    templateUrl: './still.component.html',
    styleUrls: ['./still.component.scss']
})


export class StillComponent implements OnInit {

    title: 'Still';

    stillItems: any[] = (Still as any).still;

    @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

    masonryImages: string[];
    limit = 9;

    public masonryOptions: NgxMasonryOptions = {
        gutter: 0,
    };

    constructor() { }

    ngOnInit(): void {
        // console.log(Still);
        // console.log('Still.still[1].FileName = ' + Still.still[1].FileName);
        // console.log('this.stillItems = ' + this.stillItems);

        this.masonryImages = this.stillItems.slice(0, this.limit);
    }

    showMoreImages() {
        this.limit += 9;
        this.masonryImages = this.stillItems.slice(0, this.limit);
    }

    insertImage() {
        this.masonryImages.splice(0, 0, this.stillItems[0]);
        this.masonry.reloadItems();
        this.masonry.layout();
    }

    removeImage() {
        this.masonryImages.pop();
    }
}

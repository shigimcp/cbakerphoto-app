// REF: https://github.com/wynfred/ngx-masonry
// REF_NG: https://www.npmjs.com/package/ng-masonry-layout

import { Component, OnInit, ViewChild } from '@angular/core';
import * as Women from '../../assets/data/json/women.json';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';


@Component({
    selector: 'app-masonry',
    templateUrl: './masonry.component.html',
    styleUrls: ['./masonry.component.scss']
})


export class MasonryComponent implements OnInit {

    title: 'JSON (local) & Masonry layout';

    womenItems: any[] = (Women as any).women;

    @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

    masonryImages: string[];
    limit = 9;

    public masonryOptions: NgxMasonryOptions = {
        gutter: 0,
        // percentPosition: true,
        // fitWidth: true,
        // originLeft: true,
        // originTop: true,
        // originLeft: false,
        // originTop: false,
    };

    constructor() { }

    ngOnInit(): void {
        console.log(Women);
        console.log('Women.classic[1].FileName = ' + Women.women[1].FileName);
        console.log('this.womenItems = ' + this.womenItems);

        // this.masonryImages = this.dummyPictures.slice(0, this.limit);
        this.masonryImages = this.womenItems.slice(0, this.limit);
        // this.womenItems = this.womenItems.slice(0, this.limit);
    }

    showMoreImages() {
        this.limit += 15;
        // this.masonryImages = this.dummyPictures.slice(0, this.limit);
        this.masonryImages = this.womenItems.slice(0, this.limit);
        // this.womenItems = this.womenItems.slice(0, this.limit);
    }

    insertImage() {
        // this.masonryImages.splice(0, 0, this.dummyPictures[0]);
        this.masonryImages.splice(0, 0, this.womenItems[0]);
        // this.womenItems.splice(0, 0, this.womenItems[0]);
        this.masonry.reloadItems();
        this.masonry.layout();
    }

    removeImage() {
        this.masonryImages.pop();
        // this.womenItems.pop();
    }
}

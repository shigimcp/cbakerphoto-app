// REF: https://github.com/wynfred/ngx-masonry
// REF: https://github.com/wynfred/ngx-masonry-demo

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import * as Boom from '../../assets/data/json/boom.json';


@Component({
    selector: 'app-boom',
    templateUrl: './boom.component.html',
    styleUrls: ['./boom.component.scss']
})


export class BoomComponent implements OnInit {

    title: 'Boom';

    boomItems: any[] = (Boom as any).boom;

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
        // console.log(Boom);
        // console.log('Boom.boom[1].FileName = ' + Boom.boom[1].FileName);
        // console.log('this.boomItems = ' + this.boomItems);

        // this.masonryImages = this.dummyPictures.slice(0, this.limit);
        this.masonryImages = this.boomItems.slice(0, this.limit);
        // this.boomItems = this.boomItems.slice(0, this.limit);
    }

    showMoreImages() {
        this.limit += 9;
        // this.masonryImages = this.dummyPictures.slice(0, this.limit);
        this.masonryImages = this.boomItems.slice(0, this.limit);
        // this.boomItems = this.boomItems.slice(0, this.limit);
    }

    insertImage() {
        // this.masonryImages.splice(0, 0, this.dummyPictures[0]);
        this.masonryImages.splice(0, 0, this.boomItems[0]);
        // this.boomItems.splice(0, 0, this.boomItems[0]);
        this.masonry.reloadItems();
        this.masonry.layout();
    }

    removeImage() {
        this.masonryImages.pop();
        // this.boomItems.pop();
    }
}

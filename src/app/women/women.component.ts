// REF: https://github.com/wynfred/ngx-masonry
// REF: https://github.com/wynfred/ngx-masonry-demo

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import * as Women from '../../assets/data/json/women.json';


@Component({
    selector: 'app-women',
    templateUrl: './women.component.html',
    styleUrls: ['./women.component.scss']
})


export class WomenComponent implements OnInit {

    title: 'JSON (local) & Masonry layout';

    womenItems: any[] = (Women as any).women;

    @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

    masonryImages: string[];
    limit = 9;

    public masonryOptions: NgxMasonryOptions = {
        gutter: 0,
    };

    constructor() { }

    ngOnInit(): void {
        // console.log(Women);
        // console.log('Women.classic[1].FileName = ' + Women.women[1].FileName);
        // console.log('this.womenItems = ' + this.womenItems);

        this.masonryImages = this.womenItems.slice(0, this.limit);
    }

    showMoreImages() {
        this.limit += 9;
        this.masonryImages = this.womenItems.slice(0, this.limit);
    }

    insertImage() {
        this.masonryImages.splice(0, 0, this.womenItems[0]);
        this.masonry.reloadItems();
        this.masonry.layout();
    }

    removeImage() {
        this.masonryImages.pop();
    }
}

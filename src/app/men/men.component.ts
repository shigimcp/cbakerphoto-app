// REF: https://github.com/wynfred/ngx-masonry
// REF: https://github.com/wynfred/ngx-masonry-demo

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import * as Men from '../../assets/data/json/men.json';


@Component({
    selector: 'app-men',
    templateUrl: './men.component.html',
    styleUrls: ['./men.component.scss']
})


export class MenComponent implements OnInit {

    title: 'Men';

    menItems: any[] = (Men as any).men;

    @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

    masonryImages: string[];
    limit = 9;

    public masonryOptions: NgxMasonryOptions = {
        gutter: 0,
    };

    constructor() { }

    ngOnInit(): void {
        // console.log(Men);
        // console.log('Men.men[1].FileName = ' + Men.men[1].FileName);
        // console.log('this.menItems = ' + this.menItems);

        this.masonryImages = this.menItems.slice(0, this.limit);
    }

    showMoreImages() {
        this.limit += 9;
        this.masonryImages = this.menItems.slice(0, this.limit);
    }

    insertImage() {
        this.masonryImages.splice(0, 0, this.menItems[0]);
        this.masonry.reloadItems();
        this.masonry.layout();
    }

    removeImage() {
        this.masonryImages.pop();
    }
}

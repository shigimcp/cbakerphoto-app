// REF: https://github.com/wynfred/ngx-masonry
// REF: https://github.com/wynfred/ngx-masonry-demo

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import * as Life from '../../assets/data/json/life.json';


@Component({
    selector: 'app-life',
    templateUrl: './life.component.html',
    styleUrls: ['./life.component.scss']
})


export class LifeComponent implements OnInit {

    title: 'Life';

    lifeItems: any[] = (Life as any).life;

    @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

    masonryImages: string[];
    limit = 9;

    public masonryOptions: NgxMasonryOptions = {
        gutter: 0,
    };

    constructor() { }

    ngOnInit(): void {
        // console.log(Life);
        // console.log('Life.life[1].FileName = ' + Life.life[1].FileName);
        // console.log('this.lifeItems = ' + this.lifeItems);

        this.masonryImages = this.lifeItems.slice(0, this.limit);
    }

    showMoreImages() {
        this.limit += 9;
        this.masonryImages = this.lifeItems.slice(0, this.limit);
    }

    insertImage() {
        this.masonryImages.splice(0, 0, this.lifeItems[0]);
        this.masonry.reloadItems();
        this.masonry.layout();
    }

    removeImage() {
        this.masonryImages.pop();
    }
}

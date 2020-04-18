// REF: https://github.com/wynfred/ngx-masonry
// REF: https://github.com/wynfred/ngx-masonry-demo

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import * as Classic from '../../assets/data/json/classic.json';


@Component({
    selector: 'app-classic',
    templateUrl: './classic.component.html',
    styleUrls: ['./classic.component.scss']
})


export class ClassicComponent implements OnInit {

    title: 'Classic';

    classicItems: any[] = (Classic as any).classic;

    @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

    masonryImages: string[];
    limit = 9;

    public masonryOptions: NgxMasonryOptions = {
        gutter: 0,
    };

    constructor() { }

    ngOnInit(): void {
        // console.log(Classic);
        // console.log('Classic.classic[1].FileName = ' + Classic.classic[1].FileName);
        // console.log('this.classicItems = ' + this.classicItems);

        this.masonryImages = this.classicItems.slice(0, this.limit);
    }

    showMoreImages() {
        this.limit += 9;
        this.masonryImages = this.classicItems.slice(0, this.limit);
    }

    insertImage() {
        this.masonryImages.splice(0, 0, this.classicItems[0]);
        this.masonry.reloadItems();
        this.masonry.layout();
    }

    removeImage() {
        this.masonryImages.pop();
    }
}

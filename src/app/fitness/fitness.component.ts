// REF: https://github.com/wynfred/ngx-masonry
// REF: https://github.com/wynfred/ngx-masonry-demo

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import * as Fitness from '../../assets/data/json/fitness.json';


@Component({
    selector: 'app-fitness',
    templateUrl: './fitness.component.html',
    styleUrls: ['./fitness.component.scss']
})


export class FitnessComponent implements OnInit {

    title: 'Fitness';

    fitnessItems: any[] = (Fitness as any).fitness;

    @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

    masonryImages: string[];
    limit = 9;

    public masonryOptions: NgxMasonryOptions = {
        gutter: 0,
    };

    constructor() { }

    ngOnInit(): void {
        // console.log(Fitness);
        // console.log('Fitness.fitness[1].FileName = ' + Fitness.fitness[1].FileName);
        // console.log('this.fitnessItems = ' + this.fitnessItems);

        this.masonryImages = this.fitnessItems.slice(0, this.limit);
    }

    showMoreImages() {
        this.limit += 9;
        this.masonryImages = this.fitnessItems.slice(0, this.limit);
    }

    insertImage() {
        this.masonryImages.splice(0, 0, this.fitnessItems[0]);
        this.masonry.reloadItems();
        this.masonry.layout();
    }

    removeImage() {
        this.masonryImages.pop();
    }
}

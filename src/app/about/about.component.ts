// REF: https://www.techiediaries.com/import-local-json-files-in-typescript/

import { Component, OnInit } from '@angular/core';
// import Classic from '../../assets/data/json/classic.json';
import * as Classic from '../../assets/data/json/classic.json';
// import { Classic } from '../../assets/data/json/classic.json';


@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})


export class AboutComponent implements OnInit {

    title: 'JSON (local)';

    // classicItems: any[] = [];
    // classicItems: any = (Classic as any).default;
    // classicItems: any[] = (Classic as any);
    classicItems: any[] = (Classic as any).classic;

    constructor() { }

    ngOnInit(): void {
        console.log(Classic);
        console.log('Classic.classic[1].FileName = ' + Classic.classic[1].FileName);
        console.log('this.classicItems = ' + this.classicItems);
    }

}

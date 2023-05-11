import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'gifs-search-box',
    template: `
    <h5>Buscar</h5>
    <input type="text" 
    class="form-control"
    placeholder="Buscar gifs" 
    (keyup.enter)="searchTag()"
    #tagInput
    />
    `
})

export class SearchBoxComponent implements OnInit {

    @ViewChild('tagInput')
    public tagInput!: ElementRef<HTMLInputElement>;    

    constructor() { }

    ngOnInit() { }

    searchTag(){
        let newTag = this.tagInput.nativeElement.value
        console.log({newTag})
    }
}
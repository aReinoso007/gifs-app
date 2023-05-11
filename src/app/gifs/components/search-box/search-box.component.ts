import { GifsService } from './../../services/gifs.service';
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

    constructor(
        private gifsService: GifsService
    ) { }

    ngOnInit() { }

    searchTag(){
        let newTag = this.tagInput.nativeElement.value
        this.gifsService.searchTag(newTag);
        this.tagInput.nativeElement.value = '';
    }
}
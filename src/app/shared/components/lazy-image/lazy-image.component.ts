import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit{
  @Input()
  public url!: string;
  @Input()
  public alt!: string

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if(!this.url) throw new Error('img URL prop not provided');
    if(!this.url) throw new Error('ALT prop not provided');
  }
  
  onLoad(){
    this.hasLoaded = true;
  }


}

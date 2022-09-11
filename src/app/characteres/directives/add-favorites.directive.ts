import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAddFavorites]'
})
export class AddFavoritesDirective implements OnInit {
 // @HostListener('click') onclick(){

  //}

  constructor(private elementRef: ElementRef, private rendered2: Renderer2) { }

  @HostListener('document:click', ['$event'])
  DocumentClick(event: Event) {
    let element = this.elementRef.nativeElement
    console.log(element, 'element')
    if (element.contains(event.target))
    this.rendered2.setStyle(element, 'color', 'red')
    else
    this.rendered2.setStyle(element, 'color', '#565584')
  }

  ngOnInit() {

    const element = this.elementRef.nativeElement
    element.click()
     this.rendered2.setStyle(element, 'color', 'red')
  }


}

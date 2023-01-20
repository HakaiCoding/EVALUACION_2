import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLakersDir]'
})
export class Lakers {
  constructor(private el:ElementRef, private renderer:Renderer2) {
  renderer.setStyle(el.nativeElement, 'max-widht','600px');
  renderer.setStyle(el.nativeElement, 'height','120px');
  renderer.setStyle(el.nativeElement, 'border-style','solid');
  renderer.setStyle(el.nativeElement, 'border-width','5px');
  renderer.setStyle(el.nativeElement, 'border-color','#552582');
  renderer.setStyle(el.nativeElement, 'margin-top','30px');
  renderer.setStyle(el.nativeElement, 'box-shadow','0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0,0, 0.19)');
  renderer.setStyle(el.nativeElement, 'list-style','none');
  renderer.setStyle(el.nativeElement, 'text-align','center');
  }
}

@Directive({
  selector: '[appCelticsDir]'
})
export class Celtics {
  constructor(private el:ElementRef, private renderer:Renderer2) {
    renderer.setStyle(el.nativeElement, 'max-widht','600px');
    renderer.setStyle(el.nativeElement, 'height','120px');
    renderer.setStyle(el.nativeElement, 'border-style','solid');
    renderer.setStyle(el.nativeElement, 'border-width','5px');
    renderer.setStyle(el.nativeElement, 'border-color','#008348');
    renderer.setStyle(el.nativeElement, 'margin-top','30px');
    renderer.setStyle(el.nativeElement, 'box-shadow','0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0,0, 0.19)');
    renderer.setStyle(el.nativeElement, 'list-style','none');
    renderer.setStyle(el.nativeElement, 'text-align','center');
    }
}


@Directive({
  selector: '[appBullsDir]'
})
export class Bulls {
  constructor(private el:ElementRef, private renderer:Renderer2) {
    renderer.setStyle(el.nativeElement, 'max-widht','600px');
    renderer.setStyle(el.nativeElement, 'height','120px');
    renderer.setStyle(el.nativeElement, 'border-style','solid');
    renderer.setStyle(el.nativeElement, 'border-width','5px');
    renderer.setStyle(el.nativeElement, 'border-color','#CE1141');
    renderer.setStyle(el.nativeElement, 'margin-top','30px');
    renderer.setStyle(el.nativeElement, 'box-shadow','0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0,0, 0.19)');
    renderer.setStyle(el.nativeElement, 'list-style','none');
    renderer.setStyle(el.nativeElement, 'text-align','center');

    }
}
    
//SE PUEDE CREAR UNA CON LOS VALORES GENERALES Y LLAMAR A AMBAS.
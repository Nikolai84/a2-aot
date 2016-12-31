
import {
  Component, Renderer, ElementRef, HostListener, forwardRef
} from '@angular/core';
import {ParentDialogComponent} from './parent-dialog-component';

@Component({
  selector: 'hsp-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.css'],
  providers: [{ provide: ParentDialogComponent, useExisting: forwardRef(() => DialogComponent) }]

})
export class DialogComponent implements ParentDialogComponent {

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  show() {
    this.renderer.setElementStyle(this.el.nativeElement, 'display', 'block');
  }

  hide() {
    this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
  }

  protected doOnClick($event: MouseEvent) {
    const element = $event.target as Element;
    if (element.classList.contains('hsp-dialog')) {
      this.hide();
    }
  }

  @HostListener('click', ['$event']) onClick($event: MouseEvent) {
    this.doOnClick($event);
  }

}
import { Directive,  HostBinding } from '@angular/core';

@Directive({
  selector: '[appCouleurfond]'
})
export class CouleurfondDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor() {
    this.backgroundColor = '#7d46ec81';
   }

}

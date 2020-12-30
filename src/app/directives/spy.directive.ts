import { Directive, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appSpy]'
})
export class SpyDirective implements OnInit, OnDestroy{

  constructor() { }
  ngOnDestroy(): void {
    console.log('SpyDirective ngOnDestroy');
  }
  ngOnInit(): void {
    console.log('SpyDirective ngOnInit');
  }

}

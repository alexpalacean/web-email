import { ComponentFactoryResolver, ComponentRef, Directive, ElementRef, Host, Inject, InjectionToken, Optional, Renderer2, Self, ViewContainerRef } from '@angular/core';
import { NgControl } from '@angular/forms';

import { EMPTY, forkJoin, merge, Observable, of } from 'rxjs';
import { ControlErrorComponent } from '../standalone-components/control-error.component';
import { FormSubmitDirective } from './form-submit.directive';

export const defaultErrors = {
  required: (error) => `This field is required`,
  minlength: ({ requiredLength, actualLength }) => `Expect ${requiredLength} but got ${actualLength}`
}

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors
});

@Directive({
  selector: '[formControl], [formControlName]'
})
export class ControlErrorsDirective {

  submit$: Observable<Event>;
  ref: ComponentRef<ControlErrorComponent>;

  constructor(private elementRef: ElementRef,private renderer: Renderer2,private controlInstance: NgControl, @Optional() @Host() private form: FormSubmitDirective, @Inject(FORM_ERRORS) private errors, private vcr: ViewContainerRef, private resolver: ComponentFactoryResolver) {
    this.submit$ = this.form ? this.form.submit$ : EMPTY;
  }

  ngOnInit() {
    console.log(this.elementRef.nativeElement.parentElement.parentElement);
    // merge(
    //   this.submit$, of(this.controlInstance.valueChanges)
    // )
      // forkJoin(
      //   {
      //     sourceOne: this.submit$,
      //     sourceTwo: of(this.controlInstance.valueChanges)
      //   }
      // )
      this.controlInstance.valueChanges!.subscribe(() => {
        const controlErrors = this.controlInstance.errors;
        if (controlErrors) {
          const firstKey = Object.keys(controlErrors)[0];
          const getError = this.errors[firstKey];
          const text = getError(controlErrors[firstKey]);
          this.setError(text);
        } else if (this.ref) {
          this.setError(null);
        }
      });
  }

  setError(text: string | null) {
   
    if (!this.ref) {
      const factory = this.resolver.resolveComponentFactory(ControlErrorComponent);
      this.ref = this.vcr.createComponent(factory);
      this.renderer.appendChild(this.elementRef.nativeElement.parentElement.parentElement.parentElement, 
        this.ref.location.nativeElement);
    }

    this.ref.instance.text = text;
  }
}

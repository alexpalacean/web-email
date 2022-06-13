import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from "@angular/core";

@Component({
    standalone: true,
    template: `<p class="help is-danger" [class.hide]="_hide">{{_text}}</p>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: ['.hide {display: none;}']
})
export class ControlErrorComponent {
    _text: string;
    _hide = true;

    @Input() set text(value) {
        if (value !== this._text) {
            this._text = value;
            this._hide = !value;
            this.cdr.detectChanges();
        }
    };

    constructor(private cdr: ChangeDetectorRef) { }

}
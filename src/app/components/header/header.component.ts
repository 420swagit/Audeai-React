import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class Header {
  @Input()
  text7: string = 'Who We Are'
  @Input()
  text6: string = 'About'
  @Input()
  heading1: string = 'Aude.ai'
  @Input()
  text3: string = 'Text'
  @Input()
  text5: string = 'Text'
  @Input()
  text1: string = 'Who We Are'
  @Input()
  text4: string = 'Text'
  @Input()
  text2: string = 'Text'
  @Input()
  heading: string = 'Aude.ai'
  @Input()
  text: string = 'About'
  @Input()
  rootClassName: string = ''
  constructor() {}
}

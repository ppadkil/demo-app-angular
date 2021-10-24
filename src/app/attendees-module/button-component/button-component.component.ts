import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.css'],
  // Use Change detection strategy as OnPush to avoid refreshing the whole page.
  // By defaults the change detection strategy is Default
  // To improve performance use change detection strategy as OnPush for components
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponentComponent implements OnInit {

  // Parent to child and child to parent way of sharing data for parent child relation components
  // parent to child
  @Input()
  public buttonText = 'Display Names';

  // child to parent
  @Output()
  public displayNamePressed = new EventEmitter();
  
  fontColor = 'blue';
  constructor() { }

  ngOnInit(): void {
  }

  public onClick(event: Event): void {
    this.displayNamePressed.emit(event);
    event.stopPropagation();
  }

}

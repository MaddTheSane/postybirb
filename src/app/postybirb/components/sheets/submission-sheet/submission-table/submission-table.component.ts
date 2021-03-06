import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { SubmissionArchive } from '../../../../models/postybirb-submission-model';

@Component({
  selector: 'submission-table',
  templateUrl: './submission-table.component.html',
  styleUrls: ['./submission-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'clearfix'
  }
})
export class SubmissionTableComponent implements OnInit, OnChanges {
  @Output() readonly clearAll: EventEmitter<any> = new EventEmitter();
  @Output() readonly postAll: EventEmitter<any> = new EventEmitter();

  @Input() rows: SubmissionArchive[] = [];
  @Input() allowPostAll: boolean = false;
  @Input() allowReorder: boolean = false;
  @Input() clearAllLabel: string = 'Clear All';

  constructor(private _changeDetector: ChangeDetectorRef) { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      if (changes.rows) {
        this.rows = changes.rows.currentValue;
        this._changeDetector.markForCheck();
      }
    }
  }

  public doClearAll(): void {
    this.clearAll.emit();
  }

  public doPostAll(): void {
    this.postAll.emit();
  }

}

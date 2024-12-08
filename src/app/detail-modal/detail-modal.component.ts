import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detail-modal',
  standalone: true,
  imports: [],
  templateUrl: './detail-modal.component.html',
  styleUrl: './detail-modal.component.css',
})
export class DetailModalComponent {
  @Input() focusData: any;
  @Output() detailModalClosed = new EventEmitter<boolean>();
  @Output() editData = new EventEmitter<any>();

  detailModalClose() {
    this.detailModalClosed.emit(true);
  }
  showEditModal() {
    this.editData.emit(this.focusData);
  }
}

import { Component, OnInit } from '@angular/core';
import { SampleDataService } from '../services/sample-data.service';
import { CommonModule } from '@angular/common';
import { DetailModalComponent } from '../detail-modal/detail-modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DetailModalComponent, EditModalComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  data: any[] = [];
  selectedData: any;
  detailModal: boolean = false;
  editModal: boolean = false;
  constructor(private sampleDataService: SampleDataService) {}

  ngOnInit(): void {
    this.sampleDataService.getData().subscribe((data) => {
      this.data = data;
    });
  }

  showDetail(selectData: any) {
    this.detailModalToggle();
    this.selectedData = selectData;
  }

  detailModalToggle() {
    this.detailModal = !this.detailModal;
  }

  editModalToggle() {
    this.editModal = !this.editModal;
  }

  showEditModal(data: any) {
    this.detailModalToggle();
    this.editModalToggle();
  }

  updatedAll(newData: any) {
    const dataIndex = this.data.findIndex((item) => item.id === newData.id);
    this.data[dataIndex] = { ...this.data[dataIndex], ...newData };
    this.editModalToggle()
  }
}

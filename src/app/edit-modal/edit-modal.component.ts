import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.css',
})
export class EditModalComponent implements OnInit {
  dropdownData: any = [
    'Project Manager',
    'Content Writer',
    'System Analyst',
    'Delivery Manager',
    'Chief Marketing Officer',
    'HR',
  ];
  editForm: FormGroup | any;
  @Output() editModalClosed = new EventEmitter<boolean>();
  @Output() updatedData = new EventEmitter<any>();
  @Input() focusData: any;

  newData: object = {};
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.editForm = new FormGroup({
      name: new FormControl(this.focusData.name, [
        Validators.required,
        Validators.maxLength(15),
      ]),
      role: new FormControl(this.focusData.role, Validators.required),
    });
  }

  updateData() {
    if (this.editForm.valid) {
      this.newData = {
        id: this.focusData.id,
        name: this.editForm.value.name,
        role: this.editForm.value.role,
      };
      this.updatedData.emit(this.newData);
    }
  }
  editModalClose() {
    this.editModalClosed.emit(true);
  }
}

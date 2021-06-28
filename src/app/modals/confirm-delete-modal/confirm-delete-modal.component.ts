import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-delete-modal',
  templateUrl: './confirm-delete-modal.component.html',
  styleUrls: ['./confirm-delete-modal.component.css']
})
export class ConfirmDeleteModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter<boolean>();

  constructor(private element:ElementRef) { 
  }

  ngOnInit(): void {
    document.body.appendChild(this.element.nativeElement);
  }

  ngOnDestroy() {
    this.element.nativeElement.remove();
  }

  onCloseClick() {
    this.closeModal.emit(false);
  }

  onYesClick() {
    this.closeModal.emit(true);
  }
}

import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  encapsulation : ViewEncapsulation.None,
  providers: [NgbModalConfig, NgbModal]
})
export class DetailsComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  // modalOpenLG(modalLG, data) {
  //   console.info(data)
  //   this.modalService.open(modalLG, {
  //     centered: true,
  //     size: 'lg',
  //     backdrop: false,
  //     keyboard: false,
  //     windowClass: 'fondo-modal'
  //   });
  // }

}

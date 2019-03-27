import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


// Import custom components
import { RestService } from '../../shared/services/rest.service';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { Restlist } from '../../shared/Interfaces/restlist.model';


@Component({
  selector: 'app-table',
  templateUrl: './resttable.component.html',
  styleUrls: ['./resttable.component.scss']
})

export class RestTableComponent implements OnInit, OnDestroy {

  dataList: Restlist;
  loading: boolean = true;
  interval: any;

  constructor(private restService: RestService,
    private modalService: NgbModal) {
  }

  ngOnInit() {
    // Call Periodically every 10 sec
    this.getData();
    this.interval = setInterval(() => {
      this.getData();
    }, 10000);
  }

  openModel(row) {
    const modalRef = this.modalService.open(ModalComponent, { size: 'lg' });
    modalRef.componentInstance.data = row;
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  getData() {
    this.loading = true;
    this.restService.getAllData().subscribe(response => {
      this.loading = false;
      this.dataList = response;
      this.dataList.hits.reverse();
    }, (err) => {
      this.loading = false;
    });
  }


}







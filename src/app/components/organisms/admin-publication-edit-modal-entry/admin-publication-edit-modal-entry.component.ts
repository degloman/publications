import { Component, OnInit, OnDestroy } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AdminPublicationEditComponent } from '../admin-publication-edit/admin-publication-edit.component';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-publication-edit-modal-entry',
  templateUrl: './admin-publication-edit-modal-entry.component.html',
  styleUrls: ['./admin-publication-edit-modal-entry.component.scss'],
})
export class AdminPublicationEditModalEntryComponent
  implements OnInit, OnDestroy {
  private bsModalRef: BsModalRef;
  private subscriptions: Subscription[] = [];
  constructor(
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const publicationID = this.route.snapshot.paramMap.get('id');
    this.editPublication(parseInt(publicationID));
  }
  public editPublication(publicationID: number) {
    const initialState: object = { publicationID };
    this.bsModalRef = this.modalService.show(AdminPublicationEditComponent, {
      initialState,
    });
    this.subscriptions.push(
      this.modalService.onHidden.subscribe((r) => {
        this.router.navigate(['admin']);
      })
    );
    this.subscriptions.push(
      this.router.events.subscribe((event: NavigationStart) => {
        if (event.navigationTrigger === 'popstate') {
          this.bsModalRef.hide();
        }
      })
    );
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      for (let subscription of this.subscriptions) {
        if (subscription) {
          subscription.unsubscribe();
        }
      }
    }
  }
}

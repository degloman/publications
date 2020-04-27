import { Component, OnInit } from '@angular/core';
import { AdminApiService } from 'src/app/core/services/admin-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.scss'],
})
export class AdminContentComponent implements OnInit {
  constructor(
    private adminApiService: AdminApiService,
    private router: Router,
    private r: ActivatedRoute
  ) {}
  ngOnInit(): void {}

  get publications() {
    return this.adminApiService.getPublications();
  }
  editPublication(publicationID) {
    this.router.navigate(['publication', publicationID], {
      relativeTo: this.r.parent,
    });
  }
}

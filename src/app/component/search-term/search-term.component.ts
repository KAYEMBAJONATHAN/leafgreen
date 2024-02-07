import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-term',
  standalone: true,
  imports: [],
  templateUrl: './search-term.component.html',
  styleUrl: './search-term.component.css'
})
export class SearchTermComponent implements OnInit {
  searchTerm: any;

  constructor(private router: Router, activateRoute: ActivatedRoute) {
    activateRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.searchTerm = params['searchTerm'];
      }
    });
  }

  ngOnInit(): void {}

  search(term: string) {
    if (term) {
      this.router.navigateByUrl('/search/' + term);
    }
  }
}

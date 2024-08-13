import { Component,OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  searchTerm: string = "";

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      if(params['searchTerm']) {
        this.searchTerm = params['searchTerm'];
      }
    })
  }

  search(): void{
    if(this.searchTerm){
    this.router.navigateByUrl('/search/' + this.searchTerm);
    }
  }

}

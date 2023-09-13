import { Component, OnInit } from '@angular/core';
import { Personne } from '../personne'
import { PersonneService } from '../personne.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-personne',
  templateUrl: './list-personne.component.html',
  styleUrls: ['./list-personne.component.css']
})
export class ListPersonneComponent implements OnInit{

  personnes: Personne[]=[];

  constructor(private personneService: PersonneService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPersonnes();
  }

  private getPersonnes(){
    this.personneService.getPersonneList().subscribe(data => {
      this.personnes = data;
    });
  }

  personneDetails(id: number){
    this.router.navigate(['details-personne', id]);
  }

  updatePersonne(id: number){
    this.router.navigate(['update-personne', id]);
  }

  deletePersonne(id: number){
    this.personneService.deletePersonne(id).subscribe( data => {
      console.log(data);
      this.getPersonnes();
    })
  }

}

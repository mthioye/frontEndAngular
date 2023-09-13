import { Component, OnInit } from '@angular/core';
import { Personne } from '../personne';
import { PersonneService } from '../personne.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-personne',
  templateUrl: './create-personne.component.html',
  styleUrls: ['./create-personne.component.css']
})
export class CreatePersonneComponent implements OnInit {

  personne: Personne = new Personne();
  constructor(private personneService: PersonneService,
    private router: Router) { }

  ngOnInit(): void {
  }

  savePersonne(){
    this.personneService.createPersonne(this.personne).subscribe( data =>{
      console.log(data);
      this.goToPersonneList();
    },
    error => console.log(error));
  }

  goToPersonneList(){
    this.router.navigate(['/personnes']);
  }
  
  onSubmit(){
    console.log(this.personne);
    this.savePersonne();
  }

}

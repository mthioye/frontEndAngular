import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../personne.service';
import { Personne } from '../personne';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-personne',
  templateUrl: './update-personne.component.html',
  styleUrls: ['./update-personne.component.css']
})
export class UpdatePersonneComponent implements OnInit {

  id: number=0;
  personne: Personne;// = new Personne();
  constructor(private personneService: PersonneService,
    private route: ActivatedRoute,
    private router: Router) { 
      this.personne = new Personne();
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.personneService.getPersonneById(this.id).subscribe(data => {
      this.personne = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.personneService.updatePersonne(this.id, this.personne).subscribe( data =>{
      this.goToPersonneList();
    }
    , error => console.log(error));
  }

  goToPersonneList(){
    this.router.navigate(['/personnes']);
  }
}

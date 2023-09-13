import { Component, OnInit } from '@angular/core';
import { Personne } from '../personne';
import { ActivatedRoute } from '@angular/router';
import { PersonneService } from '../personne.service';

@Component({
  selector: 'app-details-personne',
  templateUrl: './details-personne.component.html',
  styleUrls: ['./details-personne.component.css']
})
export class DetailsPersonneComponent implements OnInit {

  id: number=0;
  personne: Personne=new Personne();
  constructor(private route: ActivatedRoute, private personneService: PersonneService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    //this.personne = new Personne();
    this.personneService.getPersonneById(this.id).subscribe( data => {
      this.personne = data;
    });
  }
}

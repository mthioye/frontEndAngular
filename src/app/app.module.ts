import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListPersonneComponent } from './list-personne/list-personne.component';
import { CreatePersonneComponent } from './create-personne/create-personne.component';
import { UpdatePersonneComponent } from './update-personne/update-personne.component';
import { DetailsPersonneComponent } from './details-personne/details-personne.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPersonneComponent,
    CreatePersonneComponent,
    UpdatePersonneComponent,
    DetailsPersonneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

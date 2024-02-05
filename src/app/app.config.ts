
import { RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FormsModule, FormControl } from '@angular/forms';
import { routes } from './app.routes';
import { RatingModule } from 'ng-starrating';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule,
    FormControl,
    RatingModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
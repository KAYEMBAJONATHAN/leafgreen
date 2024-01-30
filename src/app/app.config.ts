
import { RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FormsModule, FormControl } from '@angular/forms';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule,
    FormControl
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
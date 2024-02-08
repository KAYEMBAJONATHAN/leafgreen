
import { RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FormsModule, FormControl } from '@angular/forms';
import { routes } from './app.routes';
import { AppComponent } from './app.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [RouterModule.forRoot(routes),
    FormsModule,
    FormControl,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppRoutingModule {}
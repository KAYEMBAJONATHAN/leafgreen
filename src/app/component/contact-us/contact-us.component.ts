import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
   nom = new FormControl('');
   postNom = new FormControl('');
   tonNumero = new FormControl('');
   email = new FormControl('');
}



import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.userForm = this.fb.group({
      action: ['']
    });
  }

  onSubmit() {
    const action = this.userForm.get('action')?.value;
    if (action === 'buy') {
      this.router.navigate(['/buy']);
    } else if (action === 'sell') {
      this.router.navigate(['/sell']);
    }
  }
}

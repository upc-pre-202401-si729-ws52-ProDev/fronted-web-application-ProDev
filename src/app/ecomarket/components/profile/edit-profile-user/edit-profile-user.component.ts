import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import { FormsModule } from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {MatLabel} from "@angular/material/form-field";
import {ToolbarContentComponent} from "../../../../public/components/toolbar-content/toolbar-content.component";
import {ToolbarCustomerComponent} from "../../../../public/components/toolbar-customer/toolbar-customer.component";
import {routes} from "../../../../app.routes";
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {range, throwError} from 'rxjs';
import {CustomerApiService} from "../../../services/customer-services/customer-api.service";

@Component({
  selector: 'app-edit-profile-user',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgOptimizedImage, MatLabel, ToolbarContentComponent, ToolbarCustomerComponent],
  templateUrl: './edit-profile-user.component.html',
  styleUrl: './edit-profile-user.component.css'
})
export class EditProfileUserComponent {

  constructor(private router:Router,
              private CustomerApi: CustomerApiService,
              private route:ActivatedRoute) {
  }

  title = 'untitled';
  user = {
    loyaltyPoi: 5,
    name: '',
    lastName: '',
    age: 0,
    address: '',
    email: '',
    phone: ''
  };

  guardar() {
    let userId = this.route.snapshot.paramMap.get('id');
    console.log(userId);
    if (userId) {
      this.CustomerApi.getUserById(userId).subscribe(userData => {
        console.log(userData)
        if (userData && userData.customerId) {
          let customerId = userData.customerId;
          this.CustomerApi.updateCustomer(customerId, this.user)
            .pipe(catchError(error => {
              console.error('Error:', error);
              return throwError(error);
            }))
            .subscribe(response => {
              console.log('Perfil guardado: ', response);
              this.router.navigate(['profile-customer', userId]);
            });
        } else {
          console.error('ID del cliente no encontrado');
        }
      }, error => {
        console.error('Error al obtener el usuario:', error);
      });
    } else {
      console.error('ID de usuario no encontrado en la ruta');
    }
  }

  cancelar() {
    this.router.navigate(['profile-customer', this.route.snapshot.paramMap.get('id') ]);
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import {EditProfileComponent} from "./ecomarket/components/profile/edit-profile/edit-profile.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    EditProfileComponent
  ],
  exports: [RouterModule],
  declarations: [
  ]
})
export class AppRoutingModule { }

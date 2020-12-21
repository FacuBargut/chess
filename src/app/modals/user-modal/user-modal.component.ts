import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { EventManager } from '@angular/platform-browser';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {

  form: FormGroup;
  title : String;
  user:any;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService ,
              @Inject(MAT_DIALOG_DATA) public data: any  ) {
    this.buildForm();
   }

  ngOnInit(): void {

    this.title = this.data.title;

  }

  private buildForm(){
    this.form = this.formBuilder.group({
      numero_usuario: ['',[Validators.required]],
      usuario:['',[Validators.required]],
      activo: 0,
      clave: ['',[Validators.required]],
      nombre: ['',[Validators.required]],
      apellido: ['',[Validators.required]],
      email: ['',[Validators.required]],
      direccion: ['',[Validators.required]],
      telefono: ['',[Validators.required]],
      image: ['']
    })
  }

  addUser(event : Event){
    event.preventDefault();
    let newUser = {
      'nrousu':this.form.value.numero_usuario,
      'usuario':this.form.value.usuario,
      'activo':this.form.value.activo,
      'clave':this.form.value.clave,
      'nombre':this.form.value.nombre,
      'apellido':this.form.value.apellido,
      'email':this.form.value.email,
      'direccion':this.form.value.direccion,
      'telefono':this.form.value.telefono,
      'imagen64': null
    }

    this.userService.createUser(newUser).
    subscribe(user =>{
      console.log(user)
    },
    err =>{
      console.log("Hubo un error", err)
    }
    )
    

  }

}

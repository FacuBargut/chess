import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


import { User } from '../models/user.model';

import { UserService } from '../services/user.service';

import {UserModalComponent} from '../modals/user-modal/user-modal.component';
import {ErrorComponent} from '../modals/error/error.component';


const ELEMENT_DATA: User[] = [];




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['ID', 'usuario', 'activo', 'clave', 'nombre', 'apellido', 'email', 'direccion', 'telefono', 'accion'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
    setTimeout(() => this.dataSource.paginator = this.paginator);
    
    console.log(this.dataSource.paginator)
  }

  dataSource = new MatTableDataSource<User>(ELEMENT_DATA);
  users = [];

  // ELEMENT_DATA: User[] = [];
  constructor(private userService: UserService,
              private dialog: MatDialog  ) {
                this.loadTable();
               }

  ngOnInit(): void {
    
    // this.users = this.userService.getAllUsers();
    //     this.userService.getAllUsers().subscribe(res=>{
    //       this.dataSource = new MatTableDataSource<User>(res);
    //  });

  }

  loadTable(){
    this.userService.getAllUsers().subscribe(res => {
      // this.users =res;
      console.log(res["response"]["dsUsuariosDemo"]);
      this.dataSource = new MatTableDataSource<User>(res["response"]["dsUsuariosDemo"]["ttusuarios"]);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(data:any = {}, isNew?) {
    let title = isNew ? "Agregar usuario" : "Modificar usuario";
    const dialogRef = this.dialog.open(UserModalComponent,{
      width: '700px',
      data: { title: title, payload: data, isNew: isNew}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteUser(element){
    console.log(element.nrousu);
    this.userService.deleteUser(element).subscribe(
      result =>{
                console.log(result)
    },
    err=>{
      const dialogRef = this.dialog.open(ErrorComponent,{
        data: {error: 'No se pudo eliminar el usuario'}
      });
    }
    )
    // this.userServ  ice.deleteUser()
    // console.log(element);
  }

}

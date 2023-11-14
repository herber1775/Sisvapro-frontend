import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { ClienteService } from './../../services/cliente.service';
import { clienteDto, clienteCreateDto, clienteUpdateDto, clienteDeleteDto } from 'src/app/models/cliente.types';


@Component({
  selector: 'app-mant-cliente',
  templateUrl: './mant-cliente.component.html',
  styleUrls: ['./mant-cliente.component.css']
})
export class MantClienteComponent implements OnInit {

  public clients: any = [];
  public loading = false;
  public formCliente!: FormGroup;
 

  constructor(
    private clientService: ClienteService,
    private formBuilder: FormBuilder,
   
    ) {}
  
  ngOnInit(): void {

    this.formCliente = this.formBuilder.group({
      dni: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required],
      correo: ['', Validators.required],
      // clave: [''],
      telefono: [''],
      idCli:['']
    })

    this.getDataCliente();
  }

   public limpiarForm(): void{
    const formCli = this.formCliente.value;
    for(const cli in formCli){
      this.formCliente.get(cli)?.reset();
    }
  }

  async getDataCliente() {
    this.clientService.getAll().subscribe(
      (clients: clienteDto) => {
        this.clients = clients;
        console.log(clients);
      }
    )
  }

  test(){
    // let data = this.clients.map(
    //   (clients:any)=>this.clients.dni)

      console.log(this.formCliente.get('dni')?.value)
      


    // let validator = this.formCliente.get('dni')?.value
    // for (let element of this.clients.dni){

    // }
    
    
  }

 async guardarUsuario() {

  dni: this.formCliente.get('dni')?.value,

    console.log(this.formCliente.value)
    if(this.formCliente.valid){
    const nuevoCliente: clienteCreateDto = {
      dni: this.formCliente.get('dni')?.value,
      nombre: this.formCliente.get('nombre')?.value,
      apellido: this.formCliente.get('apellido')?.value,
      direccion: this.formCliente.get('direccion')?.value,
      correo: this.formCliente.get('correo')?.value,
      // clave: this.formCliente.get('clave')?.value,
      telefono: this.formCliente.get('telefono')?.value
    };
    this.clientService.createClient(nuevoCliente).subscribe(
      (respuesta:clienteCreateDto) => {
        console.log('Cliente creado exitosamente', respuesta);
        this.getDataCliente();
      },
      (error) => {
        console.error('Error al crear cliente', error);
      }
    );
    console.log(this.formCliente.value)
    this.limpiarForm();
    setTimeout(()=>this.getDataCliente(),400) ;
    }
  }

  async Actualizar(){
    console.log(this.formCliente.valid);
    if(this.formCliente.valid){
    let datos:clienteUpdateDto = this.formCliente.value;
    this.clientService.updateClient(datos).subscribe(
      (data:clienteUpdateDto) => {
        console.log('Actualizado', data);
      },
      (error) => {
        console.error('Error al actualizar:', error);
      }
    );
    this.limpiarForm();
    setTimeout(()=>this.getDataCliente(),400) 
    }
  }


  public editarCliente(event:any){
    console.log(event)
    this.formCliente.get('dni')?.setValue(event.dni),
    this.formCliente.get('nombre')?.setValue(event.nombre),
    this.formCliente.get('apellido')?.setValue(event.apellido),
    this.formCliente.get('direccion')?.setValue(event.direccion),
    this.formCliente.get('correo')?.setValue(event.correo),
    // this.formCliente.get('clave')?.setValue(event.clave),
    this.formCliente.get('telefono')?.setValue(event.telefono)
    this.formCliente.get('idCli')?.setValue(event.idCli)
  }

  public eliminarCliente(cliente:any) {
    
    const confirmarEliminacion = confirm('¿Estás seguro de que quieres eliminar este cliente?');

    if (confirmarEliminacion) {
      this.clientService.deleteClient(cliente.idCli).subscribe(
        () => {
          console.log('Cliente eliminado exitosamente', cliente.idCli);
          this.getDataCliente();
        },
        (error) => {
          console.error('Error al eliminar cliente', error);
        }
      );


      }
    }

      





}

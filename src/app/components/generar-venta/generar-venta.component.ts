import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { carroDto } from 'src/app/models/carro.types';
import { detalleVentaDto } from 'src/app/models/detalleVenta.types';
import { clienteDto} from 'src/app/models/cliente.types'
import { ventaDto } from 'src/app/models/venta.types';
import { CarroService } from 'src/app/services/carro.service';
import { VentaService } from 'src/app/services/venta.service';
import { EmpleadoDto } from 'src/app/models/empleado.types';
import { VentaTransaction } from 'src/app/models/venta-transaction';
import { getSerie } from 'src/app/utils/generar-serie';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-generar-venta',
  templateUrl: './generar-venta.component.html',
  styleUrls: ['./generar-venta.component.css']
})
export class GenerarVentaComponent {

  modelo = "";
  precio = 0.0;
  nombreCliente = "";

  //venta
  serie = "";

  detallesVenta: detalleVentaDto[] = [];
  venta = new ventaDto();

  formSearchCliente: FormGroup = this.formbuilder.group({
    dni: [""]
  });

  formSearchCarro: FormGroup = this.formbuilder.group({
    id: [""]
  })

  formCarro: FormGroup = this.formbuilder.group({
    codigoCliente: [0],
    codigoCarro: [0],
    cantidad: [0]
  })


  valueCodigoCliente = 0;
  valueCodigoCarro = 0;


  carroObtenido = new carroDto();
  clienteObtenido = new clienteDto();

  clienteFromStorage = new clienteDto();


  constructor(private formbuilder: FormBuilder, private ventaService: VentaService, private carroService: CarroService, private empleadoService: EmpleadoService, private authService: AuthService) { }

  ngOnInit(): void {
    this.cargarDetalles();
    this.cargarCliente();
    this.cargarSerie();
  }

  buscarCliente() {
    console.log("buscando cliente...");

    let valueCliente = this.formSearchCliente.value;

    if (valueCliente) {
      this.ventaService.obtenerClientePorDni(valueCliente.dni).subscribe({
        next: (value: clienteDto) => {
          if (value == null) {

          } else {
            let respuestaValid = this.validarVenta(value)
            if (respuestaValid) {
              this.limpiarVentaSession();
              this.cargarDetalles();
              this.agregarCliente(value);
              this.carroObtenido = new carroDto();
            }else{
            }
            this.cargarCliente();
            
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
    }



    console.log(this.formSearchCliente.value.dni)

  }
  agregarCliente(value: clienteDto) {
    sessionStorage.setItem("cliente", JSON.stringify(value));
  }
  validarVenta(toInsert: clienteDto): boolean {
    let cliente = sessionStorage.getItem("cliente");
    if (cliente != null) {
      let clienteParsed: clienteDto = JSON.parse(cliente);

      if (clienteParsed.idCli != toInsert.idCli) {
        var result = confirm("Está seguro que quiere cambiar de cliente, se eliminará todas las demas variables");

        console.log(result);
        return result;
      }
      return false;
    }
    return true;
  }

  buscarCarro() {
    console.log("buscando carro...")

    let valueCarro = this.formSearchCarro.value;

    this.carroService.obtenerCarroPorId(valueCarro.id).subscribe({
      next: (value: carroDto) => {
        if (value == null) {

        } else {
          this.modelo = value.modelo
          this.precio = value.precio
          this.valueCodigoCarro = value.id
          this.carroObtenido = value
        }
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  agregarCarro() {

    if (this.carroObtenido.id > 0 && this.clienteFromStorage.idCli > 0) {

      let valorCantidad = this.formCarro.value.cantidad
      if (valorCantidad > 0) {
        console.log(this.valueCodigoCarro);
        console.log(this.valueCodigoCliente);

        let detalleVenta = new detalleVentaDto();

        detalleVenta.cantidad = valorCantidad;
        detalleVenta.carro = this.carroObtenido;
        detalleVenta.precio = this.carroObtenido.precio;
        detalleVenta.subtotal = detalleVenta.cantidad * detalleVenta.precio;
        detalleVenta.descripcionC = this.carroObtenido.modelo + " " + this.carroObtenido.objMarca.descripcion
        this.addDetalleToStorage(detalleVenta);
        this.cargarDetalles();
        this.carroObtenido = new carroDto();
        this.formSearchCarro.reset();
        this.formCarro.reset();

      }

    }
  }



  // -- VENTA --
  realizarVenta() {

    let venta = new ventaDto();
    if (this.dataVentaIsCorrect()) {
      let clienteSession = sessionStorage.getItem("cliente")!;
      let cliente: clienteDto = JSON.parse(clienteSession);

      let detalleSession = sessionStorage.getItem("carrito")!;
      let detalle: detalleVentaDto[] = JSON.parse(detalleSession);

      let empleadoSession = sessionStorage.getItem("empleado")!;
      let empleado: EmpleadoDto = JSON.parse(empleadoSession);

      venta.fecha = new Date(Date.now());
      console.log(venta)
      venta.cliente = cliente;
      venta.empleado = empleado;
      venta.numserie = this.serie;
      for (let det of detalle) {
        venta.monto += det.subtotal;

      }
      for (let ind in detalle) {
        detalle[ind].venta = venta;
      }

      let ventaTransaction = new VentaTransaction();
      ventaTransaction.venta = venta;
      ventaTransaction.detalleVenta = detalle;
      this.ventaService.realizarVenta(ventaTransaction).subscribe({
        next: (value: any) => {
          console.log(value);
          this.cargarSerie();

          this.limpiarVentaSession();
        },
        error(err) {
          console.log(err)
        },
      });
    }
  }

  dataVentaIsCorrect(): boolean {
    let cliente = sessionStorage.getItem("cliente");
    let detalle = sessionStorage.getItem("carrito");

    if (cliente != null && detalle != null) {
      return true;
    }
    return false;
  }

  cargarSerie() {
    this.ventaService.obtenerUltimaVenta().subscribe({
      next: (value: ventaDto) => {
        this.serie = getSerie(value.id);
      },
      error: (error) => {
        console.log(error)
      }
    });
  }









  addDetalleToStorage(detalle: detalleVentaDto) {

    let carritoSession = sessionStorage.getItem("carrito");

    if (carritoSession == null) {
      let listCarrito: detalleVentaDto[] = []
      listCarrito.push(detalle)
      sessionStorage.setItem("carrito", JSON.stringify(listCarrito))

    } else {

      let indiceProducto = detalle.carro.id
      let listCarrito: detalleVentaDto[] = JSON.parse(carritoSession)

      let indiceExistsValue = this.obtenerIndiceDetalleVenta(indiceProducto, listCarrito);

      if (indiceExistsValue == -1) {
        listCarrito.push(detalle);
      } else {
        listCarrito[indiceExistsValue].cantidad += detalle.cantidad;
      }
      sessionStorage.setItem("carrito", JSON.stringify(listCarrito));
    }
  }



  obtenerIndiceDetalleVenta(id: number, list: detalleVentaDto[]): number {
    for (var index in list) {
      if (list[index].carro.id == id) {
        return parseInt(index);
      }
    }
    return -1;
  }


  cargarDetalles() {
    let carrito = sessionStorage.getItem("carrito");
    if (carrito != null) {

      let detallesFromStorage: detalleVentaDto[] = JSON.parse(carrito);
      this.detallesVenta = detallesFromStorage;
    } else {
      this.detallesVenta = []
    }
  }



  cargarCliente() {
    let cliente = sessionStorage.getItem("cliente");
    if (cliente != null) {
      let loadedClienteStorage: clienteDto = JSON.parse(cliente);
      this.clienteFromStorage = loadedClienteStorage;
    } else {
      this.clienteFromStorage = new clienteDto();
    }
  }

  limpiarVentaSession() {
    sessionStorage.removeItem("cliente");
    sessionStorage.removeItem("carrito");
    this.formSearchCarro.reset();
    this.formSearchCliente.reset();
    this.formCarro.reset();

    this.cargarCliente();
    this.cargarDetalles();
  }
}

import { Component, OnInit } from '@angular/core';
import { DetalleventaService } from '../services';

@Component({
  selector: 'app-detalle-venta',
  templateUrl: './detalle-venta.component.html',
  styleUrls: ['./detalle-venta.component.css']
})
export class DetalleVentaComponent implements OnInit {

  constructor(private DetVenService:DetalleventaService) { }

  ngOnInit(): void {
  }

}

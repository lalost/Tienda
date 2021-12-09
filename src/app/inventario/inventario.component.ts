import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../services';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  constructor(private InvService: InventarioService) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { VentasService } from '../services';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  constructor(private VenService:VentasService) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { CobroService } from '../services';

@Component({
  selector: 'app-cobro',
  templateUrl: './cobro.component.html',
  styleUrls: ['./cobro.component.css']
})
export class CobroComponent implements OnInit {

  constructor(private CobroService:CobroService) { }

  ngOnInit(): void {
  }

}

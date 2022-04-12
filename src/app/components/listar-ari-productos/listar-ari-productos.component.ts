import { Component, OnInit } from '@angular/core';
import { Ariproducto } from 'src/app/models/ariproducto';
import { AriproductosService } from 'src/app/services/ariproductos.service';

@Component({
  selector: 'app-listar-ari-productos',
  templateUrl: './listar-ari-productos.component.html',
  styleUrls: ['./listar-ari-productos.component.css']
})
export class ListarAriProductosComponent implements OnInit {
  listAriproductos: Ariproducto[] = []

  constructor(private _ariproductoService: AriproductosService) { }

  ngOnInit(): void {
    this._ariproductoService.getAriProduct().subscribe( data => {
      this.listAriproductos = data.product
      console.log(data.product)
    },error => {
      console.log(error);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import * as ol from 'openlayers';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const map = new ol.Map({
      view: new ol.View({
        center: [0, 0],
        zoom: 3
      }),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      target: 'map'
    });
  }

}

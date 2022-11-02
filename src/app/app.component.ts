import { Component,Pipe } from '@angular/core';
import { WheatherService } from './wheather.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
declare var google: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// @Pipe({ name: 'safe' })
export class AppComponent {
  constructor(private whthrService: WheatherService) {
   }
  wheatherDetails:any
  lat = 10.7867
  lng = 76.65
  title = 'open-wheather-app';
  options: any;
  overlays: any = []
  map = google.maps.Map;
  HimachalDistricts = [
    {
      name: 'Dharamsala',
      lat: '32.2190',
      lng: '76.3234'
    },
    {
      name: 'Kangra',
      lat: '32.06',
      lng: '76.36'
    },
    {
      name: 'Dalhousie',
      lat: '32.5387',
      lng: '75.9710'
    },
    {
      name: 'Shimla',
      lat: '31.1048',
      lng: '77.1734'
    },
    {
      name: 'Manali',
      lat: '32.2432',
      lng: '77.1892'
    },
    {
      name: 'Jorgindarnagar',
      lat: '32.0456',
      lng: '76.7236'
    },
    {
      name: 'Spiti valley',
      lat: '32.2461',
      lng: '78.0349'
    },
    {
      name: 'Mussoorie',
      lat: '30.4598',
      lng: '78.0644'
    },
    {
      name: 'Amritsar',
      lat: '31.6340',
      lng: '74.8723'
    }
  ]
  singleDistrict:any
  setMap(event: any) {
    this.map = event.map;
    console.log({ eventaa: event.map })
  }
  ngOnInit() {
    this.singleDistrict={
      name: 'Dharamsala',
      lat: 32.2190,
      lng: 76.3234
    }
    this.options = {
      center: { lat: Number(this.lat), lng: Number(this.lng) },
      zoom: 16
    }
    this.getWheatherDetails(this.lat,this.lng)

  }

  getWheatherDetails(lat:any,lng:any){
    this.whthrService.getWheatherDAta(lat, lng).subscribe((res) => {
      this.wheatherDetails =res

      this.map.setCenter({
        lat: Number(lat),
        lng: Number(lng)
      });
    })
  }

  
  selectDistrict() {
    if(this.singleDistrict){
      this.lat = this.singleDistrict.lat
      this.lng = this.singleDistrict.lng
      if (this.singleDistrict) {
        this.getWheatherDetails(this.lat,this.lng)
      }

    }
  }


}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-data-lihat',
  templateUrl: './data-lihat.page.html',
  styleUrls: ['./data-lihat.page.scss'],
})
export class DataLihatPage implements OnInit {
  nip: any;
  nama: any;
  alamat: any;
  no_hp: any;
  data: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public LoadingController: LoadingController
  ) {
    this.route.params.subscribe((param: any) => {
      this.nip = param.nip;
      console.log(this.nip);
      this.ambilData(this.nip);
    });
  }

  ngOnInit() {}

  ambilData(nip) {
    this._apiService.ambilData(nip).subscribe(
      (res: any) => {
        console.log('sukses', res);
        this.data = res;
      },
      (error: any) => {
        console.log('error', error);
        alert('Gagal Ambil Data');
      }
    );
  }
}

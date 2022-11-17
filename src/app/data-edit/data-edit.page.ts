import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-data-edit',
  templateUrl: './data-edit.page.html',
  styleUrls: ['./data-edit.page.scss'],
})
export class DataEditPage implements OnInit {
  nip: any;
  nama: any;
  alamat: any;
  no_hp: any;

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
        let data = res;
        //console.log(mahasiswa);
        this.nama = data.nama;
        this.alamat = data.alamat;
        this.no_hp = data.no_hp;
      },
      (error: any) => {
        console.log('error', error);
        alert('Gagal Ambil Data');
      }
    );
  }

  editData() {
    let url = this._apiService.apiURL() + '/edit.php';
    Http.request({
      method: 'POST',
      url: url,
      headers: { 'Content-Type': 'application/json' },
      data: {
        nip: this.nip,
        nama: this.nama,
        alamat: this.alamat,
        no_hp: this.no_hp,
      },
    }).then(
      (data) => {
        this.alertController
          .create({
            header: 'Notifikasi',
            message: 'Berhasil Edit Data',
            buttons: ['OK'],
          })
          .then((res) => {
            res.present();
          });
        this.router.navigateByUrl('/home');
      },
      (err) => {
        this.alertController
          .create({
            header: 'Notifikasi',
            message: 'Gagal Edit Data',
            buttons: ['OK'],
          })
          .then((res) => {
            res.present();
          });
      }
    );
  }
}

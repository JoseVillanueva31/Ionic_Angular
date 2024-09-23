import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'app-inicio-qr',
  templateUrl: './inicio-qr.page.html',
  styleUrls: ['./inicio-qr.page.scss'],
})
export class InicioQRPage implements OnInit {
  public menupag = [
    { title: 'Inicio', url: '/inicio-qr', icon: 'home' },
    { title: 'Cerrar sesión', url: '/home', icon: 'log-out' }
  ];
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}


}

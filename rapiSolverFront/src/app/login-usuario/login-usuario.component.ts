import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {

  usuario =new Usuario();
  usuariosGroup:Usuario[];

  constructor(private route: ActivatedRoute,private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  logear(){
    var num=0;
    var codigo;
    this.usuarioService.getCategoriesList().subscribe(
      usuariosGroup=>{
        this.usuariosGroup=usuariosGroup;
        usuariosGroup.forEach(element => {
           if(element.correo==this.usuario.correo && element.userPassword==this.usuario.userPassword){
            num=1;codigo=element.id;
           }
        });
        if (num==1) {
          window.location.href="listarServicios/"+codigo
        }
        if (num==0) {
          document.getElementById('mensaje2').style.display ='block'
          document.getElementById('mensaje').innerHTML = 'Correo electronico o contraseña incorrectos.';
        }
      }

    );

  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos=[
    {
      titulo:'Piano',
      descripcion: 'Aprende a interpretar este maravilloso instrumento, trae grandes beneficios contribuyendo en la mejora de la destreza mental y habilidades cognitivas, coordinacion e independencia del movimiento en el cuerpo.',
      imgUrl:'assets/img/imgCursos/pianoCurso.jpg'
    },
    {
      titulo:'Guitarra Acustica',
      descripcion:'Es un instrumento de cuerdas punzadas que trae beneficios de relajacion , estimulacion cerebral, aumento de la confianza y motivacion a la creatividad entre otros...',
      imgUrl:'/assets/img/imgCursos/guitarraAcustica.jpg'
    },
    {
      titulo:'Tecnica Vocal',
      descripcion:'Aprender a cantar es el sueño de muchas personas, por eso a traves de la tecnica vocal enseñamos diferentes procesos de interpretacion llevando la voz a un nuevo nivel impactando cualquier audiencia.',
      imgUrl:'assets/img/imgCursos/canto.jpg'
    },
    {
      titulo:'Guitarra Electrica',
      descripcion:'Es un instrumento deseado por grandes y pequeños el cual brinda grandes ventajas como la estimulacion cerebral, el aumento de la autoestima, concentracion y equilibrio emocional. ',
      imgUrl:'assets/img/imgCursos/guitarraElectrica.jpg'
    },
    {
      titulo:'Bateria',
      descripcion:'Es un instrumento de percusion admirado entre grandes y chicos, trae beneficios de coordinacion , concentracion , disciplina y confianza en si mismo.',
      imgUrl:'assets/img/imgCursos/bateria.jpg'
    },
    {
      titulo:'Violin',
      descripcion:'Es un instrumento supremamente apasionante, ya que al aprender a interpretarlo se desarrollan capacidades como la memoria auditiva, el autocontrol, la disciplina y la expresion de nuestros sentimientos de una manera creativa y unica.',
      imgUrl:'assets/img/imgCursos/violin.jpg'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from './entities/estudiante.entity';

@Injectable()
export class EstudianteService {

  private estudiantes: Estudiante[]=[
    {id:1, identificacion:'1311582033' , nombre:'Carlos'},
    {id:2, identificacion:'2' , nombre:'Dos'},
  ]

  create(createEstudianteDto: CreateEstudianteDto) {
    const estudiante = new Estudiante();
    estudiante.id=  Math.max( ... this.estudiantes.map(elemento => elemento.id),0 )+1 ;
    estudiante.nombre= createEstudianteDto.nombre;
    estudiante.identificacion= createEstudianteDto.identificacion;
    this.estudiantes.push(estudiante);
    return estudiante;
  }

  findAll() : Estudiante[] {
    return this.estudiantes;
  }

  findOne(id: number) {
    const estudiante =  this.estudiantes.find(estudiante=> estudiante.id===id);
    if (!estudiante) throw new NotFoundException(`ID ${id} not found`)
    return estudiante;
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    const { identificacion, nombre,   } = updateEstudianteDto;
    const estudiante = this.findOne(id);
    if (nombre) estudiante.nombre= nombre;

    this.estudiantes =  this.estudiantes.map( elemento=> {
      if (elemento.id===id) return estudiante;
      return elemento;
    } )

    return estudiante;

  }

  remove(id: number) {
    this.findOne(id);
    this.estudiantes =  this.estudiantes.filter(elemento=> elemento.id!== id);
  }
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudianteService = void 0;
const common_1 = require("@nestjs/common");
const estudiante_entity_1 = require("./entities/estudiante.entity");
let EstudianteService = class EstudianteService {
    constructor() {
        this.estudiantes = [
            { id: 1, identificacion: '1311582033', nombre: 'Carlos' },
            { id: 2, identificacion: '2', nombre: 'Dos' },
        ];
    }
    create(createEstudianteDto) {
        const estudiante = new estudiante_entity_1.Estudiante();
        estudiante.id = Math.max(...this.estudiantes.map(elemento => elemento.id), 0) + 1;
        estudiante.nombre = createEstudianteDto.nombre;
        estudiante.identificacion = createEstudianteDto.identificacion;
        this.estudiantes.push(estudiante);
        return estudiante;
    }
    findAll() {
        return this.estudiantes;
    }
    findOne(id) {
        const estudiante = this.estudiantes.find(estudiante => estudiante.id === id);
        if (!estudiante)
            throw new common_1.NotFoundException(`ID ${id} not found`);
        return estudiante;
    }
    update(id, updateEstudianteDto) {
        const { identificacion, nombre, } = updateEstudianteDto;
        const estudiante = this.findOne(id);
        if (nombre)
            estudiante.nombre = nombre;
        this.estudiantes = this.estudiantes.map(elemento => {
            if (elemento.id === id)
                return estudiante;
            return elemento;
        });
        return estudiante;
    }
    remove(id) {
        this.findOne(id);
        this.estudiantes = this.estudiantes.filter(elemento => elemento.id !== id);
    }
};
EstudianteService = __decorate([
    (0, common_1.Injectable)()
], EstudianteService);
exports.EstudianteService = EstudianteService;
//# sourceMappingURL=estudiante.service.js.map
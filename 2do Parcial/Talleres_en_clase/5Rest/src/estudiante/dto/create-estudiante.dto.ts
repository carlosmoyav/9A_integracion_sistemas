import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateEstudianteDto {
    @IsString()
    @IsNotEmpty()
    identificacion:string;

    @IsString()
    @IsNotEmpty()
    nombre:string;
}

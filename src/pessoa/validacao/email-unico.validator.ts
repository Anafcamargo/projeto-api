import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuariosArmazenados } from "../pessoa.dm";
import {Injectable} from "@nestjs/common"

@Injectable()
@ValidatorConstraint({ async:true})
export class emailUnicoValidator implements ValidatorConstraintInterface{
    constructor(private Usuarios : UsuariosArmazenados){

    }
    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const validarEmail = await this.Usuarios.validaEmail(value);
        return validarEmail;
    }
}

export const EmailUnico = (opcoesValidacao:ValidationOptions) => {
    return (objeto: object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesValidacao,
            constraints:[],
            validator: emailUnicoValidator
        })
    }
}
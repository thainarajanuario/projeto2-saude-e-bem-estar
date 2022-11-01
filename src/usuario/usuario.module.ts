import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Bcrypt } from "src/auth/bcrypt/bcrypt";
import { UsuarioController } from "./controller/usuario.controller";
import { Usuario } from "./entitie/usuario.entity";
import { UsuarioService } from "./service/usuario.service";

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    providers: [UsuarioService,Bcrypt],
    controllers: [UsuarioController],
    exports: [TypeOrmModule],

})
    export class UsuarioModule{}

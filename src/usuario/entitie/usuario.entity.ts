import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { Produto } from "src/produto/entitie/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_usuario"})
   export class Usuario{


   @PrimaryGeneratedColumn()
   id: number


   @IsNotEmpty()
   @MaxLength(40)
   @Column({length: 255, nullable: false})
   nome: string

   @IsEmail()
   @Column({length: 255, nullable: false})
   usuario: string

    
   @MaxLength(40)
   @Column({length: 255, nullable: false})
   foto: string


   @IsNotEmpty()
   @MinLength(8)
   @Column({length: 100, nullable: false})
   senha: string


  @OneToMany(() => Produto, (Produto) => Produto.usuario)
  produto: Produto[]

   }
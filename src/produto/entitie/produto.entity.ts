import { IsNotEmpty, MaxLength } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Usuario } from "src/usuario/entitie/usuario.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity ({name: "tb_produto"})
  export class Produto{


    @PrimaryGeneratedColumn()
    id: number


    @IsNotEmpty()
    @MaxLength(40)
    @Column({length: 255, nullable: false})
    nome: string

    @Column()
    preco: number

    @Column({default: false})
    disponibilidade: boolean

    
    @Column({default: false})
    reutilizavel: boolean

    @ManyToOne(() => Categoria, (Categoria) => Categoria.produto,{
        onDelete: "CASCADE"
    })
    categoria: Categoria[]


    @ManyToOne(() => Usuario, (Usuario) => Usuario.produto,{
      onDelete: "CASCADE"

    })
    usuario: Usuario[]
  }
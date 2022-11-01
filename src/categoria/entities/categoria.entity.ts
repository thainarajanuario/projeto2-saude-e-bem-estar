import { IsNotEmpty, MaxLength } from "class-validator";
import { Produto } from "src/produto/entitie/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity ({name: "tb_categoria"})
  export class Categoria{


    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(40)
    @Column({length: 255, nullable: false})
     nome: string


    @Column({default: false})
      doacao: boolean
  

    @OneToMany(() => Produto, (Produto) => Produto.categoria,{
      onDelete: "CASCADE"
  })
  produto: Produto[]
    
  }


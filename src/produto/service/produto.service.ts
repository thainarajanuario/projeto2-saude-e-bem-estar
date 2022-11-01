import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Produto } from "../entitie/produto.entity";

@Injectable()
    export class ProdutoService{ 
        constructor(
            @InjectRepository(Produto)
            private produtoRepository: Repository<Produto>
        ){}

    async findAll(): Promise<Produto[]>{
        return await this.produtoRepository.find({
            relations:{
                categoria: true
            }
        })
    }

    async findById(id: number): Promise<Produto> {

        let produto = await this.produtoRepository.findOne({
            where: {
                id
            },
            relations:{
                categoria: true
            }
        })

    if (!produto)
        throw new HttpException('Produto não existe', HttpStatus.NOT_FOUND)
    return produto
    }

    async findByNome(nome: string):Promise<Produto[]>{
        return await this.produtoRepository.find({
            where: {
                nome: ILike(`%${nome}%`)
            },
            relations:{
                categoria: true
            }
        })
    }

    async findByPreco(preco: number):Promise<Produto[]>{
        return await this.produtoRepository.find({})
    }

    async findByDisponibilidade(disponibilidade: boolean): Promise<Produto[]>{
        return await this.produtoRepository.find({})

    }

    async findByReutilizavel(reutilizavel: boolean): Promise<Produto[]>{
        return await this.produtoRepository.find({})

    }

    async create(produto: Produto): Promise<Produto> {
        return await this.produtoRepository.save(produto)
    }

    async update(produto: Produto): Promise<Produto> {
        let buscarProduto = await this.findById(produto.id)
    
            throw new HttpException ('Produto não existe', HttpStatus.NOT_FOUND)

        return await this.produtoRepository.save(produto)    
    }

    async delete(id: number): Promise<DeleteResult>{
        let buscarProduto = await this.findById(id)

        if (!buscarProduto)
            throw new HttpException('Produto não encontrada', HttpStatus.NOT_FOUND)

        return await this.produtoRepository.delete(id)
    }

}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CategoriaModule } from './categoria/categoria.module';
import { Categoria } from './categoria/entities/categoria.entity';
import { Produto } from './produto/entitie/produto.entity';
import { ProdutoModule } from './produto/produto.module';
import { Usuario } from './usuario/entitie/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_saudeebemestar',
      entities: [Categoria, Usuario, Produto],
      synchronize: true
    }),

    CategoriaModule,
    UsuarioModule,
    ProdutoModule,
    AuthModule

    
    


  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

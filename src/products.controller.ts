import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './Iproducts';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
//devuelve todos los productos existentes usando el metodo findAll del servicio
  findAll(): Product[] {
    return this.productsService.findAll();
  }

  @Get(':id')
//devuelve los datos del producto que corresponde con el id proporcionado, utiliza el metodo findById del servicio
  findById(@Param('id') id: string): Product {
    return this.productsService.findById(id);
  }

  @Post()
//crea un nuevo producto con la información que se pasa en el body 
  create(@Body() product: Product): Product {
    return this.productsService.create(product);
  }

  @Put(':id')
//se actualiza un producto existente basado en el ID que se pasa como parámetro mas 
//la información que se proporciona en el body, usando el método update del servicio ProductsService
  update(@Param('id') id: string, @Body() updatedProducts: Product): Product {
    return this.productsService.update(id, updatedProducts);
  }

  @Delete(':id')
//elimina un producto específico de acuerdo al id  pasado como parametro, usando el método delete del servicio ProductsService
  delete(@Param(':id') id: string): Product {
    return this.productsService.delete(id);
  }
}

// imports from @nestjs/common
import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create.product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  create(@Body() createCatDto: CreateProductDto) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query: CreateProductDto) {
    return `This action returns all cats (limit: ${query.title} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(
    @Param('title') title: string,
    @Body() updateCatDto: CreateProductDto,
  ) {
    return `This action updates a #${title} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { createRouteDTO } from 'src/dto/route.dto';
import { Route } from '../interface/Route';
import { RoutesService } from './routes.service';

@Controller('routes')
export class RoutesController {
  constructor(private routesService: RoutesService) {}
  @Get()
  getAllRoutes(): Promise<object> {
    return this.routesService.getAllRoutes();
  }
  @Post()
  createRoute(@Body() body: createRouteDTO): Promise<object> {
    return this.routesService.createRoute(body);
  }
}

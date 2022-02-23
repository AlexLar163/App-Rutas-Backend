import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createRouteDTO } from 'src/dto/route.dto';
import { RoutesService } from './routes.service';

@Controller('routes')
export class RoutesController {
  constructor(private routesService: RoutesService) {}
  @Get('/getAllRoutes')
  getAllRoutes(): Promise<object> {
    return this.routesService.getAllRoutes();
  }
  @Post('/getDifficultRoutes')
  getDifficultRoutes(@Body() body): Promise<object> {
    return this.routesService.getDifficultRoutes(body.difficulty);
  }
  @Post('/getSearchRoutes')
  getSearchRoutes(@Body() body): Promise<object> {
    return this.routesService.getSearchRoutes(body);
  }
  @Post('/createRoute')
  createRoute(@Body() body: createRouteDTO): Promise<object> {
    return this.routesService.createRoute(body);
  }
  @Post('/getOneRoute')
  getOneRoute(@Body() body: createRouteDTO): Promise<object> {
    return this.routesService.getOneRoute(body);
  }
}

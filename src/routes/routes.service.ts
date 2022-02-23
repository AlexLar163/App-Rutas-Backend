import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createRouteDTO } from 'src/dto/route.dto';
import { Route } from '../interface/Route';

@Injectable()
export class RoutesService {
  constructor(@InjectModel('Routes') private routesModel: Model<Route>) {}
  async getAllRoutes(): Promise<object> {
    return await this.routesModel.find();
  }
  async getDifficultRoutes(difficulty): Promise<object> {
    return await this.routesModel.find({ difficulty: difficulty });
  }

  async createRoute(body: createRouteDTO): Promise<object> {
    return await this.routesModel.create(body);
  }
  async getOneRoute(body: createRouteDTO): Promise<object> {
    return await this.routesModel.findById(body);
  }
  async getSearchRoutes(body: createRouteDTO): Promise<object> {
    return await this.routesModel.find({ name: body.name }).exec();
  }
}

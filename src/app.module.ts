import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './schemas/user.schema';
import { RoutesService } from './routes/routes.service';
import { RoutesController } from './routes/routes.controller';
import { MyRoutesService } from './my-routes/my-routes.service';
import { MyRoutesController } from './my-routes/my-routes.controller';
import { routeSchema } from './schemas/route.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/bd_app_rutes'),
    MongooseModule.forFeature([{ name: 'Users', schema: userSchema }]),
    MongooseModule.forFeature([{ name: 'Routes', schema: routeSchema }]),
  ],
  controllers: [AppController, UserController, RoutesController, MyRoutesController],
  providers: [AppService, UserService, RoutesService, MyRoutesService],
})
export class AppModule {}

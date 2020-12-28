import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Environment, EnvironmentSchema } from './schema';
import { EnvironmentResolver } from './environment.resolver';
import { EnvironmentService } from './environment.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Environment.name,
      schema: EnvironmentSchema,
    }]),
  ],
  providers: [
    EnvironmentResolver,
    EnvironmentService,
  ],
})
export class EnvironmentModule { }

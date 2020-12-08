import { Module } from '@nestjs/common';
import { EnvironmentService } from './environment.service';
import { EnvironmentResolver } from './environment.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Environment, EnvironmentSchema } from './schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Environment.name,
      schema: EnvironmentSchema,
    }]),
  ],
  providers: [
    EnvironmentService,
    EnvironmentResolver
  ],
})
export class EnvironmentModule {}

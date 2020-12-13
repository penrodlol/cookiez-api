import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { CookieModule } from './cookie/cookie.module';
import { EnvironmentModule } from './environment/environment.module';
import { TypeModule } from './type/type.module';

@Module({
  imports: [
    CookieModule,
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot({      
      installSubscriptionHandlers: true,
      context: ({ req }) => ({ req }),
      autoSchemaFile: 'schema.gql', 
      useGlobalPrefix: true,
      path: '/cookiez',
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    EnvironmentModule,
    TypeModule,
  ],
})
export class AppModule { }

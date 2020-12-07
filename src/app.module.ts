import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { CookieModule } from './cookie/cookie.module';

@Module({
  imports: [
    CookieModule,
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot({      
      autoSchemaFile: 'schema.gql', 
      path: '/cookiez',
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
})
export class AppModule { }

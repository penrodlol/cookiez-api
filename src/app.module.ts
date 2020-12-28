import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { CookieModule } from './feature/cookie/cookie.module';
import { EnvironmentModule } from './feature/environment/environment.module';
import { TypeModule } from './feature/type/type.module';
import { AuthModule } from './core/auth/auth.module';

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
    AuthModule,
  ],
})
export class AppModule { }

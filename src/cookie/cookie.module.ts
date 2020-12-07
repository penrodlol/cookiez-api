import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cookie, CookieSchema } from './schema';
import { CookieResolver } from './cookie.resolver';
import { CookieService } from './cookie.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Cookie.name,
      schema: CookieSchema,
    }]),
  ],
  providers: [
    CookieResolver,
    CookieService,
  ],
})
export class CookieModule { }

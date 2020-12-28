import { INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { GqlAuthGuard } from "./core/auth/auth-guard";
import { ExceptionsFilter } from "./core/exception/exception.filter";

export async function createApp(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix("api");
  app.useGlobalFilters(new ExceptionsFilter());
  app.useGlobalGuards(new GqlAuthGuard());
  await app.init();
  return app;
}
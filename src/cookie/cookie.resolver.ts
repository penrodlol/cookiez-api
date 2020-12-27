import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/auth-guard';
import { CookieService } from './cookie.service';
import { AddCookieDTO, DeleteCookieDTO, UpdateCookieDTO } from './dto';
import { Cookie } from './schema';

@Resolver()
export class CookieResolver {
  constructor(private cookiez: CookieService) { }

  @Query(() => [Cookie], { name: 'cookies' })
  @UseGuards(GqlAuthGuard)
  async getCookiez() {
    return this.cookiez.findAll();
  }

  @Mutation(() => Cookie)
  @UseGuards(GqlAuthGuard)
  async updateCookie(
    @Args('dto', {
      type: () => UpdateCookieDTO
    }) dto: UpdateCookieDTO
  ) {
    return this.cookiez.updateOne(dto);
  }

  @Mutation(() => Cookie)
  @UseGuards(GqlAuthGuard)
  async addCookie(
    @Args('dto', {
      type: () => AddCookieDTO
    }) dto: AddCookieDTO
  ) {
    return this.cookiez.addOne(dto);
  }

  @Mutation(() => Cookie)
  @UseGuards(GqlAuthGuard)
  async deleteCookie(
    @Args('dto', {
      type: () => DeleteCookieDTO
    }) dto: DeleteCookieDTO
  ) {
    return this.cookiez.deleteOne(dto);
  }
}

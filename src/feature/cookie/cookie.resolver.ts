import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UID } from '../../shared/decorators';
import { CookieService } from './cookie.service';
import { AddCookieDTO, DeleteCookieDTO, UpdateCookieDTO } from './dto';
import { Cookie } from './schema';

@Resolver()
export class CookieResolver {
  constructor(private cookiez: CookieService) { }

  @Query(() => [Cookie], { name: 'cookies' })
  async getCookiez(
    @UID() uid: string,
  ) {
    return this.cookiez.findAll(uid);
  }

  @Mutation(() => Cookie)
  async updateCookie(
    @Args('dto', {
      type: () => UpdateCookieDTO
    }) dto: UpdateCookieDTO
  ) {
    return this.cookiez.updateOne(dto);
  }

  @Mutation(() => Cookie)
  async addCookie(
    @UID() uid: string,
    @Args('dto', {
      type: () => AddCookieDTO
    }) dto: AddCookieDTO
  ) {
    return this.cookiez.addOne(dto, uid);
  }

  @Mutation(() => Cookie)
  async deleteCookie(
    @Args('dto', {
      type: () => DeleteCookieDTO
    }) dto: DeleteCookieDTO
  ) {
    return this.cookiez.deleteOne(dto);
  }
}

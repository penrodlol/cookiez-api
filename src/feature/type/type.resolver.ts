import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TypeService } from './type.service';
import { AddTypeDTO, DeleteTypeDTO, UpdateTypeDTO } from './dto';
import { Type } from './schema';
import { UID } from '../../shared/decorators';

@Resolver()
export class TypeResolver {
  constructor(private Typez: TypeService) { }

  @Query(() => [Type], { name: 'types' })
  async getTypez(
    @UID() uid: string,
  ) {
    return this.Typez.findAll(uid);
  }

  @Mutation(() => Type)
  async updateType(
    @Args('dto', {
      type: () => UpdateTypeDTO
    }) dto: UpdateTypeDTO
  ) {
    return this.Typez.updateOne(dto);
  }

  @Mutation(() => Type)
  async addType(
    @UID() uid: string,
    @Args('dto', {
      type: () => AddTypeDTO
    }) dto: AddTypeDTO
  ) {
    return this.Typez.addOne(dto, uid);
  }

  @Mutation(() => Type)
  async deleteType(
    @Args('dto', {
      type: () => DeleteTypeDTO
    }) dto: DeleteTypeDTO
  ) {
    return this.Typez.deleteOne(dto);
  }
}

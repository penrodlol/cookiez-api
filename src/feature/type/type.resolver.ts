import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TypeService } from './type.service';
import { AddTypeDTO, DeleteTypeDTO, UpdateTypeDTO } from './dto';
import { Type } from './schema';

@Resolver()
export class TypeResolver {
  constructor(private Typez: TypeService) { }

  @Query(() => [Type], { name: 'types' })
  async getTypez() {
    return this.Typez.findAll();
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
    @Args('dto', {
      type: () => AddTypeDTO
    }) dto: AddTypeDTO
  ) {
    return this.Typez.addOne(dto);
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

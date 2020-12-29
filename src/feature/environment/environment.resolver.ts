import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EnvironmentService } from './environment.service';
import { AddEnvironmentDTO, DeleteEnvironmentDTO, UpdateEnvironmentDTO } from './dto';
import { Environment } from './schema';
import { UID } from 'src/shared/decorators';

@Resolver()
export class EnvironmentResolver {
  constructor(private environments: EnvironmentService) { }

  @Query(() => [Environment], { name: 'environments' })
  async getEnvironment(
    @UID() uid: string,
  ) {
    return this.environments.findAll(uid);
  }

  @Mutation(() => Environment)
  async updateEnvironment(
    @Args('dto', {
      type: () => UpdateEnvironmentDTO
    }) dto: UpdateEnvironmentDTO
  ) {
    return this.environments.updateOne(dto);
  }

  @Mutation(() => Environment)
  async addEnvironment(
    @UID() uid: string,
    @Args('dto', {
      type: () => AddEnvironmentDTO
    }) dto: AddEnvironmentDTO
  ) {
    return this.environments.addOne(dto, uid);
  }

  @Mutation(() => Environment)
  async deleteEnvironment(
    @Args('dto', {
      type: () => DeleteEnvironmentDTO
    }) dto: DeleteEnvironmentDTO
  ) {
    return this.environments.deleteOne(dto);
  }
}

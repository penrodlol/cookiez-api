import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EnvironmentService } from './environment.service';
import { AddEnvironmentDTO, DeleteEnvironmentDTO, UpdateEnvironmentDTO } from './dto';
import { Environment } from './schema';

@Resolver()
export class EnvironmentResolver {
  constructor(private environments: EnvironmentService) { }

  @Query(() => [Environment], { name: 'environments' })
  async getEnvironment() {
    return this.environments.findAll();
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
    @Args('dto', {
      type: () => AddEnvironmentDTO
    }) dto: AddEnvironmentDTO
  ) {
    return this.environments.addOne(dto);
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

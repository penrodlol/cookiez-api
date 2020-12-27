import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EnvironmentService } from './environment.service';
import { AddEnvironmentDTO, DeleteEnvironmentDTO, UpdateEnvironmentDTO } from './dto';
import { Environment } from './schema';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/auth-guard';

@Resolver()
export class EnvironmentResolver {
  constructor(private environments: EnvironmentService) { }

  @Query(() => [Environment], { name: 'environments' })
  @UseGuards(GqlAuthGuard)
  async getEnvironment() {
    return this.environments.findAll();
  }

  @Mutation(() => Environment)
  @UseGuards(GqlAuthGuard)
  async updateEnvironment(
    @Args('dto', {
      type: () => UpdateEnvironmentDTO
    }) dto: UpdateEnvironmentDTO
  ) {
    return this.environments.updateOne(dto);
  }

  @Mutation(() => Environment)
  @UseGuards(GqlAuthGuard)
  async addEnvironment(
    @Args('dto', {
      type: () => AddEnvironmentDTO
    }) dto: AddEnvironmentDTO
  ) {
    return this.environments.addOne(dto);
  }

  @Mutation(() => Environment)
  @UseGuards(GqlAuthGuard)
  async deleteEnvironment(
    @Args('dto', {
      type: () => DeleteEnvironmentDTO
    }) dto: DeleteEnvironmentDTO
  ) {
    return this.environments.deleteOne(dto);
  }
}

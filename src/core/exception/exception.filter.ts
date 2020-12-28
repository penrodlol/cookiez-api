import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { ExceptionMessages } from './exception-messages.enum';

@Catch()
export class ExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    console.error(exception);

    const message = exception.status === 401 ?
      ExceptionMessages.UNAUTHORIZED :
      ExceptionMessages.INTERNAL_SERVER_ERROR;

    return host.getType().includes('graphql') ?
      new GraphQLError(message) :
      new Error(message);
  }
}

import { inject, injectable } from 'inversify';
import { BaseMiddleware } from 'inversify-express-utils';

import { AuthService } from '../../Service/AuthService/AuthService';
import { LoggerService } from '../../Service/LoggerService/LoggerService';
import { TYPES } from '../../TYPES';

@injectable()
export class LocalAuthMiddleware extends BaseMiddleware {
  public handler = this.auth.LocalAuthMiddleware;
  public constructor(
    @inject(TYPES.service.logger) private readonly logger: LoggerService,
    @inject(TYPES.service.auth) private readonly auth: AuthService
  ) {
    super();
  }
}

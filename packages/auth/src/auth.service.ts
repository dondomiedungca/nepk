import { Inject, Injectable } from '@nestjs/common';
import { Options } from './auth.module';

@Injectable()
export class AuthService {
  private readonly envConfig: Options;

  constructor(@Inject('AUTH_OPTIONS') private options: Options) {
    this.envConfig = options;
  }

  get<T extends keyof Options>(key: T): Options[T] {
    return this.envConfig[key];
  }
}

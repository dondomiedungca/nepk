import { DynamicModule, Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';

export interface Options {
  private_key: string;
  public_key: string;
}

@Global()
@Module({})
export class AuthModule {
  static register(options: Options): DynamicModule {
    return {
      module: AuthModule,
      providers: [
        {
          provide: 'AUTH_OPTIONS',
          useValue: options,
        },
        AuthService,
        ,
      ],
      exports: [AuthService],
    };
  }
}

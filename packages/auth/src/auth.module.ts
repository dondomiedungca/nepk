import { DynamicModule, Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';

export interface Options {
  host: string;
  username: string;
  password: string;
  port: number;
  database: string;
}

@Global()
@Module({
  imports: [],
  providers: [AuthService],
  exports: [AuthService],
})
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
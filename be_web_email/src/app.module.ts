import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InjectConnection, MongooseModule } from '@nestjs/mongoose';

import { Connection } from 'mongoose';
import { I18nModule } from 'nestjs-i18n';
import * as path from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LocaleModule } from './locale/locale.module';

const modules = [
  UserModule
]

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URL),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      fallbacks: {
        'ro': 'ro',
      },
      loaderOptions: {
        path: path.join(__dirname, './i18n/'),
        watch: true,
      },
    }),
    ...modules,
    LocaleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  @InjectConnection() private connection: Connection;

  onModuleInit() {
    if (this.connection) {
      console.log('🚀 database connected');
    }
  }
}

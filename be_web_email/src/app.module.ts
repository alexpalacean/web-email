import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InjectConnection, MongooseModule } from '@nestjs/mongoose';

import { Connection } from 'mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

const modules = [
  UserModule
]

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URL),
    ...modules
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

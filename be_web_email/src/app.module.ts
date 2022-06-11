import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InjectConnection, MongooseModule } from '@nestjs/mongoose';

import { Connection } from 'mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.DB_URL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  @InjectConnection() private connection: Connection;

  onModuleInit() {
    if(this.connection){
      console.log('🚀 database connected');
    }
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserController } from './user/user.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}

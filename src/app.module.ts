import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConvertorService } from './convertor.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ConvertorService, ConvertorService],
})
export class AppModule {}

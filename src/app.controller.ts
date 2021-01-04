import { Controller, Logger } from '@nestjs/common';
import { ConvertorService } from './convertor.service';
import { MessagePattern } from '@nestjs/microservices';
@Controller()
export class AppController {
  // Create a logger instance
  private logger = new Logger('AppController');

  // Inject the convertor service
  constructor(private convertorService: ConvertorService) {}

  // Define the message pattern for this method
  @MessagePattern('convert')
  // Define the logic to be executed
  async convert(data) {
    this.logger.log('Converting image to ' + data.requestedImageType); // Log something on every call
    return this.convertorService.convert(data); // use convertor service to change image type & return
  }
}

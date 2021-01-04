import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp';
@Injectable()
export class ConvertorService {
  public convert(data) {
    const buffer = new Buffer(data.image);
    const x = sharp(buffer).toFormat(data.requestedImageType).toBuffer();
    return x;
  }
}

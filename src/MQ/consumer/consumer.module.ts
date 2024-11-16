import { Module } from '@nestjs/common';
import { ConsumerService } from './service/consumer.service';

@Module({
  providers: [ConsumerService],
})
export class ConsumerModule {}

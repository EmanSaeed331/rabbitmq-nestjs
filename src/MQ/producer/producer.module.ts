import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProducerService } from './service/producer.service';

@Module({
  imports: [ConfigModule],
  providers: [ProducerService],
  exports: [ProducerService],
})
export class ProducerModule {}

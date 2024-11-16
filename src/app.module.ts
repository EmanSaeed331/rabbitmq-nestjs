import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProducerModule } from './MQ/producer/producer.module';
import { TaskTestController } from './task-test/task-test.controller';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'main_exchange', // name of exchange
          type: 'topic', // type of exchange ( direct , topic , fanout)
        },
      ],
      uri: 'amqp://guest:guest@localhost:5672',
      connectionInitOptions: { wait: false },
    }),
    ProducerModule,
  ],
  controllers: [AppController, TaskTestController],
  providers: [AppService],
})
export class AppModule {}

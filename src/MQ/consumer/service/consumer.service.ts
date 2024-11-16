import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ConsumerService {
  private readonly logger = new Logger(ConsumerService.name);

  @RabbitSubscribe({
    exchange: 'main_exchange',
    routingKey: 'task.create',
    queue: 'task_create_queue',
  })
  async handleCreateTask(message: any) {
    this.logger.log(`Received create task message: ${JSON.stringify(message)}`);
    try {
      this.logger.log(`Task created: ${message.taskId}`);
    } catch (error) {
      this.logger.error(`Error creating task: ${error.message}`);
      throw error;
    }
  }
}

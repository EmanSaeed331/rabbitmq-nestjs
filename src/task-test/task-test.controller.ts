import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ProducerService } from 'src/MQ/producer/service/producer.service';

@Controller('task-test')
export class TaskTestController {
  constructor(private readonly producerService: ProducerService) {}

  @Post('create')
  async createTask(@Body() taskData: any) {
    try {
      await this.producerService.sendMessage('task.create', taskData);
      return { message: 'Task created successfully', task: taskData };
    } catch (err) {
      throw new HttpException(
        { message: 'Failed to send task to RabbitMQ', error: err.message },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

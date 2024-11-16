import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class ProducerService {
  private readonly exchange: string;

  constructor(
    private readonly configSvc: ConfigService,
    private readonly amqpConnection: AmqpConnection,
  ) {
    this.exchange = this.configSvc.get<string>('EXCHANGE');
  }

  async sendMessage(routingKey: string, message: any) {
    console.log(`Sending Message to exchange ${this.exchange}`);
    await this.amqpConnection.publish(this.exchange, routingKey, message);
  }
}

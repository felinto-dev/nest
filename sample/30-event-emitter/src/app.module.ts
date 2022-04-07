import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { SelfTest } from './self-test.service';

@Module({
  imports: [EventEmitterModule.forRoot(), OrdersModule],
  controllers: [AppController],
  providers: [AppService, SelfTest],
})
export class AppModule {}

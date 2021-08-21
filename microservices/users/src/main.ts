import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:50051',
      package: 'users',
      protoPath: join(__dirname, 'users.proto')
    }
  });
  app
    .listen()
    .then(() => console.log('users microservice is listening'))
    .catch((error) => console.log('error:', error));
}
void bootstrap();

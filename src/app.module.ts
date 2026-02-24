import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TicketsModule } from './tickets/tickets.module';
import { TicketCommentsModule } from './ticket_comments/ticket_comments.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        password: configService.get('DB_PASS'),
        username: configService.get('DB_USER'),
        port: configService.get('DB_PORT'),
        database: configService.get('DB_NAME'),
        autoLoadEntities: true,
        entities: [],
        synchronize: true,
      }),

      inject: [ConfigService],
    }),
    UsersModule,
    TicketsModule,
    AuthModule,
    TicketCommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

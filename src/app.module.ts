import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import devConfig from './config/dev.config';
import { configValidationSchema } from './config/validation.config';
import { TypeOrmConfigService } from './config/orm.config';
import { UsersModule } from './users/users.module';
import { WishesModule } from './wishes/wishes.module';
import { WishlistsModule } from './wishlists/wishlists.module';
import { OffersModule } from './offers/offers.module';
import { AuthModule } from './auth/auth.module';
import { HashingModule } from './hashing/hashing.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.dev'],
      load: [devConfig],
      isGlobal: true,
      validationSchema: configValidationSchema,
    }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    UsersModule,
    WishesModule,
    WishlistsModule,
    OffersModule,
    AuthModule,
    HashingModule,
  ],
})
export class AppModule {}

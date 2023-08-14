import { Module } from '@nestjs/common';
import { AlbumConroller } from './album.controller';
import { UsersConroller } from './users.controller';

@Module({
  // imports: [],

  controllers: [UsersConroller, AlbumConroller],

  // providers: [AppService],
})
export class AppModule {}

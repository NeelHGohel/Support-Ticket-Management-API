import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AuthDto {
  @ApiProperty({ example: 'neel' })
  @IsString()
  username: string;

  @ApiProperty({ example: '123456' })
  @IsString()
  password: string;
}

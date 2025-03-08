import { PartialType } from '@nestjs/mapped-types';
import { AuthenticateDto } from './create-auth.dto';

export class UpdateAuthDto extends PartialType(AuthenticateDto) {
    
}

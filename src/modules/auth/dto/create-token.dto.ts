import { PartialType } from "@nestjs/mapped-types";
import { Token } from "../entities/token.entity";

export class CreateTokenDTO extends PartialType(Token){
    token: string;
    user_id: string;
    expire_date: Date;
}
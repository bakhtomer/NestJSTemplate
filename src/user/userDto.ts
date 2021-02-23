import { IsEmail, IsInt, IsNotEmpty, IsString} from 'class-validator';
export class CreateUserDto{
@IsEmail()
email:string;

@IsInt()
age:number;

@IsString()
@IsNotEmpty()
name:string;

}
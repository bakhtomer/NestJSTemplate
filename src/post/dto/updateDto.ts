import { IsNotEmpty, IsString } from "class-validator";

export class UpdatePostDto{
    @IsString()
    @IsNotEmpty()
    title:string;

    @IsString()
    description:string;

}

export class CreatePostDto{
    @IsString()
    @IsNotEmpty()
    title:string;
    
    @IsString()
    description:string;
}
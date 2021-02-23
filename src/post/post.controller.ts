import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './dto/updateDto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService){

    }
    @Get()
    async getAllPosts(){
        return this.postService.getAllPosts();
    }
    @Get(':id')
    async getPostById(@Param('id') id:string){
        return this.postService.getPostById(id);
    }
    @Put(':id')
    async updatePost(@Param('id') id:string, @Body(new ValidationPipe()) updatePost:UpdatePostDto){
         return this.postService.updatePost(id,updatePost);
    }
    @Post()
    async createPost(@Body(new ValidationPipe()) newPostDto:CreatePostDto){
        return this.postService.createPost(newPostDto);
    }
    @Delete(':id')
    async deletePost(@Param('id') id:String){
        return this.postService.deletePost(id);
    }
}

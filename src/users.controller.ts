import { Controller, HttpCode, HttpStatus, Res, Header, Redirect , Param, Body, Post} from "@nestjs/common";
import { Get, Req } from "@nestjs/common/decorators";
import { Request, Response } from "express";



@Controller("/users")

export class UsersConroller {
    @Get("/profile")
    // @Header("cache-contriol", "none")
    // @Header("bot-X", "A")
    // @HttpCode(200)
    @Redirect("/users/account")
    getProfile(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
        res.status(200)
        return {
            bot: "hello users"
        }
    }
    @Get("/account")
    getAccount(){
        return{
            bot2: "account user"
        }
    } 

    @Post("/videos")
        getVideos(@Body() createDto:Record<string, any>){
        console.log(createDto)
        return "success"

    }
}
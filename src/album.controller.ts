import { Controller, HttpCode } from "@nestjs/common";
import { Get, Req} from "@nestjs/common/decorators";
import { Request } from "express";



@Controller("/albums")

export class AlbumConroller{
    @Get()
    getProfile(){
        // console.log(req.params)
        return {
            bot:"albums"
        }
    }
}
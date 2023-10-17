import { Controller, Get, HttpServer} from '@nestjs/common';
import { AppService } from './app.service';
import * as axios from "axios";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get('/test')
  getApi():Promise<any> {
    return this.appService.getApi();
  }
  
}

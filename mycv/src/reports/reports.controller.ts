import { Body, Controller, Post } from '@nestjs/common';
import { CreateReportDto } from './dtos/create-reports.dto';

@Controller('reports')
export class ReportsController {
  @Post()
  createReport(@Body() body: CreateReportDto) {
    return 'report created';
  }
}

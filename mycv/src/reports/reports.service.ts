import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dtos/create-reports.dto';

@Injectable()
export class ReportsService {
  create(reportDto: CreateReportDto) {
    return 'report created';
  }
}

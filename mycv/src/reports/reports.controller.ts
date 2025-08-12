import { CurrentUser } from './../users/decorators/current-user.decorator';
import {
  Body,
  Controller,
  Patch,
  Post,
  UseGuards,
  Param,
} from '@nestjs/common';
import { CreateReportDto } from './dtos/create-reports.dto';
import { ReportsService } from './reports.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { User } from 'src/users/user.entity';
import { ReportDto } from './dtos/report.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { ApproveReportDto } from './dtos/approve-reports.dto';

@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}
  @Post()
  @UseGuards(AuthGuard)
  @Serialize(ReportDto)
  createReport(@Body() body: CreateReportDto, @CurrentUser() user: User) {
    if (!user) {
      throw new Error(
        'User is null or undefined - check CurrentUser decorator implementation',
      );
    }
    return this.reportsService.create(body, user);
  }

  @Patch('/:id')
  @UseGuards(AuthGuard)
  approveReport(@Param('id') id: string, @Body() body: ApproveReportDto) {}
}

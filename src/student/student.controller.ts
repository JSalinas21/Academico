import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  async getStudentsWithGrades() {
    return this.studentService.getStudentsWithGrades();
  }

  @Post()
  async createStudent(@Body('name') name: string) {
    return this.studentService.createStudent(name);
  }

  @Post(':id/grades/:gradeNumber')
  async createOrUpdateGrade(
    @Param('id', ParseIntPipe) id: number,
    @Param('gradeNumber', ParseIntPipe) gradeNumber: number,
    @Body('value') value: number,
  ) {
    return this.studentService.createOrUpdateGrade(id, value, gradeNumber);
  }

  @Delete(':id')
  async deleteStudent(@Param('id', ParseIntPipe) id: number) {
    return this.studentService.deleteStudent(id);
  }
}

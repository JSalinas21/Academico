import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';

@Module({
  imports: [PrismaModule],
  controllers: [StudentController],
  providers: [StudentService],
})
export class AppModule {}

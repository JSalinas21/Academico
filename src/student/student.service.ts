import { Injectable } from '@nestjs/common';
import { Grade, Student } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async getStudentsWithGrades(): Promise<(Student & { grades: Grade[] })[]> {
    return this.prisma.student.findMany({
      include: {
        grades: true,
      },
    });
  }

  async createStudent(name: string): Promise<Student> {
    return this.prisma.student.create({
      data: {
        name,
      },
    });
  }

  async createOrUpdateGrade(
    studentId: number,
    value: number,
    gradeNumber: number,
  ): Promise<Grade> {
    return this.prisma.grade.upsert({
      where: { studentId_gradeNumber: { studentId, gradeNumber } },
      update: { value },
      create: {
        studentId,
        value,
        gradeNumber,
      },
    });
  }

  async deleteStudent(studentId: number): Promise<Student> {
    await this.prisma.grade.deleteMany({
      where: { studentId },
    });
    return this.prisma.student.delete({
      where: { id: studentId },
    });
  }
}

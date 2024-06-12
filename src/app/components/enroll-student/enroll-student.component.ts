import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enroll-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enroll-student.component.html',
  styleUrls: ['./enroll-student.component.css']
})
export class EnrollStudentComponent implements OnInit {
  courseId!: string;
  students: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('course_id')!;
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  enroll(studentId: string): void {
    this.courseService.enrollStudent(this.courseId, studentId).subscribe(() => {
      alert('Student enrolled successfully');
    });
  }

  unenroll(studentId: string): void {
    this.courseService.unenrollStudent(this.courseId, studentId).subscribe(() => {
      alert('Student unenrolled successfully');
    });
  }
}

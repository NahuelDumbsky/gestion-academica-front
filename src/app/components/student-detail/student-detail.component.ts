import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.css'
})
export class StudentDetailComponent implements OnInit {
  student: any = {};
  isEditMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const studentId = this.route.snapshot.paramMap.get('student_id');
    if (studentId) {
      this.studentService.getStudent(studentId).subscribe((data) => {
        this.student = data;
        this.isEditMode = true;
      });
    }
  }

  saveStudent(): void{
    if (this.isEditMode) {
      this.studentService.updateStudent(this.student.studentId, this.student).subscribe(() => {
        this.router.navigate(['/students']);
      });
    } else {
      this.studentService.createStudent(this.student).subscribe(() => {
        this.router.navigate(['/students']);
      });
    }
  }

  deleteStudent(): void {
    if (this.isEditMode) {
      this.studentService.deleteStudent(this.student.studentId).subscribe(() => {
        this.router.navigate(['/students']);
      });
    }
  }

}

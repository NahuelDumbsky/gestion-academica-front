import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css',
})
export class CourseDetailComponent implements OnInit {
  course: any = {};
  isEditMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('course_id');
    if (courseId) {
      this.courseService.getCourse(courseId).subscribe((data) => {
        this.course = data;
        this.isEditMode = true;
      });
    }
  }

  saveCourse(): void {
    if (this.isEditMode) {
      this.courseService.updateCourse(this.course.courseId, this.course).subscribe(() => {
        this.router.navigate(['/courses']);
      });
    } else {
      this.courseService.createCourse(this.course).subscribe(() => {
        this.router.navigate(['/courses']);
      });
    }
  }

  deleteCourse(): void {
    if (this.isEditMode) {
      this.courseService.deleteCourse(this.course.courseId).subscribe(() => {
        this.router.navigate(['/courses']);
      });
    }
  }
}

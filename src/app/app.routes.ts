import { Routes } from '@angular/router';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { EnrollStudentComponent } from './components/enroll-student/enroll-student.component';

export const routes: Routes = [
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/new', component: CourseDetailComponent },
  { path: 'courses/:course_id', component: CourseDetailComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'students/new', component: StudentDetailComponent },
  { path: 'students/:student_id', component: StudentDetailComponent },
  { path: 'courses/:course_id/enroll', component: EnrollStudentComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' }
];

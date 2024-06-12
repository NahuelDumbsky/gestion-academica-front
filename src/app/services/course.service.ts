import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = 'http://api.ejemplo.com/courses';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getCourse(courseId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${courseId}`);
  }

  createCourse(course: any): Observable<any> {
    return this.http.post(this.baseUrl, course);
  }

  updateCourse(courseId: string, course: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${courseId}`, course);
  }

  deleteCourse(courseId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${courseId}`);
  }

  enrollStudent(courseId: string, studentId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/${courseId}/enroll/${studentId}`, {});
  }

  unenrollStudent(courseId: string, studentId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${courseId}/enroll/${studentId}`);
  }
}

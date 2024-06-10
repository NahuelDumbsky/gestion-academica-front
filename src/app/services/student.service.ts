import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseUrl = 'http://api.ejemplo.com/students';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getStudent(studentId: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/${studentId}`);
  }

  createStudent(studentId: any): Observable<any> {
    return this.http.post(this.baseUrl, studentId);
  }

  updateStudent(studentId: String, student: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${studentId}`, student);
  }

  deleteStudent(studentId: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${studentId}`);
  }
}

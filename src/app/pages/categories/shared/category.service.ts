import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';

import { Category } from './category.model';


@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    private apiPath: string = "api/categories";

    constructor(private http: HttpClient) { }

    getAll(): Observable<Category[]> {
        return this.http.get(this.apiPath).pipe(
            catchError(this.hadleError),
            map(this.jsonDataToCategories)
        )
    }

    getById(id_category: number): Observable<Category> {
        const url = `${this.apiPath}/${id_category}`;
        return this.http.get(url).pipe(
            catchError(this.hadleError),
            map(this.jsonDataToCategory)
        )
    }

    create(category: Category): Observable<Category> {
        return this.http.post(this.apiPath, category).pipe(
            catchError(this.hadleError),
            map(this.jsonDataToCategory)
        )
    }

    update(category: Category): Observable<Category> {
        const url = `${this.apiPath}/${category.id_categoria}`;
        return this.http.put(url, category).pipe(
            catchError(this.hadleError),
            map(() => category))
    }

    delete(id_categoria:number): Observable<any> {
        const url = `${this.apiPath}/${id_categoria}`;
        return this.http.delete(url).pipe(
            catchError(this.hadleError),
            map(() => null));
    }

    private jsonDataToCategories(jsonData: any[] ): Category[] {
        const categories: Category[] = [];
        jsonData.forEach(element => categories.push(element as Category));
        return(categories);
    }

    private jsonDataToCategory(jsonData: any): Category {
        return jsonData as Category;
    }

    private hadleError(error: any): Observable<any> {
        console.log("Erro na requisição => ", error);
        return(throwError(error));
    }
}

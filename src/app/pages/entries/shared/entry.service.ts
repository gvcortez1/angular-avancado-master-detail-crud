import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';
import { CategoryService } from '../../categories/shared/category.service';

import { Entry } from './entry.model';
import { Category } from '../../categories/shared/category.model';


@Injectable({
    providedIn: 'root'
})
export class EntryService {

    private apiPath: string = "api/entries";

    constructor(private http: HttpClient, private categoryService: CategoryService ) { }

    getAll(): Observable<Entry[]> {
        return this.http.get(this.apiPath).pipe(
            catchError(this.hadleError),
            map(this.jsonDataToEntries)
        )
    }

    getById(id_entry: number): Observable<Entry> {
        const url = `${this.apiPath}/${id_entry}`;
        console.log(url, "Entrou");

        return this.http.get(url).pipe(
            catchError(this.hadleError),
            map(this.jsonDataToEntry)
        )
    }

    create(entry: Entry): Observable<Entry> {

        return this.categoryService.getById(entry.id_categoria).pipe(
            flatMap(category => {
                entry.category = category;
                return this.http.post(this.apiPath, entry).pipe(
                    catchError(this.hadleError),
                    map(this.jsonDataToEntry)
                )
            })
        )
    }

    update(entry: Entry): Observable<Entry> {
        const url = `${this.apiPath}/${entry.id_entry}`;

        return this.categoryService.getById(entry.id_categoria).pipe(
            flatMap(category => {
                entry.category = category;
                return this.http.put(url, entry).pipe(
                    catchError(this.hadleError),
                    map(() => entry)
                )
            })
        )
    }

    delete(id_entry: number): Observable<any> {
        const url = `${this.apiPath}/${id_entry}`;
        return this.http.delete(url).pipe(
            catchError(this.hadleError),
            map(() => null));
    }

    private jsonDataToEntries(jsonData: any[] ): Entry[] {

        // console.log(jsonData[0] as Entry);
        // console.log(Object.assign(new Entry, jsonData[0]));

        const entries: Entry[] = [];
        // jsonData.forEach(element => entries.push(element as Entry));
        jsonData.forEach(element => {
            const entry = Object.assign(new Entry(), element);
            entries.push(entry);
        });
        return(entries);
    }

    private jsonDataToEntry(jsonData: any): Entry {
        return Object.assign(new Entry(), jsonData);
    }

    private hadleError(error: any): Observable<any> {
        console.log("Erro na requisição => ", error);
        return(throwError(error));
    }
}

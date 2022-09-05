import { Component, OnInit } from '@angular/core';
import { Entry } from '../shared/entry.model';
import { EntryService } from '../shared/entry.service';


@Component({
    selector: 'app-entry-list',
    templateUrl: './entry-list.component.html',
    styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

    entries: Entry[] = [];

    constructor(private entryService: EntryService) { }

    ngOnInit() {
        this.entryService.getAll().subscribe(
            entries => this.entries = entries.sort((a, b) => b.id_entry - a.id_entry),
            error => alert('Erro ao carregar a lista')
        )
    }

    deleteEntry(entry) {
        const mustDelete = confirm('Deseja realmente excluir este item?');

        if (mustDelete) {
            this.entryService.delete(entry.id_entry).subscribe(
                () => this.entries = this.entries.filter(element => element != entry)
                , () => alert("Erro ao tentar excluir!")
        )
        }
    }
}

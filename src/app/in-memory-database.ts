import { InMemoryDbService } from "angular-in-memory-web-api";

import { Category } from "./pages/categories/shared/category.model";
import { Entry } from "./pages/entries/shared/entry.model";

export class InMemoryDatabase implements InMemoryDbService {
    createDb() {
        const categories: Category[] = [
            {id_categoria: 1, id: 1, nome: 'Moradia', descricao: 'Pagamento de Contas da Casa'}
            , {id_categoria: 2, id: 2, nome: 'Saúde', descricao: 'Pagamento de Saúde e Remédios'}
            , {id_categoria: 3, id: 3, nome: 'Lazer', descricao: 'Cinema, parques, praias, etc.'}
            , {id_categoria: 4, id: 4, nome: 'Salário', descricao: 'Recebimentos de Salários'}
            , {id_categoria: 5, id: 5, nome: 'Freelas', descricao: 'Trabalhos com freelance'}
        ];

        const entries: Entry[] = [
            { id_entry: 1, nome: 'Gás de Cozinha', id_categoria: categories[0].id_categoria, category: categories[0], pago: true, data: "14/10/2018", valor: "70,80", tipo: "despesa", descricao: "Qualquer descrição para essa despesa" } as Entry,
            { id_entry: 2, nome: 'Suplementos', id_categoria: categories[1].id_categoria, category: categories[1], pago: false, data: "14/10/2018", valor: "15,00", tipo: "despesa" } as Entry,
            { id_entry: 3, nome: 'Salário na Empresa X', id_categoria: categories[3].id_categoria, category: categories[3], pago: true, data: "15/10/2018", valor: "4405,49", tipo: "receita" } as Entry,
            { id_entry: 4, nome: 'Aluguel de Filme', id_categoria: categories[2].id_categoria, category: categories[2], pago: true, data: "16/10/2018", valor: "15,00", tipo: "despesa" } as Entry,
            { id_entry: 5, nome: 'Suplementos', id_categoria: categories[1].id_categoria, category: categories[1], pago: true, data: "17/10/2018", valor: "30,00", tipo: "despesa" } as Entry,
            { id_entry: 6, nome: 'Video Game da Filha', id_categoria: categories[2].id_categoria, category: categories[2], pago: false, data: "17/10/2018", valor: "15,00", tipo: "despesa" } as Entry,
            { id_entry: 11, nome: 'Uber', id_categoria: categories[1].id_categoria, category: categories[1], pago: true, data: "17/10/2018", valor: "30,00", tipo: "despesa" } as Entry,
            { id_entry: 12, nome: 'Aluguel', id_categoria: categories[2].id_categoria, category: categories[2], pago: false, data: "23/10/2018", valor: "15,00", tipo: "despesa" } as Entry,
            { id_entry: 13, nome: 'Gás de Cozinha', id_categoria: categories[1].id_categoria, category: categories[1], pago: false, data: "25/10/2018", valor: "30,00", tipo: "despesa" } as Entry,
            { id_entry: 14, nome: 'Pagamento Pelo Projeto XYZ', id_categoria: categories[4].id_categoria, category: categories[4], pago: true, data: "25/10/2018", valor: "2980,00", tipo: "receita" } as Entry,
            { id_entry: 19, nome: 'Aluguel de Filme', id_categoria: categories[2].id_categoria, category: categories[2], pago: false, data: "07/11/2018", valor: "15,00", tipo: "despesa" } as Entry,
            { id_entry: 21, nome: 'Video Game da Filha', id_categoria: categories[1].id_categoria, category: categories[1], pago: true, data: "17/11/2018", valor: "30,00", tipo: "despesa" } as Entry,
            { id_entry: 22, nome: 'Cinema', id_categoria: categories[2].id_categoria, category: categories[2], pago: true, data: "18/11/2018", valor: "15,00", tipo: "despesa" } as Entry,
            { id_entry: 23, nome: 'Jiu Jitsu', id_categoria: categories[1].id_categoria, category: categories[1], pago: false, data: "21/11/2018", valor: "130,00", tipo: "despesa" } as Entry,
            { id_entry: 44, nome: 'Uber', id_categoria: categories[2].id_categoria, category: categories[2], pago: true, data: "28/11/2018", valor: "15,00", tipo: "despesa" } as Entry,
            { id_entry: 55, nome: 'Cinema', id_categoria: categories[1].id_categoria, category: categories[1], pago: false, data: "28/11/2018", valor: "30,00", tipo: "despesa" }  as Entry
          ]         
      
return { categories, entries }
      
    }
}
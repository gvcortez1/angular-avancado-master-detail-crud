import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";

import { Category } from "./pages/categories/shared/category.model"

export class InMemoryDbService implements InMemoryDbService {
    createDb() {
        const categories: Category[] = [
            {id_descricao: 1, nome: 'Moradia', descricao: 'Pagamento de Contas da Casa'}
            , {id_descricao: 2, nome: 'Saúde', descricao: 'Pagamento de Saúde e Remédios'}
            , {id_descricao: 3, nome: 'Lazer', descricao: 'Cinema, parques, praias, etc.'}
            , {id_descricao: 4, nome: 'Salário', descricao: 'Recebimentos de Salários'}
            , {id_descricao: 5, nome: 'Freelas', descricao: 'Trabalhos com freelance'}
        ];

        return { categories }
    }
}
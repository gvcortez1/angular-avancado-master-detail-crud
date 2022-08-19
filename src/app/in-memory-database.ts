import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";

import { Category } from "./pages/categories/shared/category.model";

export class InMemoryDatabase implements InMemoryDbService {
    createDb() {
        const categories: Category[] = [
            {id_categoria: 0, nome: 'Moradia', descricao: 'Pagamento de Contas da Casa'}
            , {id_categoria: 1, nome: 'Saúde', descricao: 'Pagamento de Saúde e Remédios'}
            , {id_categoria: 2, nome: 'Lazer', descricao: 'Cinema, parques, praias, etc.'}
            , {id_categoria: 3, nome: 'Salário', descricao: 'Recebimentos de Salários'}
            , {id_categoria: 4, nome: 'Freelas', descricao: 'Trabalhos com freelance'}
        ];

        return { categories }
    }
}
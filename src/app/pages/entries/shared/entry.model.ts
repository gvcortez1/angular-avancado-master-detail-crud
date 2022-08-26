import { Category } from "../../categories/shared/category.model";

export class Entry {

    constructor(
        public id_entry?: number,
        public nome?: string,
        public descricao?: string,
        public tipo?: string,
        public valor?: string,
        public data?: string,
        public pago?: boolean,
        public id_categoria?: number,
        public category?: Category
    ) {}

    static tipos = {
        expense: 'Despesa',
        renevue: 'Receita'
    }

    get pagoText(): string {
        return this.pago ? 'Pago' : 'Pendente' ;
    }
}
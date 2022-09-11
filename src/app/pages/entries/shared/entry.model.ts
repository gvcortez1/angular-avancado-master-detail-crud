import { Category } from "../../categories/shared/category.model";
import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Entry extends BaseResourceModel {

    constructor(
        public id?: number,
        public nome?: string,
        public descricao?: string,
        public tipo?: string,
        public valor?: string,
        public data?: string,
        public pago?: boolean,
        public id_categoria?: number,
        public category?: Category
    ) {
      super();
    }

    static tipos = {
        despesa: 'Despesa',
        receita: 'Receita'
    }

    static fromJson(jsonData: any): Entry {
        return Object.assign(new Entry(), jsonData);
    }

    get pagoText(): string {
        return this.pago ? 'Pago' : 'Pendente' ;
    }
}

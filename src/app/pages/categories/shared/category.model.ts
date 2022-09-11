import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Category extends BaseResourceModel {
    constructor(
        public id_categoria?: number,
        public nome?: string,
        public descricao?: string,
        public id?: number,
    ) {
        super();
    }


    static fromJson(jsonData: any): Category {
        return Object.assign(new Category(), jsonData);
    }
}

export class GeneralResponse<T> {
    constructor(public status: boolean,
                public message: string,
                public data: T){}
}

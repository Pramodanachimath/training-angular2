import { Address } from "./address";

export class User {
    constructor(
        public username:string,
        public email:string,
        public gender:string,
        public course:string,
        public address:Address,
    ){};
}

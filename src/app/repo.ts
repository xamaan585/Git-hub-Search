export class Repo {
    constructor(
        public html_url:string,
        public clone_url:string,
        public name:string,
        public description:string,
        public language:string,
        public created_at:Date,
        public updated_at :Date
    ){

    }
}

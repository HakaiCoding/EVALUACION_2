export class Book {
    public Id: Number;
    public title: String;
    public author: String;
    public publisher: String;
    public read: Boolean;

    constructor (Id: Number, title: String, author: String, publisher: String, read: Boolean){
        this.Id = Id;
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.read = read;
    }
}

export default class Database {
    private _url;
    private _port;
    private _username;
    private _password;
    private _tables: string[];

    constructor(url: any, port: any, username: any, password: any) {
        this._url = url;
        this._port = port;
        this._username = username;
        this._password = password;
        this._tables = []
    }

    public createNewTable(table: any){
        this._tables.push(table)
    }

    public clearTable(){
        this._tables = []
    }

    get url(){
        return this._url
    }

    get port(){
        return this._port
    }

    get username(){
        return this._username
    }

    get password(){
        return this._password
    }
}


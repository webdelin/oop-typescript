interface Reader {
    read(url:string):string;
}
interface Writer {
    write(data:any):any;
}
interface Repository<T> {
    create: (obj: T) => T;
    get: (obj: T) => T;
    update: (obj: T) => T;
    delete: (obj: T) => T;
}

class FileClient implements Reader, Writer {
    read(url: string) {
        return url
    }
    write(data: any) {
        return data
    }
}

class HttpClient implements Reader, Writer {
    read(url: string) {
        return url
    }
    write(data: any) {
        return data
    }
}

class User {
    static username: string;
    static age: number;
}

class UserRepository implements Repository<User> {
    create(obj: User): User {
        return 'create'
    }
    get(obj: User): User {
        return 'get'
    }
    update(obj: User): User {
        return 'update'
    }
    delete(obj: User): User {
        return 'delete'
    }
}
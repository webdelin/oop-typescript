class User {
    static username: string;
    static age: number;
}

interface UserRepo {
    getUser: () => User[];
}

class UserMongoDBRepository implements UserRepo {
    getUser(): User[] {
        console.log('MongoDB');
        return []
    }
}

class UserPostgresRepository implements UserRepo {
    getUser(): User[] {
        console.log('PostgreSQL');
        return []
    }
}

export default class UserService {
    userRepo: UserRepo;
    constructor(userRepo: UserRepo){
        this.userRepo = userRepo
    }
    filterUserByAge(age: number) {
        const users = this.userRepo.getUser()
        console.log(users);
        
    }
}

export const userService = new UserService(new UserPostgresRepository())
userService.filterUserByAge(15)
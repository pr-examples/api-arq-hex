import {User} from "../../../domain/user";
import {UsersRepository} from "../../../use-cases/user-register/ports/out/UsersRepository";

const users = (): UsersRepository => {

    const create = (user: User): Promise<boolean>=> {
        console.log(user);
        return Promise.resolve(true);
    };
    
    const Users = {
        create,
    } as UsersRepository;

    return Users;
};

export default users;
import {User} from "../../../../domain/user";

export interface UsersRepository {
    create: (user: User) => Promise<boolean>,
};

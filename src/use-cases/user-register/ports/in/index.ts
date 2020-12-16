import {User} from "../../../../domain/user";

export type UserRegister = (user: User) => Promise<boolean>;
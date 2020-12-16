import {User} from "../../domain/user"
import {UserRegister} from "./ports/in"
import {UsersRepository} from "./ports/out/UsersRepository";


const userRegister = (userRepository: UsersRepository): UserRegister => {

    const userRegisterUseCase: UserRegister = async (user: User): Promise<boolean> =>{
        const result = await userRepository.create(user);
        return Promise.resolve(result);
    }

    return  userRegisterUseCase;

};

export default userRegister;
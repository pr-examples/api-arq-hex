import Domain from "../../domain";
import {User} from "../../domain/user";
import userRegister from "../../use-cases/user-register";
import {UserRegister} from "../../use-cases/user-register/ports/in";
import {UsersRepository} from "../../use-cases/user-register/ports/out/UsersRepository";


const UsersMock = {
    create: (user: User): Promise<boolean> => {
        return Promise.resolve(user.id === 1);
    }
} as UsersRepository;


test('UserRegisterUseCase', async () => {

    const userRegisterUseCase: UserRegister = userRegister(UsersMock);
    const user: User = Domain.user(1, 'Pablo');
    const result: boolean  = await userRegisterUseCase(user);
    expect(result).toBe(true);

});
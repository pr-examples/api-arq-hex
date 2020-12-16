import MySQL from '../infrastructure/repositories/mysql';
import userRegister from './user-register';

const UseCases = {
    userRegister: userRegister(MySQL.users),
};

export default UseCases;
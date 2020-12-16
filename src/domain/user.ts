export type User = {
    id: number,
    name: string,
};

const user = () => {

    return (id: number, name: string): User=> {
        return {
            id,
            name,
        } as User;
    };

};

export default user;

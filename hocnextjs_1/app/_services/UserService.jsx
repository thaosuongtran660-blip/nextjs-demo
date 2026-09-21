import configAPI from "../configAPI";

const UserService ={
    getAll: async ()=>{
        const result = await configAPI.get('user');
        return result;
    }
}

export default UserService;
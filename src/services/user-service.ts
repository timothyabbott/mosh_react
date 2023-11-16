import apiClient from "./api-client";

export interface User {
    id: number;
    name: string;
  }

class UserService{
    updateUser( user:User)  {
        return apiClient.patch("/users/" + user.id, user)
    }
    addUser(newUser: { id: number; name: string; }) {
        return apiClient.post("/users", newUser)
    }

    getAllUsers(){
        const controller = new AbortController();
        const request =  apiClient
        .get<User[]>("/users", {
          signal: controller.signal,
        });
        return {request,cancel:()=> controller.abort()}
    }

    deleteUser(id: number){
        return apiClient.delete("/users/" + id)
        
        
    }

}

export default new UserService
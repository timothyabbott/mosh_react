import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUsers = () =>{
    const [error, setError] = useState("");
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        
        setIsLoading(true);
        const { request, cancel } = userService.getAll<User>();
        request
          .then((response) => {
            setUsers(response.data);
            setIsLoading(false);
          })
          .catch((error) => {
            if (error instanceof CanceledError) return;
            setError(error.message);
            setIsLoading(false);
          });
        return () => cancel();
      }, []);
      return{users,error,isLoading, setUsers, setError}
} 

export default useUsers;
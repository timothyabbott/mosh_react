import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [error, setError] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        setError((error as AxiosError).message);
      }
    };

    fetchUsers();
  });
  //   axios
  //     .get<User[]>("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => setUsers(response.data))
  //     .catch((error) => setError(error.message));
  // }, []);
  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;

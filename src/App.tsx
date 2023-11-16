import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";

interface User {
  id: number;
  name: string;
}

function App() {
  const [error, setError] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false);
      });
    //  the below should work and even mosh doesn't know why it doesn't
    // .finally(() => {
    //   setIsLoading(false);
    // });

    return () => controller.abort();
  }, []);
  function deleteUser(user: User): void {
    const originalUsers = users;
    setUsers(users.filter((usr) => usr.id !== user.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/usersx/" + user.id)
      .catch((error) => {
        setError(error.message);
        setUsers(originalUsers);
      });
  }

  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <button
              onClick={() => deleteUser(user)}
              className="btn btn-outline-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;

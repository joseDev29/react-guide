import { useEffect, useState } from "react";

const UseEffectPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://644d8792cfdddac970a673b4.mockapi.io/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Cargando...</h1>
      ) : users.length === 0 ? (
        <h1>Aun no hay data</h1>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {users.map((user) => {
            return (
              <div key={crypto.randomUUID()}>
                {user.name}
                {user.role}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default UseEffectPage;

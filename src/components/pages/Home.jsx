import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../atoms/Loading";
import logo from "../../images/logo.svg";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [currentUsers, setCurrentUsers] = useState("");
  const [isLoading, setIsLoadding] = useState(true);

  useEffect(() => {
    fetch("https://63cf09718a780ae6e6710dbe.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoadding(false);
      });
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="home center">
      <div className="home__logo">
        <img src={logo} className="responsive" alt="" />
      </div>
      <select
        onChange={(event) => setCurrentUsers(event.target.value)}
        className="home__select-users"
      >
        <option value="">Selecione um usuário</option>
        {users

          .sort((a, b) => a.fn.localeCompare(b.fn))
          .map((user) => (
            <option value={user.id} key={user.id}>
              {user.fn} {user.ln}
            </option>
          ))}
      </select>
      {!!currentUsers && (
        <button
          onClick={() => navigate(`/users/${currentUsers}`)}
          className="button-primary"
        >
          Entrar
        </button>
      )}
    </div>
  );
}

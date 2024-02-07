import React, { ChangeEvent, useState } from "react";
import { useRepos } from "../../services/reposController";

const Component = (): JSX.Element => {
  const [username, setUsername] = useState("gabrielssantana");
  const [repos, getRepos] = useRepos();

  const changeUsername = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setUsername(value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>AOKI</h2>
      <input type="text" value={username} onChange={changeUsername} />
      <button
        type="button"
        onClick={() => {
          getRepos(username);
        }}
      >
        Buscar
      </button>
      {repos.map((repo) => (
        <>
          <p>{repo["id"]}</p>
          <p>{repo["full_name"]}</p>
        </>
      ))}
      <a href="/">Ir para App</a>
    </div>
  );
};

export const Aoki = React.memo(Component);

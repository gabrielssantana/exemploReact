import { useCallback, useEffect, useState } from "react";
import { api } from "../api";

export const useRepos = (): [any[], (username: string) => void] => {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState<any[]>([]);

  const getUserRepos = useCallback(async () => {
    try {
      const { data } = await api.get(`users/${username}/repos`);
      setRepos(data);
    } catch (e) {
      console.log(e);
    }
  }, [username]);

  const getRepos = (username: string) => {
    setUsername(username);
  };

  useEffect(() => {
    getUserRepos();
  }, [getUserRepos]);

  return [repos, getRepos];
};

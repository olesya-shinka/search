import { IoIosSearch } from "react-icons/io";
import "./style.css";
import UsersList from "../usersList";
import { useState } from "react";

export function Search() {
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [repos, setRepos] = useState([]);

  const handlerSeekerUser = (e) => {
    setName(e.target.value);
  };

  const handlerSearch = async (e) => {
    e.preventDefault();
    const profileUser = await fetch(
      `https://api.github.com/search/users?q=${name}`
    );
    const profileUserJson = await profileUser.json();
    console.log(profileUserJson);

    const repos = await fetch(`https://api.github.com/users/${name}/repos`);
    const reposJson = await repos.json();
    console.log(reposJson);

    setData(profileUserJson);
    setRepos(reposJson);
  };

  return (
    <div className="input-content">
      <div>
        <img className="icon-git" src="25231.png" alt="icongit" />
      </div>
      <IoIosSearch className="input-icon" />
      <input
        className="input"
        type="text"
        placeholder="Введите логин пользователя"
        value={name}
        onChange={handlerSeekerUser}
      />
      <button type="submit" onClick={handlerSearch} className="input-btn">
        Искать
      </button>
      <div className="content-users">
        <UsersList data={data} repos={repos} />
      </div>
    </div>
  );
}
export default Search;

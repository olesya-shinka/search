import { IoIosSearch } from "react-icons/io";
import "./style.css";
import UsersList from "../usersList";
import { useState } from "react";
import { getUserInfo } from "../../api/getUsers";

export function Search() {
  const [data, setData] = useState([]);
  const [username, setUserName] = useState("");
  const [repos, setRepos] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  const handlerSeekerUser = (e) => {
    setUserName(e.target.value);
  };

  const handlerSearch = async (e) => {
    e.preventDefault();
    const profileUser = await fetch(
      `https://api.github.com/search/users?q=${username}`
    );
    const profileUserJson = await profileUser.json();
    console.log(profileUserJson);

    const repos = await fetch(`https://api.github.com/users/${username}/repos`);
    const reposJson = await repos.json();

    const userInfo = await fetch(`https://api.github.com/users/${username}`);
    const userInfoJson = userInfo.json();
    console.log(userInfoJson);

    setData(profileUserJson);
    setRepos(reposJson);
    setUserInfo(userInfoJson);
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
        value={username}
        onChange={handlerSeekerUser}
      />
      <button type="submit" onClick={handlerSearch} className="input-btn">
        Искать
      </button>
      <div className="content-users">
        <UsersList data={data} repos={repos} userInfo={userInfo} />
      </div>
    </div>
  );
}
export default Search;

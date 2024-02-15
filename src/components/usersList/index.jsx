/* eslint-disable jsx-a11y/anchor-is-valid */
import FilterRepositories from "../filterRepositories";
import "./style.css";
import { VscGithubInverted } from "react-icons/vsc";

export function UsersList({ data, repos, userInfo }) {
  return (
    <>
      <FilterRepositories />
      <table className="user-content">
        <thead>
          <tr>
            <th className="user-item-title">Логин</th>
            <th className="user-item-title">Аватар</th>
            <th className="user-item-title">Репозитории</th>
            <th className="user-item-title">Кол-во репо</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="user-item">{userInfo?.name}</td>
            <td className="user-item">
              <div>
                {!data.avatar_url ? (
                  " "
                ) : (
                  <img src={data.avatar_url} alt="avatar">
                    {data.avatar_url}
                  </img>
                )}
              </div>
            </td>
            <td className="user-item">
              <div className="user-item-repos">
                {repos.map((repo) => (
                  <li key={repo.name}>
                    <VscGithubInverted style={{ marginRight: 10 }} />
                    <a href="#">{repo.name}</a>
                  </li>
                ))}
              </div>
            </td>
            <td>{repos.length}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default UsersList;

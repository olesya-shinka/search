/* eslint-disable jsx-a11y/anchor-is-valid */
import FilterRepositories from "../filterRepositories";
import "./style.css";
import { VscGithubInverted } from "react-icons/vsc";

export function UsersList({ data, repos }) {
  return (
    <>
      <FilterRepositories />
      <table className="user-content">
        <thead>
          <tr>
            <th className="user-item-title">Логин</th>
            <th className="user-item-title">Аватар</th>
            <th className="user-item-title">Репозитории</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="user-item">{data.login}</td>
            <td>
              <div>
                {!data.avatar_url ? (
                  " "
                ) : (
                  <img src={data.avatar_url} alt={data.avatar_url} />
                )}
              </div>
            </td>
            <td className="user-item">
              <div className="user-item-repos">
                {repos.map((repo) => (
                  <li key={repo.name}>
                    <VscGithubInverted style={{marginRight: 10}}/>
                    <a href="#">{repo.name}</a>
                  </li>
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default UsersList;

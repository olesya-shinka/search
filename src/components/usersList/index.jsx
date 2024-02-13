import FilterRepositories from "../filterRepositories";
import "./style.css";

export function UsersList() {
  return (
    <div className="content-list">
      <FilterRepositories />
      <div className="content-users">
        <ul className="content-users-list">
          <li className="content-users-item">пользователи</li>
        </ul>
      </div>
    </div>
  );
}

export default UsersList;

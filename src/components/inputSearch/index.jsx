import { IoIosSearch } from "react-icons/io";
import "./style.css";

export function InputSearch() {
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
      />
      <button className="input-btn">Искать</button>
    </div>
  );
}
export default InputSearch;

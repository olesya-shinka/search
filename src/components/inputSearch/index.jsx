import { IoIosSearch } from "react-icons/io";
import "./style.css";

export function InputSearch() {
  return (
    <div className="input-content">
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

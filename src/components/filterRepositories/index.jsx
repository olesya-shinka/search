import "./style.css";

function FilterRepositories() {
  
  return (
    <div className="content-filter-list">
      <p className="content-sort-title">Сортировать по кол-ву репозиториев:</p>
      <label className="content-filter-item">
        <input
          type="checkbox"
          name="убыванию"
          className="content-filter-item-checkbox"
        />
        убыванию
      </label>
      <label className="content-filter-item">
        <input
          type="checkbox"
          name="возрастанию"
          className="content-filter-item-checkbox"
        />
        возрастанию
      </label>
    </div>
  );
}

export default FilterRepositories;

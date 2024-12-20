import { useSearchParams } from "react-router-dom";

export const Sort = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (e) => {
    searchParams.set("sort_by", e.target.value);
    setSearchParams(searchParams);
  };

  const handleOrderChange = (e) => {
    searchParams.set("order", e.target.value);
    setSearchParams(searchParams);
  };

 /*  return (
    <div>
      <label>
        Sort by:
        <select value={searchParams.get("sort_by") || "created_at"} onChange={handleSortChange}>
          <option value="date">Date</option>
          <option value="votes">Votes</option>
        </select>
      </label>
      <label>
        Order:
        <select value={searchParams.get("order") || "desc"} onChange={handleOrderChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
    </div>
  ); */
};




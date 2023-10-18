import { Search as SearchIcon } from "react-bootstrap-icons";
import s from "./style.module.css";

export const SearchBar = ({ onTextChange }) => {
  return (
    <>
      <SearchIcon size={25} className={s.icon} />
      <input
        type={"text"}
        className={s.input}
        placeholder={"Search your Book here..."}
        onChange={(e) => onTextChange(e.target.value)}
      />
    </>
  );
};

import css from "./SearchForm.module.css";
import { IoSearch } from "react-icons/io5";

export default function SearchForm({ onSubmit }) {
  return (
    <div className={css.container}>
      <form onSubmit={onSubmit} className={css.form}>
        <input
          type="text"
          name="movieName"
          placeholder="Enter the title to search"
          autoComplete="off"
          autoFocus
          pattern="^[а-яА-ЯёЁa-zA-Z0-9]+$+\s"
          required
          className={css.input}
        />
        <button className={css.btn} type="submit">
          <IoSearch size="20" color="rgb(46, 112, 234)" />
        </button>
      </form>
    </div>
  );
}

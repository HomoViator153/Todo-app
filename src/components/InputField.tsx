import React, { useRef } from "react";
import "../styles/styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) =>
    setTodo(e.currentTarget.value);

  return (
    <form
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
      className="input">
      <input
        value={todo}
        onChange={handleInputChange}
        ref={inputRef}
        type="input"
        placeholder="Add a task"
        className="input__box"
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddNewTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onChangeFun = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ title: value }));
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="Add New todo..."
          value={value}
          onChange={onChangeFun}
        ></input>

        <button type="submit" className="btn btn-primary mb-2">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddNewTodo;

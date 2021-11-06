import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { DataContext } from "./DataList";
import { getTime } from "./helper";

const Form = () => {
  const [data, setData] = useContext(DataContext);
  const { register, handleSubmit, reset } = useForm();  

  const onSubmit = (input) => {    
    setData([...data, { id: nanoid(), name: input.name, date: getTime(), toggle: false, chenge: false }]);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Task:
          <input
            type="text"
            autoComplete="off"
            style={{ margin: "1%" }}
            {...register("name")}
          />
        </label>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default Form;

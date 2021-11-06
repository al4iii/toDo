import { useState } from "react";
import { useContext } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DataContext } from "./DataList";
import { getTime } from "./helper";
import style from "./ToDoList.module.css";

const ToDoList = () => {
  const [data, setData] = useContext(DataContext);
  const [value, setValue] = useState("");

  const onStatusChenge = (e) => setValue(e.currentTarget.value);

  const deleteItem = (id) => setData(data.filter((x) => x.id !== id));

  const editItem = (id) => {    
    setData(data.map((i) => i.id === id ? Object.assign({}, i, { name: value, toggle: false, date: getTime(), chenge: true}) : i));
  };

  const onEdit = (id) => {
    setData(data.map((i) => i.id === id ? Object.assign({}, i, { toggle: true }) : i ))
  };

  const handleEnd = (result) => {
    if (!result.destination) return; 
    const items = Array.from(data);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setData(items);
  };

  return (
    <div className="App">
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="to-dos">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {data.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div className={style.task}>
                      <input
                        type="checkbox"
                        value="Add"
                        className={style.checkbox}
                      />
                      <li
                        {...provided.draggableProps}                       
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        key={item.id}
                        className={style.list}
                      >
                        {index + 1}.{" "}
                        {item.toggle ? (
                          <div>
                            <input
                              className={style.input}
                              autoFocus={true}
                              onChange={onStatusChenge}
                              placeholder={item.name}
                            />
                            <button
                              onClick={() => editItem(item.id)}
                              className={style.button}
                            >
                              ok
                            </button>
                          </div>
                        ) : (
                          <h3 className={style.h3}>{item.name}</h3>
                        )}
                        <h3 className={style.date}>{item.date}</h3>
                        <span>
                          <button
                            className={style.button}
                            onClick={() => deleteItem(item.id)}
                          >
                            Delete
                          </button>
                        </span>
                        <span>
                          {!item.toggle && (
                            <button
                              className={style.button}
                              onClick={() => onEdit(item.id)}
                            >
                              edit
                            </button>
                          )}
                        </span>
                        {item.chenge && <span style={{ color: "red" }}>the task has been changed</span>}
                      </li>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default ToDoList;
import React from 'react';

export default function Todo({ props, onDelete }) {
  console.log(props);
  return (
    <div className="container">
      <h1 className="text-center">Todo List</h1>
      {props.length === 0
        ? 'NO TODOS TO DISPLAY'
        : props.map((res: any) => {
            return (
              <div>
                <p>
                  {res.sno} {res.title} {res.desc}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    onDelete(res.sno);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
    </div>
  );
}

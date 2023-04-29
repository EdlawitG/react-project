import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
function ExpenseItem({ expense, handleEdit,handleDelete}) {
  const { id, charge, amount } = expense;
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>

        <div>
          <button className="edit-btn" aria-label="edit-btn" onClick={()=>handleEdit(id)}>
            <MdEdit />
          </button>
          <button className="delete-btn" aria-label="delete-btn" onClick={()=>handleDelete(id)}>
            <MdDelete />
          </button>
        </div>
      </div>
    </li>
  );
}

export default ExpenseItem;

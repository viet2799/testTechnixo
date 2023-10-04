import React from "react";
import "./Cell.css";

export interface CellProps {
  // Your code here
  item: {
    id: number;
    img: string;
    stat: string;
  };
  id: number;
  handleCellClick: (number: number) => void;
}

const Cell: React.FC<CellProps> = (props: CellProps) => {
  const { item, id, handleCellClick } = props;
  const itemClass = item.stat ? " active " + item.stat : "";
  // Render cell with shape and color, use CSS to style based on shape and color.
  return (
    <div className={`cell ${itemClass}`} onClick={() => handleCellClick(id)}>
      <img src={item?.img} alt="ảnh" className="Img" />
    </div>
  );
};

export default Cell;

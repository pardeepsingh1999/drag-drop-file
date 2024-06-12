import React from "react";
import { AcceptEnum, DragDropFiles } from "../Components";

const Example1 = () => {
  return (
    <div>
      <h2>Example 1 | Single Image Drag Drop</h2>

      <DragDropFiles accept={[AcceptEnum.image]} multiple={false} />
    </div>
  );
};

export default Example1;

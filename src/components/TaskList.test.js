import React from "react";
import ReactDOM from "react-dom";
import { WithPinnedTasks } from "./TaskList.stories";

it("renders pinned tasks at the start of the list", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WithPinnedTasks />, div);

  //we expect the last task titled "Task 6 (pinned)" to render first. Not last
  const lastTaskInput = div.querySelector(
    '.list-item:nth-child(1) input[value="Task 6 (pinned)"]'
  );
  expect(lastTaskInput).not.toBe(null);
  ReactDOM.unmountComponentAtNode(div);
});

const express = require("express");
const { tasks_router } = require("./routes/tasks.routes.js");


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/tasks", tasks_router);

app.listen(3001, () => {
    console.log("run on port 3001");
  });

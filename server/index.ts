const express = require("express");
const app = express();

const cors = require("cors");
import pool from "./database";
//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//creata a todo
app.post("/todos", async (req: any, res: any) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todolist (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all todo
app.get("/todos", async (req: any, res: any) => {
  try {
    const allTodos = await pool.query(
      "SELECT * FROM todolist ORDER BY timerecorded ASC;"
    );

    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a todo
app.get("/todos/:id", async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todolist WHERE id=$1", [id]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a todo
app.put("/todos/:id", async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todolist SET description=$1 WHERE id=$2",
      [description, id]
    );

    res.json(`To-Do with id ${id} was updated.`);
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo
app.delete("/todos/:id", async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todolist WHERE id=$1", [
      id,
    ]);

    res.json("Deleted id " + id);
  } catch (err) {
    console.error(err.message);
  }
});
app.listen(5000, () => {
  console.log("Server listening at port 5000 ");
});

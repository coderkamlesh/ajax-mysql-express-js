const express = require("express");
const db = require("./config/db");
const app = express();

app.set("view engine", "ejs");

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/students/getData", (req, res) => {
    db.query("SELECT * FROM students", (err, data) => {
        if (err) {
            return res.json({
                status: "failed",
                errMsg: err
            })
        } else {
            return res.json({
                status: "success",
                data
            })
        }
    })
})


app.post("/students/insertData", (req, res) => {
    const { first_name, last_name } = req.body;
    const query = "INSERT INTO students(first_name, last_name) VALUES (?,?)";
    const param = [first_name, last_name]

    db.query(query, param, (err, res_data) => {
        if (err) {
            return res.json({
                status: "failed",
                errMsg: err
            })
        } else {
            return res.json({
                status: "success",
                data: res_data
            })
        }
    })
})


app.delete("/students/deleteData/:id", (req, res) => {

    db.query("DELETE FROM students WHERE id=?", [req.params.id], (err) => {
        if (err) {
            return res.json({
                status: "failed",
                errMsg: err
            })
        } else {
            return res.json({
                status: "success",
                message: "student has deleted successfully"
            })
        }
    });

})

app.listen(3333, () => {
    console.log("server running")
})
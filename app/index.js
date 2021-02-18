const app = require("express")();

app.get("/", (req, res) => {
    res.send("Hello from lightweight docker application");
});

app.listen(9999, () => console.log("listening at port 9999"));

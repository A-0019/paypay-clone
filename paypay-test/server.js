const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname)));
app.use(express.urlencoded({ extended: true })); // POST受け取り
app.use(express.json());

app.post("/submit", (req, res) => {
  const { phone, password } = req.body;
  console.log("📱 電話番号:", phone);
  console.log("🔒 パスワード:", password);
  res.send("受け取り完了！");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`サーバー起動中：http://localhost:${PORT}`);
});
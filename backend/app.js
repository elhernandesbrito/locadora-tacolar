require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const messageRoutes = require("./routes/messageRoutes");
const errorHandler = require("./middleware/errorHandler");
const rateLimit = require("express-rate-limit");

const app = express();

/* =========================
   MIDDLEWARES GLOBAIS
========================= */
app.use(cors());
app.use(express.json());

/* =========================
   ROTAS
========================= */

app.use("/api", messageRoutes);

app.get("/", (req, res) => {
  res.send("API da Locadora Tacolar está funcionando");
});

/* =========================
   MIDDLEWARE DE ERRO
========================= */

app.use(errorHandler);

const limiter = rateLimit({
   windowMs: 15 * 60 * 1000,
   max: 100,
   message: "Muitas requisições feitas, tente mais tarde."
});

app.use(limiter);

/* =========================
   PORTA DO SERVIDOR
========================= */

const PORT = process.env.PORT || 3001;

/* =========================
   CONEXÃO COM BANCO
========================= */

connectDB();

/* =========================
   INICIAR SERVIDOR
========================= */

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
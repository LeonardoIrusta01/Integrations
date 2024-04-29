import { Router } from "express"
import userRoutes from "./users"

const mainRouter = Router()

mainRouter.get("/", (req, res) => {
  res.send("Hola mundo")
})

mainRouter.use("/users", userRoutes)

export default mainRouter
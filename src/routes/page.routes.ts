import { Router, Request, Response } from "express"
import { Contact } from "../types/contact"

const pageRouter = Router()

const hobbies: string[] = ["Drawing", "Dancing", "Skydiving", "Eating"]
const contact: Contact = {
  name: "James Smith",
  email: "test@gmail.com",
  tel: 11122223333,
  address: "7670 Robson Ave, BC",
}

// Home
pageRouter.get("/", (req: Request, res: Response) => {
  res.status(200).render("index", { title: "My Home", showInfo: true })
})

// About
pageRouter.get("/about", (req: Request, res: Response) => {
  res.status(200).render("about", { title: "About Us", hobbies })
})

// Contact
pageRouter.get("/contact", (req: Request, res: Response) => {
  res.status(200).render("contact", { title: "Contact", contact })
})

export default pageRouter

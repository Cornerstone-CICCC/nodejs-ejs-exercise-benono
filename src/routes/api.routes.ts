import { Router, Request, Response } from "express"
import { ContactRequest } from "../types/contact"
import test from "node:test"

const apiRouter = Router()

// Contact
apiRouter.post(
  "/contact/email",
  (req: Request<{}, {}, ContactRequest>, res: Response) => {
    const info: ContactRequest = {
      title: req.body.title,
      text: req.body.text,
    }
    res
      .status(200)
      .render("contact_submitted", { title: "Contact Submitted", info })
  }
)

export default apiRouter

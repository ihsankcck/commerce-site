const express = require("express")
const next = require("next")

const dev = process.env.NODE_ENV !== "production"
const port = process.env.PORT || 3000
const hostname = "localhost"

const app = next({ dev, port, hostname })
const handle = app.getRequestHandler()

;(async () => {
  try {
    await app.prepare()
    const server = express()

    server.all("*", (req, res) => {
      return handle(req, res)
    })

    if (dev) {
      server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on ${hostname}:${port} - env development`)
      })
    } else {
      server.listen()
    }
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
})()

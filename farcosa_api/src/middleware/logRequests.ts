import morgan from "morgan"
import getLogger from "@utils/logger"

const logger = getLogger()

let logRequest = () => morgan((tokens, req, res) => {

    const data = [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms'
    ]

    logger.Info(data.join(" "))

    return [
        new Date().toISOString(),
        ...data
    ].join(" ")
})

export default logRequest
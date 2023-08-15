import { PROJECT_ROOT } from "@config/constant";
import log from "node-file-logger"


export default function getLogger() {

    log.SetUserOptions({
        timeZone: process.env.TZ,
        folderPath: "../../logs/",      
        dateBasedFileNaming: true,
        fileNamePrefix: '',
        fileNameSuffix: '',
        fileNameExtension: '.log',     
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm:ss.SSS',
        logLevel: 'debug',
        onlyFileLogging: true
    });

    return log
}
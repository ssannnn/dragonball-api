import {Router} from "express";
import {readdirSync} from "fs";

const PATH_FINDER = `${__dirname}`;
const router = Router();


// getting the file name without the .ts extension
const cleanFileName = (fileName:string) => {
    const file = fileName.split(".").shift();
    return file;
}

// adding route prefix with dynamic imports
readdirSync(PATH_FINDER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== "index"){
        import(`./${cleanName}`).then((moduleRouter) => {
            //console.log(`testing /${cleanName}`)
            router.use(`/api/${cleanName}`, moduleRouter.router);   
        });
        }
}) 




export {router};
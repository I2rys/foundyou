(async()=>{
    "use strict";

    // Dependencies
    const { runJobs } = require("parallel-park")
    const request = require("request-async")
    const { JSDOM } = require("jsdom")
    const fs = require("fs")
    
    // Variables
    const args = process.argv.slice(2)

    // Main
    if(!args.length) return console.log("usage: node index.js <url> <concurrency(Default: 20)>")

    const paths = fs.readFileSync("./paths.txt", "utf8").replace(/\r/g, "").split("\n")

    console.log("Admin panels finding has started.")
    await runJobs(
        paths,
        async(path, index, max)=>{
            if(!path.match(/^\//)) path = `/${path}`

            try{
                var response = await request(`${args[0]}${path}`, { timeout: 5000 })

                const dom = new JSDOM(response.body)

                if(dom.window.document.querySelector("input") && response.body.indexOf("Login") !== -1){
                    if(response.statusCode === 200){
                        console.log("Admin panel found:", path)
                    }else if(response.statusCode === 202){
                        console.log("Unsure admin panel found:", path)
                    }
                }
            }catch{}
        },
        {
            concurrency: args[1] ?? 20
        }
    )

    console.log("Finished.")
})()
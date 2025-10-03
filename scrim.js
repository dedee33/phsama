const pup = require("puppeteer")
const path = require("path")
const fs = require("fs")
const fsp = fs.promises
const targets = ["https://www.flipkart.com/grocery-supermart-store?marketplace=GROCERY",
  "https://www.flipkart.com/grocery/staples/dals-pulses/pr?sid=73z%2Cbpe%2C3uv&marketplace=GROCERY&page=2",
  "https://www.flipkart.com/grocery/staples/dals-pulses/pr?sid=73z%2Cbpe%2C3uv&marketplace=GROCERY&page=3",
  "https://www.flipkart.com/grocery/staples/ghee-oils/ghee/pr?sid=73z%2Cbpe%2C4wu%2Cum4&marketplace=GROCERY&param54678976543567890&BU=Grocery",
  "https://www.flipkart.com/grocery/staples/dals-pulses/pr?sid=73z%2Cbpe%2C3uv&marketplace=GROCERY"
];

let browser,page
let run = []
let products =  []
let start = 5000

const login = async (dir)=>{
    try{
        browser = await pup.launch({headless:false})
        page = await browser.newPage()
        await page.goto(dir,{timeout:1000000000})
        await page.waitForSelector("div")
        await page.waitForSelector('input')

        setTimeout(patience,10000)
     

    }catch(err){
        console.log(` Error : ${err.message}`)
    }
}

 const patience = async()=>{
            try{
        const inputs = await page.$$eval("input",inps => inps.map(inp =>inp.type))
        console.log(`Input field found : ${inputs}`)

        const names = await page.$$eval("input",inps => inps.map(inp => inp.name))
        console.log(`Input Names : ${names}`)


      await page.type("input[dir='auto']","713325",{delay:1000})
      console.log("Text type clicked")

     const elements = await page.$$("div[dir='auto']")
     const len = elements.length - 1


     await elements[len].click()
     console.log("Submitted")



        const buttons = await page.$$eval("div[dir='auto']",bts => bts.map(bt =>bt.textContent))
        console.log(`Button : ${buttons}`)
        start = 5000
    
            }catch(err){
                
                console.log(`Error G : ${err.message}`)
                
            }
        }

let scrap = async ()=>{
    try{
        let m = 0
        let con =  "._25HC_u a"
        const prods = await page.$$eval('div[style="color: rgb(51, 51, 51); box-sizing: border-box; display: -webkit-box; white-space: pre-wrap; overflow-wrap: break-word; border-width: 0px; -webkit-line-clamp: 2; max-width: 100%; overflow: hidden; text-overflow: ellipsis; -webkit-box-orient: vertical;"]',ps => ps.map(p => p.textContent))
        const dics = await page.$$('div[style="color: rgb(0, 139, 55); box-sizing: border-box; display: inline; white-space: pre-wrap; overflow-wrap: break-word; border-width: 0px;"]')
        const  news = await page.$$eval("div[style='color: rgb(51, 51, 51); font-size: 15px; line-height: 20px; font-family: inter_bold;']",ds => ds.map(d => d.textContent))
        const olds = await page.$$eval("div[style='color: rgb(112, 112, 112); padding-top: 2px; text-decoration-line: line-through; font-size: 12px; line-height: 16px; font-family: inter_regular;']",ps => ps.map(p => p.textContent))
        const ass = await page.$$eval(con,as => as.map(a => a.href))
        const cates = await page.$$eval("a[style='align-items: stretch; border-width: 0px; box-sizing: border-box; display: flex; flex: 1 1 0%; flex-direction: column; min-height: 0px; min-width: 0px; position: relative; z-index: 0; border-radius: 16px; overflow: hidden;']",tls => tls.map(tl => tl.href))
        console.log(`Categories : ${cates}`)
        for(const count of dics){
            let value = await count.evaluate(el => el.textContent?.trim() || "0"); 
            run.push(value)
    
        }


       
         
        for(let i = 0;i<prods.length;i++){
            const schema = {
                productName : prods[i],
                newPrice : news[i],
                oldPrice : olds[i],
                discount : run[i] ?? "0",
                link : ass[i]
            }

          products.push(schema)
          console.log(`\n\n Product\t : ${JSON.stringify(schema)}`)
      

        }


        console.log(`\n\n Total Products 🕷️ ::: ${products.length}`)
        const cookies = await page.cookies()
        fsp.writeFile("two.json",JSON.stringify(cookies ))

    }catch(err){
        console.log(`Error Scrapping Pagee : : ${err.message}`)
    }
}

const main = async ()=>{
    
 await login(targets[0])

 setTimeout(async()=>{

    try{
        await login(targets[1])
    }catch(err){
        console.log(`Error Looping Links : ${err.message}`)
    }

 },90000)

}

main()





 try {
    // Always reload list before scraping
    if (fsp.existsSync("list.json")) {
      const exist = fsp.readFileSync("list.json", "utf-8");
      prods = JSON.parse(exist);
      console.log(`\n Using Existing List`);
    } else {
      prods = [];
      console.log(`List is Empty`);
    }
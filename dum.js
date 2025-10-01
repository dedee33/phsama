const pup = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
pup.use(StealthPlugin())
const fsp = require("fs")
let time = 5000
const {Telegraf,Markup} = require('telegraf')
const { executablePath } = require('puppeteer')
const one = "https://www.flipkart.com/grocery/~cs-1wsmmy3voa/pr?sid=73z&marketplace=GROCERY&collection-tab-name=Vrocery&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkRlYWxzIG9mIHRoZSBEYXkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&bu=MIXED&pageUID=1747032438816&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkRlYWxzIG9mIHRoZSBEYXkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Grocery"
const two = "https://www.flipkart.com/grocery/staples/dry-fruits-nuts-seeds/pr?sid=73z%2Cbpe%2Cdtp&marketplace=GROCERY"
const three ="https://www.flipkart.com/grocery/staples/dry-fruits-nuts-seeds/pr?sid=73z%2Cbpe%2Cdtp&marketplace=GROCERY&page=2"
const four = "https://www.flipkart.com/store/pr?sid=73z,njl,sn6,oav,&marketplace=GROCERY&BU=Grocery"
const five = "https://www.flipkart.com/store/pr?sid=73z%2Cnjl%2Csn6%2Coav%2C&marketplace=GROCERY&BU=Grocery&page=2"
const six = "https://www.flipkart.com/grocery/staples/masalas-spices/pr?sid=73z%2Cbpe%2Ca6m&marketplace=GROCERY&param567896546789&BU=Grocery"
const seven = "https://www.flipkart.com/grocery/staples/masalas-spices/pr?sid=73z%2Cbpe%2Ca6m&marketplace=GROCERY&param567896546789=&BU=Grocery&page=2"
const eight = "https://www.flipkart.com/grocery/staples/masalas-spices/pr?sid=73z%2Cbpe%2Ca6m&marketplace=GROCERY&param567896546789=&BU=Grocery&page=3"
const nine = "https://www.flipkart.com/grocery/staples/masalas-spices/pr?sid=73z%2Cbpe%2Ca6m&marketplace=GROCERY&param567896546789=&BU=Grocery&page=4"
const ten = "https://www.flipkart.com/grocery/staples/masalas-spices/pr?sid=73z%2Cbpe%2Ca6m&marketplace=GROCERY&param567896546789=&BU=Grocery&page=5"
const a = "https://www.flipkart.com/grocery/staples/dry-fruits-nuts-seeds/pr?sid=73z%2Cbpe%2Cdtp&marketplace=GROCERY&param8732764523864&BU=Grocery"
const b = "https://www.flipkart.com/grocery/staples/dry-fruits-nuts-seeds/pr?sid=73z%2Cbpe%2Cdtp&marketplace=GROCERY&param8732764523864=&BU=Grocery&page=2"
const c = "https://www.flipkart.com/grocery/staples/dry-fruits-nuts-seeds/pr?sid=73z%2Cbpe%2Cdtp&marketplace=GROCERY&param8732764523864=&BU=Grocery&page=3"
const d = "https://www.flipkart.com/grocery/~cs-x4uyk4c96y/pr?sid=73z&marketplace=GROCERY&collection-tab-name=Grocery&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkNvb2tpbmcgRXNzZW50aWFscyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Grocery"
const e = "https://www.flipkart.com/grocery/~cs-x4uyk4c96y/pr?sid=73z&marketplace=GROCERY&collection-tab-name=Grocery&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkNvb2tpbmcgRXNzZW50aWFscyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Grocery&page=2"
const f = "https://www.flipkart.com/grocery/~cs-272yy4u75v/pr?sid=73z&marketplace=GROCERY&collection-tab-name=Grocery&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIk1heGltaXNlIFNhdmluZ3MiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&bu=MIXED&pageUID=1747032426133&param76543234567890987654&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIk1heGltaXplZCBTYXZpbmdzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Grocery"
const g = "https://www.flipkart.com/grocery/~cs-zjuvpa8jbw/pr?sid=73z&marketplace=GROCERY&collection-tab-name=Grocery&p%5B%5D=facets.discount_range_v1%255B%255D%3D30%2525%2Bor%2Bmore&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkdyYWIgb3IgR29uZSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&bu=MIXED&pageUID=1747032497840&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkdyYWIgb3IgR29uZSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Grocery"
const h = "https://www.flipkart.com/grocery/~cs-74791gxrz6/pr?sid=73z&marketplace=GROCERY&collection-tab-name=Grocery&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkZlYXR1cmVkIFRoaXMgV2VlayJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&bu=MIXED&pageUID=1747032481993&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkZlYXR1cmVkIFRoaXMgV2VlayJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Grocery"
const i = "https://www.flipkart.com/grocery/~cs-nv1u8o9jy9/pr?sid=73z%2Cu0u%2Cltz%2Clgo&marketplace=GROCERY&param87346783498549835&BU=Grocery"
const j = "https://www.flipkart.com/grocery/~cs-nv1u8o9jy9/pr?sid=73z%2Cu0u%2Cltz%2Clgo&marketplace=GROCERY&param87346783498549835=&BU=Grocery&page=2"
const k = "https://www.flipkart.com/grocery/packaged-food/noodles-pasta/pasta/pr?sid=73z,u0u,ltz,ui7&marketplace=GROCERY"
const l = "https://www.flipkart.com/store/pr?sid=73z,u0u,bx9,bmr,&marketplace=GROCERY&BU=Grocery"
const m = "https://www.flipkart.com/grocery/staples/ghee-oils/ghee/pr?sid=73z%2Cbpe%2C4wu%2Cum4&marketplace=GROCERY&param54678976543567890&BU=Grocery"
const n = "https://www.flipkart.com/grocery/~cs-p2aytk71o9/pr?sid=73z%2Cujs%2Ceb9%2C7j9&marketplace=GROCERY&param=6576543567543567&BU=Grocery"
const o = "https://www.flipkart.com/grocery/~cs-p2aytk71o9/pr?sid=73z%2Cujs%2Ceb9%2C7j9&marketplace=GROCERY&param=6576543567543567&BU=Grocery&page=2"
const p ="https://www.flipkart.com/grocery/packaged-food/chocolates-sweets/pr?sid=73z%2Cu0u%2C7o6&marketplace=GROCERY&param=6235434734&BU=Grocery"
const q = "https://www.flipkart.com/grocery/packaged-food/chocolates-sweets/pr?sid=73z%2Cu0u%2C7o6&marketplace=GROCERY&param=6235434734&BU=Grocery&page=2"
const r = "https://www.flipkart.com/grocery/packaged-food/chocolates-sweets/pr?sid=73z%2Cu0u%2C7o6&marketplace=GROCERY&param=6235434734&BU=Grocery&page=3"
const s = "https://www.flipkart.com/grocery/packaged-food/chocolates-sweets/pr?sid=73z%2Cu0u%2C7o6&marketplace=GROCERY&param=6235434734&BU=Grocery&page=4"
const t = "https://www.flipkart.com/grocery/~cs-cpqbz0sui0/pr?sid=73z,cwl,qz9&marketplace=GROCERY&collection-tab-name=Grocery&BU=Grocery"
const u = "https://www.flipkart.com/grocery/personal-baby-care/deos-perfumes-talc/talc/pr?sid=73z%2Cnjl%2Cnp3%2C6jh&marketplace=GROCERY&param98364738545&BU=Grocery"
const v = "https://www.flipkart.com/grocery/~cs-ln03mdmqgg/pr?sid=73z%2Cbpe&marketplace=GROCERY&collection-tab-name=Grocery&param=45787854358004636363663636&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkNvb2tpbmcgRXNzZW50aWFscyBDb3JuZXIiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&bu=MIXED&pageUID=1747032585354&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkNvb2tpbmcgRXNzZW50aWFscyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Grocery"
const w = "https://www.flipkart.com/grocery/~cs-ln03mdmqgg/pr?sid=73z%2Cbpe&marketplace=GROCERY&collection-tab-name=Grocery&param=45787854358004636363663636&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkNvb2tpbmcgRXNzZW50aWFscyBDb3JuZXIiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&bu=MIXED&pageUID=1747032585354&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkNvb2tpbmcgRXNzZW50aWFscyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Grocery&page=2"
const x = "https://www.flipkart.com/grocery/~cs-ln03mdmqgg/pr?sid=73z%2Cbpe&marketplace=GROCERY&collection-tab-name=Grocery&param=45787854358004636363663636&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkNvb2tpbmcgRXNzZW50aWFscyBDb3JuZXIiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&bu=MIXED&pageUID=1747032585354&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkNvb2tpbmcgRXNzZW50aWFscyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Grocery&page=3"
const y = "https://www.flipkart.com/grocery/staples/atta-flours/pr?sid=73z,bpe,9da&otracker=categorytree&marketplace=GROCERY&fm=neo%2Fmerchandising&iid=M_5d19461e-45c1-4d08-a868-cb50edf8a136_2_5239FF3RSRUN_MC.T38QLB22YETY&otracker=dynamic_rich_navigation_3_2.navigationCard.RICH_NAVIGATION_Staples~Atta%2B%2526%2BFlours_T38QLB22YETY&otracker1=dynamic_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L1_view-all&cid=T38QLB22YETY"
const z = "https://www.flipkart.com/grocery/personal-baby-care/soaps-body-wash/body-wash/pr?sid=73z%2Cnjl%2Csn6%2Coav&marketplace=GROCERY&param=2378467263575&BU=Grocery"
const aa = "https://www.flipkart.com/grocery/~cs-smq1djplei/pr?sid=73z&marketplace=GROCERY&collection-tab-name=Grocery&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIk5ldyBMYXVuY2hlcyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&bu=MIXED&pageUID=1747032471345&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIk5ldyBMYXVuY2hlcyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Grocery"
const bb = "https://www.flipkart.com/grocery/~cs-74791gxrz6/pr?sid=73z&marketplace=GROCERY&collection-tab-name=Grocery&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkZlYXR1cmVkIFRoaXMgV2VlayJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&bu=MIXED&pageUID=1747032481993&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkZlYXR1cmVkIFRoaXMgV2VlayJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Grocery"
const cc = "https://www.flipkart.com/grocery/~cs-1riuvm1uvr/pr?sid=73z,cwl,bdc,07q&marketplace=GROCERY&collection-tab-name=Grocery&BU=Grocery"
const categories = [one,two,three,four,five,six,seven,eight,nine,ten,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,bb,cc]
const fs = fsp.promises
let browser,page
const surav = '1087475022'
const chats = [surav,'7303676688']
let updates = 0
let run = []
let prods=[]
const bot = new Telegraf(`8255851397:AAFEn9UPa8Ry1N8fAGtyYYPH8GMQtyeFnDg`)

bot.start((ctx)=>{
    ctx.reply("welcome Hommie")
})

bot.launch(()=>{
    console.log("\n\n Bot Running")
})
if(fsp.existsSync("list.json")){
    const exist = fsp.readFileSync("list.json","utf-8")
    prods = JSON.parse(exist)
    console.log(`\n Using Existing List`)
}else{
    prods = []
    console.log(`List is Empty `)
}

const Sleep = ms => new Promise(res => setTimeout(res,ms))

const login = async ()=>{
    try{
        browser = await pup.launch({headless:true})
        page = await browser.newPage()
        await page.setViewport({width:1366, height:768})
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ...')
        await page.goto("https://www.flipkart.com/grocery-supermart-store?marketplace=GROCERY",{timeout:800000})
        await Sleep(15000)
        console.log("Login page Launced")
        await patience()
        

    }catch(err){
        console.log(`Error Launching Page : ${err.message}`)
    }
}



login()





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

        await Sleep(10000)
        await scrap()
        await launch()
        await fs.writeFile("list.json", JSON.stringify(prods, null, 2));
        console.log(`📁 list.json updated. Total products: ${prods.length}`);
        await Sleep(30000)
        await login()
            }catch(err){
                
                console.log(`Error Logging in : ${err.message}`)
                await Sleep(50000)
                setTimeout(retry,time)
                
            }
        }







let scrap = async ()=>{
    try{
        const containers = await page.$$("._25HC_u")
        const size =  containers.length
        console.log(`All containers : ${size}`)

        for(const container of containers){
           const links = await container.$eval("a",links =>links.href)
           let discounts =await container.$('._1psv1zefu')
           const  newPrice =await container.$eval("div[style='color: rgb(51, 51, 51); font-size: 16px; line-height: 20px; font-family: inter_bold;']",ds => ds.textContent)
           const oldPrice =await container.$eval("div[style='color: rgb(112, 112, 112); padding-top: 2px; text-decoration-line: line-through; font-size: 12px; line-height: 16px; font-family: inter_regular;']",ps => ps.textContent)    
           const products = await container.$eval('div[style="color: rgb(51, 51, 51); box-sizing: border-box; display: -webkit-box; white-space: pre-wrap; overflow-wrap: break-word; border-width: 0px; -webkit-line-clamp: 2; max-width: 100%; overflow: hidden; text-overflow: ellipsis; -webkit-box-orient: vertical;"]',ps => ps.textContent)
           if (discounts) {
                   discounts = await discounts.evaluate(el => el.textContent.trim());
                        } else {
                    discounts = "0% OFF";
                        }
       
           console.log(`\n\nProduct : ${products} `)
           console.log(`New Price : ${newPrice}`)
           console.log(`Old Price : ${oldPrice}`)
           console.log(`Discount : ${discounts}`)
           console.log(`Links : ${links}`)

           const schema = {
                Product : products,
                Price : newPrice,
                Old : oldPrice,
                Discount: discounts,
                Link : links
           }
           const item = prods.find(p => p.Product == products)
            
if (item) {
    // Compare properties
    if (item.Price !== newPrice && item.link == links) {
             const priceNumber = Number(newPrice.replace(/[^0-9.]/g,""))
             const discountNumber = Number(discounts.replace(/[^0-9.]/g,""))
             const mrp = priceNumber - (1-discountNumber/100)

      console.log(`\n\n ✅✅ Price Change detected :`)
      console.log(`Product : ${products}`)
      console.log(`New Price : ${newPrice}`)
      console.log(`Old Price : ${mrp}`)
      console.log(`Discount : ${discounts}`)
      console.log(`Link : ${links}`)
      const craft = `<b>\t⚠️  <u> New Price change detected </u>  ⚠️ </b>\n\n\n<b> 🛒 Product : </b> <code>${products}</code> \n\n<b>🆕 New Price : </b> <code>${newPrice}</code> \n\n<b>🕷️ Old Price : </b> <code>${mrp}</code> \n\n<b>🎗️ Discount : </b> <code>${discounts}</code> \n\n <b>Links : </b>  ${links}`
      for(const chat of chats){
        const chatId = Number(chat)
        try{
        const send = await bot.telegram.sendMessage(chatId,craft,{parse_mode:"HTML"})
        console.log('Message sent to bot ')
         const del = async ()=>{
            try{
                await bot.telegram.deleteMessage(chatId,send.message_id)
                console.log('Message deleted : ',send.message_id)
            }catch(err){
                console.log(`Could not delete Message 🎗️🎗️  : ${err.message}`)
            }
         }
           setTimeout(del,9000000)
           item.Price = newPrice; // update it
           item.Discount = discounts;
           item.Old = oldPrice
      }catch(err){
        console.log('Could not Send message to telegram : ',err.message)
      }

    }

    
      await fs.writeFile("list.json", JSON.stringify(prods, null, 2));
    
  } else {
    prods.push(schema);
    console.log("New product added:", products); 
    updates ++
    await fs.writeFile("list.json", JSON.stringify(prods, null, 2));
  }
}
        const total = prods.length
        console.log(`\n\n Total Products :  ${total}`)
        await fs.writeFile("list.json",JSON.stringify(prods,null,2))
        await Sleep(2000)
        await Sleep(5000)
        await fs.writeFile("list.json",JSON.stringify(prods,null,2))
        console.log(`Items Added to list : [${updates}]`)
    }
    
    }catch(err){
        console.log(`Error Scrapping Pagee : : ${err.message}`)
    }
}






const scrap2 = async(dir)=>{
   try{
    await page.goto(dir,{timeout:90000000})
    await page.waitForSelector('.M8JyK1')
    const title = await page.title()
    await Sleep(10000)
    await climb()
    const total = prods.length
    console.log(`\n\nTotal items :: [${total}]`)
    console.log(`New Updates :: [${updates}]`)


   }catch(err){
    console.log(`Could not launch target ❌ :: ${err.message}`)
     console.log(`Items Added to list : [${updates}]`)
     setTimeout(retry,time)
   }
}



const launch = async (victim)=>{
  for(victim of categories){
   try{
    await scrap2(victim)
   }catch(err){
    console.log('💀💀💀 Theee Launching error')
   }
  }
}


const climb = async ()=>{
  try{
    const containers = await page.$$(".M8JyK1")
    const len = containers.length
    console.log(`Containers : [${len}]`)
    
    for(const container of containers){
        let name = await container.$eval('a',a => a.title)
        const link = await container.$eval('a',a => a.href)
        const latest = await container.$eval('.GvWNMG',a=>a.textContent)
        const ancient = await container.$eval('.yRaY8j',a => a.textContent)
        let discount = await container.$('.jFaZKp span')
        
        if(discount){
            discount = await discount.evaluate(a => a.textContent.trim())
        }else{
            discount = "0% OFF";
        }
        console.log(`\n\n New Product : ${name}`)
        console.log(`Price :  ${latest}`)
        console.log(`Old Price : ${ancient}`)
        console.log(`Discount :: ${discount}`)
        console.log(`Link ::: ${link}`)
        const schema = {
                Product : name,
                Price : latest,
                Old : ancient,
                Discount: discount,
                Link : link
           }

        let item = prods.find(p => p.Product == name)
        if(item){
            if(item.Price !== latest && item.link == link){

                const priceNumber = Number(latest.replace(/[^0-9.]/g,""))
                const discountNumber = Number(discount.replace(/[^0-9.]/g,""))
                const mrp = priceNumber - (1-discountNumber/100)
        
                  console.log(`\n\n ✅✅ Price Change detected :`)
                  console.log(`Product : ${name}`)
                  console.log(`New Price : ${latest}`)
                  console.log(`Old Price : ${mrp}`)
                  console.log(`Discount : ${discount}`)
                  console.log(`Link : ${link}`)
                  const craft2 = `<b>\t ⚠️ <u>  New Price change detected</u>   ⚠️</b>\n\n \n<b>Product : </b> <code> ${name}</code>\n<b>\n\nNew Price : </b> <code>${latest}</code>\n<b>\n\nOld Price : </b><code> ${mrp}</code>\n<b>\n\nDiscount : </b> <code>${discount}</code>\n<b>\n\nLinks : </b> ${link}`

                 for(const chat of chats){
                    const chatId = Number(chat)
                     try{
                    await Sleep(2000)
                    const send = await bot.telegram.sendMessage(chat,craft2,{parse_mode:"HTML"})
                    console.log(`Message sent to telegram bot`)
                    const del = async ()=>{
                                try{
                                     await bot.telegram.deleteMessage(chatId,send.message_id)
                                     console.log('Message deleted : ',send.message_id)
                                   }catch(err){
                                     console.log(`Could not delete Message 🎗️🎗️  : ${err.message}`)
                                   }
                                  }

                     setTimeout(del,90000000)
                     item.Old = ancient;
                     item.Price = latest;
                     item.Discount = discount;
                     await fs.writeFile("list.json", JSON.stringify(prods, null, 2));
                  }catch(err){
                    console.log(`Could not send message to telegram User : ${err.message}`)
                  }
                 }

                       
            }
        }else{
            prods.push(schema)
            updates ++
            console.log(`\n\n Added new item : ${name}`)
            await fs.writeFile("list.json", JSON.stringify(prods, null, 2));
            console.log(`📁 list.json updated. Total products: ${prods.length}`);
        }
    }
    
  }catch(err){
    console.log(`\n\n❌❌❌ :: ${err.message}`)
        
  }
}

const retry = async()=>{
    try{
        await patience()
        console.log(`Retried successfully`)
        time = 5000
    }catch(err){
          console.log(`Could not retry scrapping dawag : ${err.message}`)
          time *= 1.54
          setTimeout(retry,time)
    }
}
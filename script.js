async function loadPortfolio(){

let portfolioRes = await fetch("portfolio.json")

let portfolio = await portfolioRes.json()

let coins = portfolio.map(p => p.coin).join(",")

let priceRes = await fetch(
"https://api.coingecko.com/api/v3/simple/price?ids="+coins+"&vs_currencies=usd"
)

let prices = await priceRes.json()

let table = document.getElementById("portfolioTable")

let total=0

let labels=[]
let values=[]

portfolio.forEach(asset=>{

let price=prices[asset.coin].usd

let value=price*asset.amount

total+=value

labels.push(asset.symbol)
values.push(value)

let row=

"<tr>"+
"<td>"+asset.symbol+"</td>"+
"<td>"+asset.amount+"</td>"+
"<td>$"+price+"</td>"+
"<td>$"+value.toFixed(2)+"</td>"+
"</tr>"

table.innerHTML+=row

})

document.getElementById("totalValue").innerHTML="$"+total.toFixed(2)

drawChart(labels,values)

}

loadPortfolio()

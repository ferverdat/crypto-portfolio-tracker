function drawChart(labels,values){

new Chart(document.getElementById("chart"),{

type:"pie",

data:{

labels:labels,

datasets:[{

data:values

}]

}

})

}

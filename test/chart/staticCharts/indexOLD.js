//Pseudo code
//Step 1: Define chart properties.
//Step 2: Create the chart with defined properties and bind it to the DOM element.
//Step 3: Add the CandleStick Series.
//Step 4: Set the data and render.


//Code
const log = console.log;

const chartProperties = {

  priceScale: {
		position: 'right',
	},
	
	
	localization: {
        priceFormatter: function(price) {
            // add $ sign before price

          //  return '' + price;
           return '' + price.toFixed(8);
           },
        },
	
	crosshair: {
		mode: LightweightCharts.CrosshairMode.Normal,
	},
	
  timeScale:{
    timeVisible:true,
    secondsVisible:true,
  }
}

const domElement = document.getElementById('tvchart');
const chart = LightweightCharts.createChart(domElement,chartProperties);
const candleSeries = chart.addCandlestickSeries();

/*
[1503014400000,"302.00000000","311.79000000","283.94000000","293.96000000","9537.84646000",1503100799999,"2858946.50935390",5658,"7452.43542000","2240813.26122640","55329.57432378"],[1503100800000,"293.31000000","299.90000000","278.00000000","290.91000000","2146.19773000",1503187199999,"620022.58986170",1795,"1537.97550000","444713.61220860","58005.17104565"],[1503187200000,"289.41000000","300.53000000","282.85000000","299.10000000","2510.13871000",1503273599999,"742847.89455990",2038,"2186.68739000","647506.06202050","60299.06615403"],[1503273600000,"299.10000000","346.52000000","294.60000000","323.29000000","5219.44542000",1503359999999,"1689472.34121400",3925,"4004.19967000","1297977.42311420","66203.84022245"]
[1503014400000,"302.00000000","311.79000000","283.94000000","293.96000000","9537.84646000",1503100799999,"2858946.50935390",5658,"7452.43542000","2240813.26122640","55329.57432378"],[1503100800000,"293.31000000","299.90000000","278.00000000","290.91000000","2146.19773000",1503187199999,"620022.58986170",1795,"1537.97550000","444713.61220860","58005.17104565"],[1503187200000,"289.41000000","300.53000000","282.85000000","299.10000000","2510.13871000",1503273599999,"742847.89455990",2038,"2186.68739000","647506.06202050","60299.06615403"],[1503273600000,"299.10000000","346.52000000","294.60000000","323.29000000","5219.44542000",1503359999999,"1689472.34121400",3925,"4004.19967000","1297977.42311420","66203.84022245"]


eos-charts (from binance)

http://63.250.37.151:9997/?symbol=TEST1&limit=10
*/





 



function update_thread()
{


 

  const Http = new XMLHttpRequest();
  //          const url='http://63.250.37.151:9997/?symbol=TEST1&limit=20';
            
//             const url='http://63.250.37.151:9998/?symbol=EOS_SOV&frame=1m&limit=500';
//             const url='https://www.eossov.one/service/bars.php?symbol=EOS_SOV&frame=1m&limit=500';             const url='https://www.eossov.one/service/bars.php?symbol=EOS_SOV&frame=1m&limit=500';
             url = globalurl;

            Http.open("GET", url);
            Http.send();

            Http.onreadystatechange = (e) => 
                {                
                //  console.log(Http.responseText);
                
                console.log("VAL:...");
                var jsonobj = JSON.parse(Http.responseText);
                //console.log(jsonobj);
                
                size = jsonobj.bars.length;
                console.log("S: " + size);
                
                // "id":"272",  "ts":"1579351200000", "o":"2.469083786010742", "c":"2.469083786010742",  "h":"2.469083786010742", "l":"2.469083786010742"  } ,
                var data3 = [];
                for (var i=0; i<size; i++)
                    {

                    var tmparray = [];

                    tmparray.push ( jsonobj.bars[i].ts );
                    tmparray.push ( jsonobj.bars[i].o );
                    tmparray.push ( jsonobj.bars[i].h );
                    tmparray.push ( jsonobj.bars[i].l );
                    tmparray.push ( jsonobj.bars[i].c );

                    data3.push( tmparray );
 
                    }
                
  //              val_open = jsonobj.bars[0].o;
//console.log(val_open);

//console.log(jsonobj);

//---
 
  

// data3 = JSON.stringify(data2);

// const cdata = data2.map(d => {
 const cdata = data3.map(d => {
      return {time:d[0]/1000,open:parseFloat(d[1]),high:parseFloat(d[2]),low:parseFloat(d[3]),close:parseFloat(d[4])}
    });
 candleSeries.setData(cdata);
//---
            
            
             
                } // ready
                
 // chart.resize(document.body.offsetHeight, document.body.offsetWidth);
  
 var zeit = setTimeout("update_thread()", 10000);
} //// update_thread



update_thread();



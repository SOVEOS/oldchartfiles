console.log("grab\n");

const thetoken = "POW";
const thepair  = "POW_PBTC";


var request = require('request');
//            const theurl='https://api.kraken.com/0/public/Ticker?pair=EOSUSD,EOSEUR';
            const theurl='http://jungle.eossweden.org/v1/chain/get_table_rows';
           // curl --request POST  --url http://jungle.eossweden.org/v1/chain/get_table_rows  --data '{"code":"sovdexrelays","scope":"EOS","table":"pair", "json":true }'
           // curl --request POST  --url https://eos.greymass.com/v1/chain/get_table_rows  --data '{"code":"sovdexrelays","scope":"EOS","table":"pair", "json":true }'

var options2 = {
  url: 'http://api.cypherglass.com/v1/chain/get_table_rows',
  method: 'POST',
  json: {
     "code":"sovdexrelays","scope":thetoken,"table":"powpair", "json":true  
  }
};

 
request(options2, function (error, response, body) 
   {
  if (!error && response.statusCode == 200) {
  console.log("---\n");
    console.log(body);
  console.log("---\n");
  price_pow_pbtc =  body.rows[0].price * 1;
  console.log("===\n");
   console.log("P: ["+price_pow_pbtc+"]\n");
   

             
             
             
             
             var request2 = require('request');
//            const theurl2='http://63.250.37.151:9999/?action=addtick&symbol=EOS_USD&p='+price_eos_usd;
            const theurl2='http://63.250.37.151:9999/?action=addtick&symbol='+thepair+'&p='+price_pow_pbtc;
            console.log("url2: " + theurl2);

request2(theurl2, function (error, response, body) 
   {
  if (!error && response.statusCode == 200) {
  
   // var jsonobj = JSON.parse(body);
                
                
             console.log(body); // Show the HTML for the Google homepage. 
             
             // - PRICEUPDATE
  }
  else {
    console.log("Error "+response.statusCode)
  }
})
             
             
             
             
             
             /// ----------
  }
  else {
    console.log("Error "+response.statusCode)
  }
})

      /*    
            const Http = new XMLHttpRequest();
            const url='https://api.kraken.com/0/public/Ticker?pair=EOSUSD,EOSEUR';
            Http.open("GET", url);
            Http.send();

            Http.onreadystatechange = (e) => 
                {                
                //  console.log(Http.responseText);
                var jsonobj = JSON.parse(Http.responseText);
                //console.log(jsonobj);
                price_eos_usd = jsonobj.result.EOSUSD.c[0];
                price_eos_eur = jsonobj.result.EOSEUR.c[0];
               
              //  document.getElementById("barcodedebug").innerHTML = "E: " + price_eos_usd;
              //  document.getElementById("barcodedebug2").innerHTML = "E: " + price_eos_eur;

                console.log( "1 EOS $" + price_eos_usd + "" );
                console.log( "1 EOS " + price_eos_eur + "€" );

                }
                
                */
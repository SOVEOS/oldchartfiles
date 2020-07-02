const http = require('http');
const url = require('url');
const config = require('../config.json');
const mysql = require('mysql');

const hostname = '45.76.95.186';
const port = 9999;


var con = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});



console.log("Admin "+gettimestamp());



function gettimestamp()
{
ret = Math.floor(Date.now() /1000);

return(ret);
} // gettimestamp



const server = http.createServer((req, res) => {


    
    if ( req.url == "/favicon.ico" )
       {
       res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
   res.write('<h1>Title '+req.url+'</h1>');
  
       return(0);
        
       }
  
  console.log("URL: " + req.url );

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
   res.write('<h1>Title '+req.url+'</h1>' + gettimestamp() + '<br>');
  
  
  
  
 var myargs = url.parse(req.url, true).query;
  console.log('myArgs: ', myargs);

 console.log("Action: " + myargs.action );
 
 if ( myargs.action == "addtoken")
    {
    var name = myargs.name;
    var symbol = myargs.symbol;
    
    if (name == undefined) 
       {
       res.end('Error name<br>');
       return;
       }

    if (symbol == undefined) 
       {
       res.end('Error symbol<br>');
       return;
       }

    console.log("Add Token " + name);
    
    res.write('Add token '+name+'<br>');
    
    // 
    // Query
    //
    
    
var con = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

con.connect(function(err) 
  {
  if (err) throw err;


 query = "select id from token where name='"+name+"'";  
 console.log("Q2: " + query);
    con.query( query , function (err, result2, fields) 
    {
     if (result2 == undefined || result2.length == 0)
       {
       max = 0;
       console.log("Token not found");
   //    res.write("token not found<br>");
       
       //
       // BEGIN Token NOT found
       //

    
    

    
    query = "select max(id)  as id from token ";  
    con.query( query , function (err, result, fields) 
    {
 //   if (err) throw err;
    
    console.log("RES: " );
    console.log(result);
    
    var max = 0;
    if (result == undefined)
       {
       max = 0;
       console.log("Result is empty");
       
    //   query = "create table "+tablename8+" (id int primary key not null, pairid int, ts bigint, o double, c double, h double, l double, v double )";  
      // con.query(query, function (err, result, fields) { console.log(".")   }   );
       
       } else
         {
         // rows[0].namesCount
         max = result[0].id * 1;
         max++;
         console.log("Result is not empty (max: "+max+")");
         }
         
     
     query = "insert into token (id,name,symbol) values('"+max+"','"+name+"','"+symbol+"');";  
     console.log("Q: " + query);
                con.query(query, function (err, result, fields) 
                         { 
                         console.log("_");
                         });
                         
                              
    
    }); // query        
    
    
    
    

       //
       // END Token NOT found
       //
       
       
       
       } else
         {
         console.log("Token  found");
         // res.write("token found<br>");
         
         }
    } ); // if Token found?    
    
    
    } );// con.connect(function(err) 
    //
    // END Query
    //
    
    res.end("<br>");
    } //  if ( myargs.action == "addtoken")







 if ( myargs.action == "addpair")
    {
    var symbolname   = myargs.symbol;
    var token_base   = myargs.base;
    var token_quote  = myargs.quote;
    var base_id      = -1;
    var quote_id     = -1;
        
    if (symbolname == undefined) 
       {
       res.end('Error symbolname<br>');
       return;
       }

    if (token_base == undefined) 
       {
       res.end('Error token_base<br>');
       return;
       }

    if (token_quote == undefined) 
       {
       res.end('Error token_quote<br>');
       return;
       }

    console.log("Add Pair " + symbolname);
    
    res.write('Add Pair '+symbolname+'<br>');
    
    // 
    // Query
    //
    
    
var con = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

con.connect(function(err) 
  {
  if (err) throw err;
  
  /*
  
  query = "select id from pair where symbol='"+symbolname+"'";  
  console.log("Q2: " + query);
  con.query( query , function (err, result2, fields) 
    {
    
     if (result2 == undefined || result2.length == 0)
       {       
       console.log("Pair not found");
       
       
       
       // console.log("Pair not found");
       } else
         {
         console.log("Pair found");
         }
    
    } ); // con.query
  */
  
  
  query = "select id from pair where symbol='"+symbolname+"'";  
  console.log("Q2: " + query);
  con.query( query , function (err, result2, fields) 
    {
    
     if (result2 == undefined || result2.length == 0)
       {       
       console.log("Pair not found");
       
       
       
       //
       // Get Base-id 
       //
       query = "select id from token where symbol='"+token_base+"'";  
       console.log("Q2: " + query);
       con.query( query , function (err, result2, fields) 
          {
    
          if (result2 == undefined || result2.length == 0)
             {       
             console.log("Token not found");
       
       
             } else
               {
               console.log("Token_base found... ");
               console.log(result2);
               base_id = result2[0].id;
               console.log("Token_base found: " + base_id );



               // ... Get Quote-id
        
               //
               // Get Quote-id 
               //
               query = "select id from token where symbol='"+token_quote+"'";  
               console.log("Q2: " + query);
               con.query( query , function (err, result2, fields) 
                   {
    
                   if (result2 == undefined || result2.length == 0)
                      {       
                      console.log("Token not found");              
                      } else
                        {
                        console.log("Token_quote found... ");
                        console.log(result2);
                        quote_id = result2[0].id;
                        console.log("Token_quote found: " + quote_id );
 
                        console.log("BID:"+base_id+" QID:" + quote_id + " symbolname:" + symbolname );
                        
                        //
                        // Create Pair
                        //
                        
                        
                        query = "select max(id)  as id from pair ";  
                        con.query( query , function (err, result, fields) 
                            {
                            //   if (err) throw err;    
                            console.log("RES: " );
                            console.log(result);
    
                            var max = 0;
                            if (result == undefined)
                               {
                               max = 0;
                               console.log("Result is empty");              
                               } else
                                 {
                                 max = result[0].id * 1;
                                 max++;
                                 console.log("Result is not empty (max: "+max+")");
                                 }
         
     
                            query = "insert into pair (id,symbol,base,quote) values('"+max+"','"+symbolname+"','"+base_id+"','"+quote_id+"');";  
                            console.log("Q: " + query);
                            con.query(query, function (err, result, fields) 
                                { 
                                console.log("_");
                                });
                         
                                  
                            }); // query        
    
    
                        //
                        // END - Create Pair
                        //
                        
                        } // Token_quote found 
    
                   } ); // con.query token_quote
 




               } // token_base found 
    
          } ); // con.query token_base
       
       
       
       // console.log("Pair not found");
       } else
         {
         console.log("Pair found");
         }
    
    } ); // con.query
    

  // Search token_quote
/*
 query = "select id from token where name='"+name+"'";  
 console.log("Q2: " + query);
    con.query( query , function (err, result2, fields) 
    {
     if (result2 == undefined || result2.length == 0)
       {
       max = 0;
       console.log("Token not found");
   //    res.write("token not found<br>");
       
       //
       // BEGIN Token NOT found
       //

    
    

    
    query = "select max(id)  as id from token ";  
    con.query( query , function (err, result, fields) 
    {
 //   if (err) throw err;
    
    console.log("RES: " );
    console.log(result);
    
    var max = 0;
    if (result == undefined)
       {
       max = 0;
       console.log("Result is empty");
       
    //   query = "create table "+tablename8+" (id int primary key not null, pairid int, ts bigint, o double, c double, h double, l double, v double )";  
      // con.query(query, function (err, result, fields) { console.log(".")   }   );
       
       } else
         {
         // rows[0].namesCount
         max = result[0].id * 1;
         max++;
         console.log("Result is not empty (max: "+max+")");
         }
         
     
     query = "insert into token (id,name,symbol) values('"+max+"','"+name+"','"+symbol+"');";  
     console.log("Q: " + query);
                con.query(query, function (err, result, fields) 
                         { 
                         console.log("_");
                         });
                         
                              
    
    }); // query        
    
    
    
    

       //
       // END Token NOT found
       //
       
       
       
       } else
         {
         console.log("Token  found");
         // res.write("token found<br>");
         
         }
    } ); // if Token found?    
    
    
    */
    
    
    } );// con.connect(function(err) 
    //
    // END Query
    //
    
    res.end("<br>");
    } //  if ( myargs.action == "addpair")







});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

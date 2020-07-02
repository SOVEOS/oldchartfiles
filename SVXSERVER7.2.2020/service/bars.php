<?php
header('Content-Type: application/json; charset=utf-8');

 
$symbol   = trim($_REQUEST['symbol']);
$frame    = trim($_REQUEST['frame']);
$limit    = trim($_REQUEST['limit']);

//print("BARS 2 $symbol $frame $limit<br>");
  

$url = "http://45.76.95.186:443/?symbol=".$symbol."&frame=".$frame."&limit=".$limit;
//$url = "http://63.250.37.151:9997/?symbol=TEST1";
 
 
 
//print("[".$url."]<br>");

 		   $ch = curl_init($url);
			@curl_setopt($ch, CURLOPT_MUTE, 1);
			curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
			
			//curl_setopt($ch, CURLOPT_USERAGENT, 'Googlebot/2.1 (+http://www.google.com/bot.html)');
	
		//	curl_setopt($ch, CURLOPT_POST, 1);
		//	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: text/json'));
			///curl_setopt($ch, CURLOPT_POSTFIELDS, "XML=".$xmlcontent."&password=".$password."&etc=etc");

//			curl_setopt($ch, CURLOPT_POSTFIELDS, "XML=".$xml_data);
		//	curl_setopt($ch, CURLOPT_POSTFIELDS, $xml_data);
		 	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
		
		
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			$file_contents = curl_exec($ch);
			
//$l = strlen($file_contents);
//print("L: $l <br>");

if( curl_errno($ch))
{
/*
print("<pre>");
$error = curl_error($ch);
 print_r($error);
print("</pre>");  
*/
/*
    $info = curl_getinfo($ch);
print("<pre>");
   print_r($info);
print("</pre>");   
*/
}


curl_close($ch);    
print($file_contents);


/*
CURL
   $ch = curl_init();        
       curl_setopt ($ch, CURLOPT_URL, $url);
       curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
       curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
       $file_contents = curl_exec($ch);
       
       curl_close($ch);

$xml = @simplexml_load_file( $file_contents );
 
----
$file = 'people.txt';
$file_contents 
file_put_contents($file, $file_contents );
----

<?php
//// XML-Data as parameter
 $xml_data ="<xml><color01>".$xml_parser->structure[0]->symbol[$i]->color ."</color01></xml>";

//// This url contains a script, which receives the xml-data and deliveres xml data back
$URL = "http://www.webcropcircles.com/cc/smartsvg/herz.php";
 
			$ch = curl_init($URL);
			@curl_setopt($ch, CURLOPT_MUTE, 1);
			curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: text/xml'));
			///curl_setopt($ch, CURLOPT_POSTFIELDS, "XML=".$xmlcontent."&password=".$password."&etc=etc");

//			curl_setopt($ch, CURLOPT_POSTFIELDS, "XML=".$xml_data);
			curl_setopt($ch, CURLOPT_POSTFIELDS, $xml_data);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			$file_contents = curl_exec($ch);
			curl_close($ch);    
 $xml = @simplexml_load_string( $file_contents );
*/
 
 //print("FIN<br>");
  
 
?>
<?php
$symbol = $_REQUEST['symbol'];
$frame = $_REQUEST['frame'];

if ($symbol == "") $symbol = "EOS_PBTC";
if ($frame == "") $frame = "4h";

//$url = "https://www.eossov.one/test/chart/staticCharts/index.php?symbol=DICE_SOV&frame=5m&limit=500";
$url = "https://www.eossov.one/test/chart/staticCharts/index.php?symbol=".$symbol."&frame=".$frame."&limit=500";
?>
<html>
<body>

<h1>SOVDEX Chartdemo (beta)</h1>
<?php print($url); ?><br>

<?php

/*
1m=1minute 
5m=5minute 
15m=15minutes 
30m=30 minutes 
1h=1hour 
4h=15hour 
1d=24h, 
1month=30 days 

http://63.250.37.151:9090/?action=addpair&symbol=EOS_SOV&base=EOS&quote=SOV
http://63.250.37.151:9090/?action=addpair&symbol=DAPP_SOV&base=DAPP&quote=SOV

http://63.250.37.151:9090/?action=addpair&symbol=TPT_SOV&base=TPT&quote=SOV
http://63.250.37.151:9090/?action=addpair&symbol=NDX_SOV&base=NDX&quote=SOV
http://63.250.37.151:9090/?action=addpair&symbol=PEOS_SOV&base=PEOS&quote=SOV
http://63.250.37.151:9090/?action=addpair&symbol=PGL_SOV&base=PGL&quote=SOV
http://63.250.37.151:9090/?action=addpair&symbol=DICE_SOV&base=DICE&quote=SOV
http://63.250.37.151:9090/?action=addpair&symbol=FROG_SOV&base=FROG&quote=SOV
*/

$array_symbol[0] = "EOS_PBTC";
$array_symbol[1] = "SOV_EOS";
$array_symbol[2] = "SOV_USDT";
$array_symbol[3] = "SVX_EOS";
$array_symbol[4] = "POW_PBTC";


$array_frame[0] = "1m";
$array_frame[1] = "5m";
$array_frame[2] = "15m";
$array_frame[3] = "30m";
$array_frame[4] = "1h";
$array_frame[5] = "4h";
$array_frame[6] = "1d";
$array_frame[7] = "1m";


$l1 = count($array_symbol);
$l2 = count($array_frame);

for ($i =0; $i <$l1; $i++)
{
for ($i2=0; $i2<$l2; $i2++)
    {
    $symbol2 = $array_symbol[$i];
    $frame2  = $array_frame[$i2];
    $url2 = "https://www.eossov.one/test/chart/staticCharts/demo.php?symbol=".$symbol2."&frame=".$frame2."&limit=500";
    print("<a href='".$url2."'>[".$symbol2."|".$frame2."]</a> ");
    
 
    }
   print("<br>");    
} 

?>

<div style='border:1px solid #ccccff;margin:20px;height:500'>
<iframe src='<?php print($url); ?>' 
style='width:50%;height:400px;border:none;'>
</iframe>
</div>

</body>

</html>
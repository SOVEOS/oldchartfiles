<?php
$symbol   = trim($_REQUEST['symbol']);
$frame    = trim($_REQUEST['frame']);
$limit    = trim($_REQUEST['limit']);
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Static Chart</title>
  </head>
  <body style='margin:0px;width:100%;'>
  
  <script>
  <?php
  print("var globalurl = 'https://www.eossov.one/service/bars.php?symbol=".$symbol."&frame=".$frame."&limit=".$limit."'; ");
 
  ?>
  // alert(globalurl);
  /*
  width: 100%;height: 100vh;
  */
  </script>
    
     
    <div id="tvchart" style='width: 100%;height: 100vh;'></div>
 
     
  </body>
  <script src="https://unpkg.com/lightweight-charts/dist/lightweight-charts.standalone.production.js"></script>
  <script type="text/javascript" src="index.js"></script>
</html>

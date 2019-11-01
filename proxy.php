<?
header("Access-Control-Allow-Origin: *"); //to avoid CORS error
$url = $_POST['apiURL']; // url of the page we want to get access to
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$result = curl_exec ($ch);
curl_close ($ch);
echo $result;
?>
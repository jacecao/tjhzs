<?php
// echo phpinfo();
echo $_SERVER['DOCUMENT_ROOT'];
echo '<br>';
echo dirname($_SERVER['DOCUMENT_ROOT']);
// echo '<br>';
// echo __FILE__;
// echo '<br>';
// echo realpath(__FILE__);
// echo '<br>';
// echo realpath(dirname(dirname(__FILE__))) ;

/*
$dbConfig = array(
  'dbhost' => '127.0.0.1:3306',
  'dbuser' => 'root',
  'dbpsw' => '',
  'dbname' => 'tjhzs',
  // 每次连接设置数据编码，保证前后端数据传输一致，防止乱码
  'dbcharset' => 'utf8'
);

$dsn = 'mysql:host='.$dbConfig['dbhost'].';dbname='.$dbConfig['dbname'].'; charset=utf8';
$option = array(
	PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES UTF8'
);

try {
	$db = new PDO($dsn, $dbConfig['dbuser'], $dbConfig['dbpsw'], $option);
	echo '连接成功';
} catch (PDOException $e){
	echo '连接失败'.$e->getMessage();
}
*/

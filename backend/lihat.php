<?php 
require 'koneksi.php';
$data = [];
$nip = $_GET['nip'];
$query = mysqli_query($con,"select * from karyawan where nip ='$nip'");
$jumlah = mysqli_num_rows($query);
if ($jumlah == 1) {
	$row = mysqli_fetch_object($query);
	$data = $row;
}

echo json_encode($data);
echo mysqli_error($con);

 ?>
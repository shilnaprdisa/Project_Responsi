<?php 
require 'koneksi.php';
$input = file_get_contents('php://input');
$pesan =[];

$nip = $_GET['nip'];
$query = mysqli_query($con,"delete from karyawan where nip='$nip'");
if ($query) {
	http_response_code(201);
	$pesan['status'] = 'sukses';
}else{
	http_response_code(422);
	$pesan['status'] = 'gagal';
}

echo json_encode($pesan);
echo mysqli_error($con);

 ?>
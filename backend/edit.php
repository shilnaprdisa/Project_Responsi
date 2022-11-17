<?php 
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$pesan = [];
$nip = $data['nip'];
$nama = $data['nama'];
$alamat = $data['alamat'];
$no_hp = $data['no_hp'];

$query = mysqli_query($con,"update karyawan set nama='$nama', alamat='$alamat', no_hp='$no_hp' where nip='$nip'");
// if ($query) {
// 	http_response_code(201);
// 	$pesan['status'] = 'sukses';
// }else{
// 	http_response_code(422);
// 	$pesan['status'] = 'gagal';

// }

echo json_encode($pesan);
echo mysqli_error($con);


?>
<?php 
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];
$nama = trim($data['nama']);
$alamat = trim($data['alamat']);
$no_hp = trim($data['no_hp']);

if ($nama != '' and $no_hp != '') {
	$query = mysqli_query($con,"insert into karyawan(nip,nama,alamat,no_hp) values('','$nama','$alamat','$no_hp')");

}else{
	$query = mysqli_query($con,"delete from karyawan where nip='$nip'");
}


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
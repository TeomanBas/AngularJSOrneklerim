<?php
$data = array();
$_POST = json_decode(file_get_contents('php://input'), true);
if (empty($_POST['kullaniciAdi'])){
  $data['kullaniciAdi'] = 'Kullanici adi gerekli';
}
if (empty($_POST['kullaniciSifre'])){
  $data['kullaniciSifre'] = 'sifre gerekli';
}
if (!empty($data)) {
  $data['mesaj'] = '';
} else {
  $data['mesaj'] = 'Giriş yapıldı...';
  $data['kullaniciAdi'] = '';
  $data['kullaniciSifre'] = '';
}
// JSON olarak veri $data değişkeni ile geri gönderiliyor.
echo json_encode($data);
?>
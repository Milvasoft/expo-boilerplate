const resource = {
  welcome: 'Merhaba', 
  name: 'Ali Burhan Keskin',
  confirm: 'Onayla',
  cancel: 'İptal',  
  generalActivityIndicatorText: 'Yükleniyor...',
  pleaseWait: 'Lütfen Bekleyiniz... ',
  generalErrorText: 'Bir hata oluştu lütfen daha sonra tekrar deneyiniz.',  
  search: 'Ara',
  
  navigation: {
    home: 'Ana Sayfa',
    profile: 'Profil',
    settings: 'Ayarlar',
    post: 'Gönderi'
  }
};  

export default resource;

export type ILocalization = typeof resource;

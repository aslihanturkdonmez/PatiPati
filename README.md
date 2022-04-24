# Pati Pati

```sh
Kediler hakkında her şey...
```
<img src="https://user-images.githubusercontent.com/43846857/164954466-64502b42-1464-4cde-b20e-75e4fffc4303.gif" />

## İndirme ve Test Bağlantısı (Android)
[APK](https://drive.google.com/file/d/1Ie6CAt6IfRVGVNIyvvLjPrOMnTfiGRMI/view?usp=sharing)

macOS cihaz mevcut olmadığı için iOS versiyonu bulunmamaktadır. Kurulum başlığı altında iOS versiyonun çalıştırılabilmesi için gerekli talimatlar verilmiştir. Ayrıca uygulama tanıtım videosu iOS Simulator üzerinden çekilmiştir. Video için [tıklayınız](https://youtu.be/Zs3ah85GadU).

## İçerik
* [İndirme ve Test Bağlantısı](#i̇ndirme-ve-test-bağlantısı-android)
* [Uygulama Görselleri](#uygulama-görselleri)
* [Uygulama Özellikleri](#uygulama-özellikleri)
* [Gereksinimler](#gereksinimler)
* [Kurulum](#kurulum)
* [Geliştirme Süreci](#geliştirme-süreci)

## Uygulama Görselleri
<img src="https://user-images.githubusercontent.com/43846857/164954461-503382ca-550b-446d-851f-fbb7fb40c5b4.png" />
<img src="https://user-images.githubusercontent.com/43846857/164954464-daf93803-28e8-4584-b9d6-bc2e625cc497.png" />

## Uygulama Özellikleri
* Launch Screen 
* Ana Sayfa
  * Kedi türlerini görüntüleme
  * Kedi türü arama
  * Infinite Scroll
  * Favorilere ekleme / çıkarma (Persist)
  * Pull to refresh
  * Detay sayfasına erişim
  * Favoriler sayfasına erişim
  * Progressive Image

* Detay Sayfası
  * Kedi türü özelliklerini görüntüleme
  * Linking
  * Favorilere ekleme / çıkarma (Persist)
  * Carousel
  * Progressive Image

* Favoriler Sayfası
  * Favorileri listeleme
  * Detay sayfasına erişim
  * Favorilere ekleme / çıkarma (Persist)
  * Pull to refresh


## Gereksinimler
  ### :arrow_right: iOS
 * [Node](https://nodejs.org/) 
 * [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
 * [CocoaPods](https://cocoapods.org/)

 ### :arrow_right: Android  
 * [Node](https://nodejs.org/)
 * [Java SE Development Kit (JDK)](https://openjdk.java.net/projects/jdk/11/)
 * [Android Studio](https://developer.android.com/studio)

## Kurulum
### :arrow_right: iOS 
Terminal üzerinde
```sh
git clone https://github.com/aslihanturkdonmez/PatiPati.git
cd PatiPati
npm install
cd ios
pod install
cd ..
npx react-native run-ios
```
komutları çalıştırılmalıdır
### :arrow_right: Android 
Terminal üzerinde
```sh
git clone https://github.com/aslihanturkdonmez/PatiPati.git
cd PatiPati
npm install
npx react-native run-android
```
komutları çalıştırılmalıdır

## Geliştirme Süreci
* Geliştirme Ortamı: [React Native](https://reactnative.dev/)
* State Management: [Redux](https://redux.js.org/)
* Design Pattern: [Container/Presentational](https://www.patterns.dev/posts/presentational-container-pattern/)

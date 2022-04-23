# Pati Pati

```sh
Kediler hakkında her şey...
```

## İndirme ve Test Bağlantısı (Android)
macOS cihaz mevcut olmadığı için iOS versiyonu bulunmamaktadır. Kurulum başlığı altında iOS versiyonun çalıştırılabilmesi için gerekli talimatlar verilmiştir. 

## İçerik
* [İndirme ve Test Bağlantısı](#i̇ndirme-ve-test-bağlantısı-android)
* [Uygulama Görselleri](#uygulama-görselleri)
* [Uygulama Özellikleri](#uygulama-özellikleri)
* [Gereksinimler](#gereksinimler)
* [Kurulum](#kurulum)
* [Geliştirme Süreci](#geliştirme-süreci)



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

## Uygulama Görselleri

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
Proje dizinindeyken terminal üzerinde
```sh
npm install
cd ios
pod install
cd ..
npx react-native run-ios
```
komutları çalıştırılmalıdır
### :arrow_right: Android 
Proje dizinindeyken terminal üzerinde
```sh
npm install
npx react-native run-android
```
komutları çalıştırılmalıdır

## Geliştirme Süreci
* Geliştirme Ortamı: [React Native](https://reactnative.dev/)
* State Management: [Redux](https://redux.js.org/)
* Design Pattern: [Container/Presentational](https://www.patterns.dev/posts/presentational-container-pattern/)

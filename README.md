
# Rent a Car Project

Araba kiralama ofisleri ve müşterileri arasındaki işlemleri bu proje içerisinde yapabilmek mümkün. Müşteriler kiralama talebinde bulunabiliyor, çalışanlar talepleri değerlendirebiliyor ve müşteriler kiralama taleplerinin sonuçlarını görebiliyor

# Getting Started

- Recommended ```node js 14+``` and ```npm 6+``` 
- Install dependecies: ```npm install``` or ```yarn install``` 
- Start the server: ```npm start``` or ```yarn start``` 

# Routes'lar nasıl çalışıyor?

src dosyamızın içerisinde bulunan routes.js dosyamız bizim projemizde geçişlerimizi sağlayan önemli bir yapı.
useRoutes() kullanarak pathleri ve hangi yolda ilerleyeceğini sisteme verdik. Navbarlarda ekstra bir ekleme olacağı zaman bu kısımdan eklememiz gerek.

# Api.js dosyası ne işe yarar?
 
src dosyamızınaltındaki utils dosyasında bulunan api.js bizim api ile bağlantımızı axios yardımıyla sağlar.
Tüm fonksiyonlarımızı önce api.js te tanımlayıp hem daha okunaklı ve temiz bir kod oluşturup daha sonra ui içerisinde kullanabiliriz. 

Nasıl ekleme yapabiliriz?
-
- Şöyle ki ui tarafında kullanacağımız fonksiyon ismini seçmekte apiden bağımsızız. Parametreleremizi api parametreleri ile eşleştirip apidaki controllerda kurmuş oluğumuz yolu vererek fonksiyon eklemesi yapabiliriz


# Paneller ve özellikleri

Projemde 
- Admin Panel
- Employee Panel
- Customer Panel
olmak üzere 3 ayrı panel kullanmayı seçtim. Tüm kullanıcıların aynı login ekranından giriş yapabilmesi için her birine bir user role atadım.
Bu user rollere göre istemci tarafında belirli kontroller yapılıyor. Local storage ile giriş yapan kullanıcının bilgilerini kullanmak üzere tuttum.

Register page ise sadece müşteriye özel oldu çünkü şirket çalışanlarını adminin eklemesini istedim. 

Admin panel ve görevleri
-
- Admin panelde sistemin tamamı yönetiliyor ve sistemin istatistikleri görülebiliyor.
- Dashboard ekranında toplam kaç user bulunduğu, kaç şirket barındırdığı, bu şirketlerin kaç çalışanı ve kaç araç bulundurduğu nu görülebiliyor.
- Users ekranında ise sisteme kayıtlı müşterilerin listesi görülmektedir.
- Companies ekranında sistemde bulunan şirketlerin listesi bulunmaktadır. Ayrıca bu ekranda yeni bir şirket ekleyebiliyoruz veya var olan bir şirketin bilgilerini güncelleyip silebiliyoruz.
- Employees ekranında tüm şirketlerin çalışanları görülüyor. Burada herhangi bir şirkete mensup yeni bir çalışan ekleyebiliyoruz veya var olan bir çalışanın bilgilerini güncelleyip silebiliyoruz.

Employee panel ve görevleri
-
- Cars ekranında bulunduğumuz şirkete ait tüm araçları görebiliyoruz. Bu araçların üzerinde güncellemeler yapabiliyoruz ve yeni bir araç ekleyebiliyoruz.
- Rent requests ekranında ise bizim şirketimize ait olan araçlara gelen kiralama taleplerini görüyoruz. Talepler kabul edebiliyoruz veya reddedebiliyoruz.

Customer panel ve görevleri
-
- Cars ekranında tüm şirketlere ait araçların listesini görebiliyoruz. Aracın üzerine tıkladığımızda aracın bilgilerini detaylı olarak inceleyebiliyoruz ve kiralama talebinde bulunabiliyoruz.
- Rent result ekranında ise kiralama taleplerimizin sonuçlarını görebiliyoruz. Kiralama talebimiz kabul edilebilir, reddedilebilir veya çalışan halen talebimizi inceliyor olabilir. Bu durumları bu ekrandan görebiliyoruz.

# Projedeki eksiklikler ve yeni eklenmesi beklenen özellikler

- Admin panelde dashboardda kiralama bilgilerini ver.
- admin panelde employees kısmında company namede company id veriliyor onları name e çevir.
- filtreleme seçeneklerini yap, yapamıyorsan ortadan kaldır.
- Employee panelde sadece kendi arabalarını görebil, başka şirketin arabaları görünmesin.
- Cars listelerinde kiralanma talebinde bulunulan ve kiralanmış araçları disable şeklinde göster.
- Araç fotoğraf sorununu çöz
- register olurken müşterinin tüm bilgilerini alıp kiralama taleb değerlendirilirken müşterinin özelliklerine uygunluğu kontrol edilmeli
- kullanıcıların şifreleri admin tarafından değiştirilebilir.
- kullanıcıların şifreleri kullanıcılar tarafından değiştirilebilir.
- kullanıcılar twitter ile login yapabilir.
- kullanıcıların hesapları adminler tarafından engellenebilir.

# Temel AngularJS Sayfa Yapısı
- **ng-app:** Direktif Angularjs in dahil edileceği bloktur. bu blokta yer alan bütün kodlar kapsama alanındadır.genelde ya body içerisine yadadirekt html içinde tanımlanır.
- **ng-model:** Direktif.değişken ismi tanımlamada kullanılır normal input elementlerinin name ve id gibi tanımlayıcı attribute özelliklerine benzetilebilir.
- **{{isim}}:** ifade ng-model ile tanımlanan değişkenlere erişmek için kullanılır

# AngularJs MVW (Model,View,Whatever,Work For You) Tasarım Mimarilerini Anlamak
Büyük çaplı projelerde karmaşıklığı önlemek için OOP kavramı gelişmişti.OOP artık profesyonel programlama dillerinden bir standart haline gelmiştir.İş geliştirme sürecinin daha da hızlanması daha kolay şekilde yapılması ve projelerin sürdürülebilir olmasını sağlamak amacıyla daha da farklı tasarım mimarileri geliştirilmiş ve geliştirilmeye devam edilmektedir.
## Tasarım mimarisi ihtiyacı
Tasarım mimarileri; Temel prensipte kullanıcı arayüzü ile arkaplan kodlarınını birbirinden ayırmak için ürtilmiştir. Yani daha ilkel bir tanım yapmak istersek bir projede bir kaç kişi kişi olsun bunlardan birisi arayüzü diğeri arka planı, ve diğeride veri tabanı mimarisini tasarlar işte bu üç kişiyi bir araya getirip projeyi oluşturmak için bir iş planı oluşturmak gerekir.Burada iş planı projenin hangi yaklaşım ile hazırlanacağıdır.

Tasarım mimarileri işte bu noktada yardıma koşar projenin ve ekibin durumuna göre en uygun iş modeli seçilir hatta bazen seçmeye bile gerek kalmaz.Mesela ufak bir projede eski usul metotlarla tüm projede bir sayfa kod yığınından ibaret olabilir proje çalışıyor olabilir ama geliştirilemez,ölçeklenemez ve sürdürülemez olacaktır.

**MVW** kavramı ile 3 farklı mimari anlaşılır Bunlar MVC, MVVM ve MVP dir.Angular bunlardan hangisini yapmak istiyorsanız bunu yapmanıza olarak sağlar

- **Model :** Uygulamaya ait iş mantığının olduğu;verilerin işlendiği ve doğrulandığı katmandır.Verilerin kaydedilmesi,güncellenmesi ve çekilmesi gibi işlemler bu katmanda yapılır.
- **View :** Adından da anlaşılacağı üzere kullanıcıların görmüş olduğu ve etkileşime gireceği nesnelerin bulunduğu katmandır.Model'den gelip ara katmanda işlenen veriler burada gösterilir.
- **Controller,Presenter,viewmodel :** model ve view arasında bir köprü görevindedir çift taraflı veri taşımacılığı yapar.

![mvvm](./img/mvvmnedir.png)

Şemayı incelediğimizde dikkat etmemiz gereken view ve model in birbirinden tamamen ayrık olduğudur.yani web sayfasının arayüzü ile sitenin verileri arasında bir bağ yoktur.Bağı controller,presenter veya viewmodel kurar.Pratikteki örneğinde ise web sayfanın ön yüzünü kodlayan kişinin sitenin veritabanı istemini kodlayan kişi ile ortak bir iş yapmasına gerek yoktur. yani bugün yayında olan bir web sayfası mvc mantığı ile programlanmışsa sitenin veritanında herhangi bir değişiklik yapmadan arayüzü değiştirebilirsiniz.

MVVM' de şu temel kuralları bilelim... VIEW,VIEWMODEL'daki elementlere erişebilir fakat MODELVIEW kesinlikle VIEW'e erişemez.Aynı şekilde VIEWMODEL de MODEL'in içinde ne olduğunu bilir yani sorgular veritanı yapısı vs.MODEL'de ise VIEWMODEL'deki hiçbir fonksiyon bilinmez ve erişilemez.

Yukarıdaki şemada VIEW ile VIEWMODEL arasında **Data Binding**,**Commands** ve **Notifications**'lar görülmektedir.
Data Binding: Veri bağlama VIEW üzerinde yer alan inputlardan alınan verilerle **MODELVIEW** de yer alan **fonksiyonlara(kontrollere)** çift taraflı olarak verilerin bağlanmasıdır.
**Commands(komutlar)**'da **VIEW** ve **VIEWMODEL** içerisindeki fonksiyonların tetiklenmesi içindir.

## AngularJS'in Yapıtaşları ve Kullanımı
5 temel kavram vardır bunlar;
- Direktifler,
- İfadeler,
- Kontroller,
- Modüller,
- Scope,
olmak üzere AngularJS'in Temel yapı taşlarıdır.

### İfadeler (Expression ng-model ve {{ }} )
İfadeler değişken değerlerini veya AngularJS metotlarına göre işlem yapmayı tanımlar.Direktiflerin( {{ **ifade** }} ) arasında yazılır.Direktifler arasında yazılan kodlar AngularJS tarafından işlenir

### Direktifler ( {{ }} )
Direktif içerisinde metin yazdırmak için " " kullanılabilir ve metinler birleştirilmek için + operatoru kullanılabilir ancak direktif içerisinde html etiketleri yazdırılamaz.

- ng-init: içerisinde değişkenler tanımlanabilir.
- data-ng-repeat: foreach veya "for i in dizi" benzeri bir yapı
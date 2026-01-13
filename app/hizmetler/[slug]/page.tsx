import { redirect } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToServicesButton from "@/components/BackToServicesButton";

const servicesData: Record<string, {
  title: string;
  icon: string;
  description: string;
  content: string;
  seoKeywords: string[];
}> = {
  "bosanma-hukuku": {
    title: "Boşanma Hukuku",
    icon: "💔",
    description: "İzmir boşanma avukatı. Boşanma davaları, mal paylaşımı, nafaka ve velayet konularında uzman hukuki destek. Anlaşmalı ve çekişmeli boşanma süreçlerinde yanınızdayız.",
    content: `
      <p>Boşanma süreçleri, hayatın en zorlu dönemlerinden biridir. İzmir'de boşanma avukatı olarak, bu süreçte yanınızda olmak ve haklarınızı en iyi şekilde korumak için buradayız. Boşanma davaları, mal paylaşımı, nafaka hesaplama ve velayet konularında deneyimli ekibimizle profesyonel hukuki destek sağlıyoruz.</p>
      
      <p>Boşanma davaları, anlaşmalı ve çekişmeli boşanma süreçleri olmak üzere iki farklı şekilde gerçekleşebilir. Anlaşmalı boşanma durumunda, taraflar arasında uzlaşı sağlanarak boşanma süreci daha hızlı ve sorunsuz ilerler. Çekişmeli boşanma davalarında ise, mal paylaşımı, velayet ve nafaka konularında anlaşmazlıklar söz konusu olabilir. Her iki durumda da, boşanma avukatı olarak size en uygun stratejiyi belirleyerek süreci yönetiyoruz.</p>
      
      <p>Mal rejimi ve mal paylaşımı davaları, boşanma sürecinin en önemli konularından biridir. Edinilmiş mallara katılma rejimi, mal ayrılığı veya paylaşmalı mal rejimi gibi farklı mal rejimlerine göre, mal paylaşımı süreci değişiklik gösterebilir. Boşanma avukatı olarak, mal paylaşımı planlaması yaparak, müvekkillerimizin haklarını koruyoruz.</p>
      
      <p>Velayet ve kişisel ilişki düzenlemeleri, çocuklu boşanma davalarında kritik öneme sahiptir. Velayet, çocuğun bakımı, eğitimi ve yetiştirilmesi ile ilgili kararları içerir. Kişisel ilişki ise, velayeti olmayan ebeveynin çocukla görüşme haklarını düzenler. İzmir boşanma avukatı olarak, çocuğun üstün yararını gözeterek velayet ve kişisel ilişki düzenlemelerinde size yardımcı oluyoruz.</p>
      
      <p>Nafaka hesaplama ve nafaka davaları, boşanma sonrası mali yükümlülükleri içerir. İştirak nafakası, yoksulluk nafakası ve yardım nafakası olmak üzere farklı nafaka türleri bulunmaktadır. Nafaka hesaplama sürecinde, tarafların gelir durumu, yaşam standartları ve ihtiyaçları göz önünde bulundurulur. Boşanma avukatı olarak, adil bir nafaka hesaplama yapılması için çalışıyoruz.</p>
      
      <p>Boşanma sonrası tazminat davaları, boşanmaya neden olan eşin kusurlu davranışları nedeniyle açılabilir. Evlilik birliğinin korunması davaları ise, evliliğin devam etmesi için açılan davalardır. Her iki durumda da, boşanma avukatı olarak müvekkillerimizin haklarını koruyoruz.</p>
    `,
    seoKeywords: ["boşanma avukatı izmir", "boşanma davası", "mal paylaşımı", "nafaka hesaplama", "velayet davası", "anlaşmalı boşanma", "çekişmeli boşanma", "boşanma avukatı"]
  },
  "ceza-hukuku": {
    title: "Ceza Hukuku",
    icon: "⚖️",
    description: "İzmir ceza avukatı. Ceza davalarında güçlü savunma, suç duyuruları ve ceza hukuku danışmanlığı. Tutuklama, gözaltı ve ifade süreçlerinde yasal destek.",
    content: `
      <p>Ceza hukuku, bireylerin hak ve özgürlüklerini korumak için kritik öneme sahiptir. İzmir'de ceza avukatı olarak, ceza davalarında güçlü savunma hizmeti sunuyoruz. Suç duyuruları, ceza davaları ve ceza hukuku danışmanlığı konularında deneyimli ekibimizle yanınızdayız.</p>
      
      <p>Ceza davalarında savunma ve müdafaa, sanığın haklarını korumak için hayati öneme sahiptir. Ceza avukatı olarak, ceza davalarında savunma stratejileri geliştirerek, müvekkillerimizin haklarını en iyi şekilde koruyoruz. Suç duyuruları ve şikayetler konusunda da profesyonel destek sağlıyoruz.</p>
      
      <p>İfade alma ve sorgu süreçlerinde yasal destek, haklarınızın korunması için kritiktir. Ceza avukatı olarak, ifade ve sorgu süreçlerinde yanınızda olarak, haklarınızı koruyoruz. Tutuklama ve gözaltı süreçlerinde hukuki yardım sağlayarak, sürecin adil bir şekilde ilerlemesini sağlıyoruz.</p>
      
      <p>Ceza davalarında uzlaştırma süreçleri, bazı suçlarda ceza davası yerine uzlaştırma yoluyla sorunun çözülmesini sağlar. Ceza hukuku danışmanlığı hizmetimizle, ceza hukuku ile ilgili tüm konularda size yardımcı oluyoruz. İzmir ceza avukatı olarak, ceza davalarında deneyimli ekibimizle hizmetinizdeyiz.</p>
    `,
    seoKeywords: ["ceza avukatı izmir", "ceza davası", "suç duyurusu", "tutuklama avukatı", "gözaltı avukatı", "ceza hukuku danışmanlığı", "savunma avukatı"]
  },
  "gayrimenkul-hukuku": {
    title: "Gayrimenkul Hukuku",
    icon: "🏠",
    description: "İzmir gayrimenkul avukatı. Tapu işlemleri, kira davaları, tahliye, kat mülkiyeti ve gayrimenkul davalarında uzman hukuki destek. Gayrimenkul alım-satım sözleşmeleri.",
    content: `
      <p>Gayrimenkul işlemleri, hayatın en önemli yatırımlarından biridir. İzmir'de gayrimenkul avukatı olarak, gayrimenkul işlemlerinde güvenilir çözümler sunuyoruz. Tapu işlemleri, kira davaları, tahliye, kat mülkiyeti ve tüm gayrimenkul davalarında yanınızdayız.</p>
      
      <p>Tapu işlemleri ve tapu iptal davaları, gayrimenkul hukukunun temel konularındandır. Gayrimenkul avukatı olarak, tapu işlemlerinde dikkatli bir şekilde çalışarak, müvekkillerimizin haklarını koruyoruz. Tapu iptal davalarında da profesyonel destek sağlıyoruz.</p>
      
      <p>Kira davaları ve tahliye işlemleri, kiracı ve kiralayan arasındaki uyuşmazlıkları içerir. Kira uyuşmazlıkları ve kira artış davaları, kira hukukunun önemli konularındandır. Gayrimenkul avukatı olarak, kira davalarında ve tahliye süreçlerinde size yardımcı oluyoruz.</p>
      
      <p>Kat mülkiyeti ve yönetim planı uyuşmazlıkları, apartman ve site yönetimlerinde ortaya çıkabilir. Kat mülkiyeti uyuşmazlıklarında, yönetim planı ve ortak alanların kullanımı gibi konularda hukuki destek sağlıyoruz. İmar ve yapı ruhsatı davaları da gayrimenkul hukukunun önemli konularındandır.</p>
      
      <p>Gayrimenkul alım-satım sözleşmeleri, gayrimenkul işlemlerinin temelini oluşturur. Gayrimenkul avukatı olarak, alım-satım sözleşmelerini hazırlayarak, müvekkillerimizin haklarını koruyoruz. İzmir gayrimenkul avukatı olarak, gayrimenkul işlemlerinde deneyimli ekibimizle hizmetinizdeyiz.</p>
    `,
    seoKeywords: ["gayrimenkul avukatı izmir", "tapu işlemleri", "kira davası", "tahliye davası", "kat mülkiyeti", "gayrimenkul alım satım", "imar davası", "gayrimenkul avukatı"]
  },
  "ticaret-hukuku": {
    title: "Ticaret Hukuku",
    icon: "💼",
    description: "İzmir ticaret avukatı. Şirket kuruluşu, ticari sözleşmeler, alacak-verecek davaları ve ticari uyuşmazlıklarda uzman hukuki destek. Ticaret sicili işlemleri.",
    content: `
      <p>Ticari işlemler, iş dünyasının temelini oluşturur. İzmir'de ticaret avukatı olarak, ticari işlemlerinizde güvenilir ortak olmak için buradayız. Şirket kuruluşu, ticari sözleşmeler, alacak-verecek davaları ve tüm ticari uyuşmazlıklarda profesyonel destek sağlıyoruz.</p>
      
      <p>Şirket kuruluşu ve şirket türleri danışmanlığı, iş hayatına başlamak isteyenler için kritik öneme sahiptir. Limited şirket, anonim şirket, kollektif şirket gibi farklı şirket türleri bulunmaktadır. Ticaret avukatı olarak, size en uygun şirket türünü belirleyerek, şirket kuruluşu sürecinde size yardımcı oluyoruz.</p>
      
      <p>Ticari sözleşmeler hazırlama ve inceleme, ticari işlemlerin güvenli bir şekilde yürütülmesi için önemlidir. Ticaret avukatı olarak, ticari sözleşmeleri hazırlayarak ve inceleyerek, müvekkillerimizin haklarını koruyoruz. Şirket birleşme ve devir işlemleri de ticaret hukukunun önemli konularındandır.</p>
      
      <p>Alacak-verecek davaları ve icra takipleri, ticari uyuşmazlıkların çözümü için kritiktir. Ticaret avukatı olarak, alacak-verecek davalarında ve icra takiplerinde profesyonel destek sağlıyoruz. Ticari uyuşmazlıklar ve tahkim süreçleri de ticaret hukukunun önemli konularındandır.</p>
      
      <p>Ticaret sicili işlemleri, şirketlerin resmi kayıtlarını içerir. Ticaret avukatı olarak, ticaret sicili işlemlerinde size yardımcı oluyoruz. İzmir ticaret avukatı olarak, ticari işlemlerde deneyimli ekibimizle hizmetinizdeyiz.</p>
    `,
    seoKeywords: ["ticaret avukatı izmir", "şirket kuruluşu", "ticari sözleşme", "alacak davası", "icra takibi", "ticari uyuşmazlık", "ticaret sicili", "ticaret avukatı"]
  },
  "aile-hukuku": {
    title: "Aile Hukuku",
    icon: "👨‍👩‍👧‍👦",
    description: "İzmir aile avukatı. Velayet, vesayet, tanınma-soybağı davaları ve aile içi hukuki sorunlarda uzman hukuki destek. Evlat edinme işlemleri.",
    content: `
      <p>Aile hukuku, aile içi ilişkileri düzenleyen hukuk dalıdır. İzmir'de aile avukatı olarak, aile içi hukuki sorunlarınızda yanınızdayız. Velayet, vesayet, tanınma-soybağı davaları ve aile hukuku konularında uzman desteği sağlıyoruz.</p>
      
      <p>Velayet ve kişisel ilişki düzenlemeleri, çocukların bakımı ve yetiştirilmesi ile ilgilidir. Aile avukatı olarak, velayet davalarında çocuğun üstün yararını gözeterek, müvekkillerimizin haklarını koruyoruz. Kişisel ilişki düzenlemelerinde de profesyonel destek sağlıyoruz.</p>
      
      <p>Vesayet ve kayyımlık işlemleri, kendi işlerini göremeyen kişilerin korunması için önemlidir. Aile avukatı olarak, vesayet ve kayyımlık işlemlerinde size yardımcı oluyoruz. Tanınma ve soybağı davaları da aile hukukunun önemli konularındandır.</p>
      
      <p>Evlat edinme işlemleri, çocukların korunması ve yetiştirilmesi için önemlidir. Aile avukatı olarak, evlat edinme işlemlerinde size yardımcı oluyoruz. Nişanlanma ve evlenme sözleşmeleri de aile hukukunun önemli konularındandır.</p>
      
      <p>Aile içi şiddet ve koruma kararları, aile içi şiddet mağdurlarının korunması için kritiktir. Aile avukatı olarak, aile içi şiddet durumlarında koruma kararları alınması için çalışıyoruz. İzmir aile avukatı olarak, aile hukuku konularında deneyimli ekibimizle hizmetinizdeyiz.</p>
    `,
    seoKeywords: ["aile avukatı izmir", "velayet davası", "vesayet", "soybağı davası", "evlat edinme", "aile içi şiddet", "koruma kararı", "aile avukatı"]
  },
  "miras-hukuku": {
    title: "Miras Hukuku",
    icon: "📜",
    description: "İzmir miras avukatı. Miras taksimi, veraset ilamı, vasiyetname düzenleme ve miras davalarında uzman hukuki destek. Saklı pay ve tenkis davaları.",
    content: `
      <p>Miras işlemleri, hayatın en önemli hukuki konularından biridir. İzmir'de miras avukatı olarak, miras işlemlerinizde güvenilir rehber olmak için buradayız. Miras taksimi, veraset ilamı, vasiyetname düzenleme ve tüm miras davalarında deneyimli ekibimizle hizmetinizdeyiz.</p>
      
      <p>Miras taksimi davaları, mirasçılar arasında mirasın paylaştırılması için açılır. Miras avukatı olarak, miras taksimi planlaması yaparak, müvekkillerimizin haklarını koruyoruz. Veraset ilamı işlemleri de miras hukukunun önemli konularındandır.</p>
      
      <p>Vasiyetname düzenleme ve iptal davaları, miras bırakanın iradesini yansıtır. Miras avukatı olarak, vasiyetname düzenleme sürecinde size yardımcı oluyoruz. Vasiyetname iptal davalarında da profesyonel destek sağlıyoruz.</p>
      
      <p>Saklı pay ve tenkis davaları, mirasçıların yasal haklarını korumak için önemlidir. Miras avukatı olarak, saklı pay ve tenkis davalarında müvekkillerimizin haklarını koruyoruz. Mirasçılık belgesi işlemleri de miras hukukunun önemli konularındandır.</p>
      
      <p>Miras reddi ve miras kabulü işlemleri, mirasçıların tercihlerini yansıtır. Miras avukatı olarak, miras reddi ve miras kabulü işlemlerinde size yardımcı oluyoruz. İzmir miras avukatı olarak, miras işlemlerinde deneyimli ekibimizle hizmetinizdeyiz.</p>
    `,
    seoKeywords: ["miras avukatı izmir", "miras taksimi", "veraset ilamı", "vasiyetname", "saklı pay", "tenkis davası", "mirasçılık belgesi", "miras avukatı"]
  },
  "is-isci-hukuku": {
    title: "İş & İşçi Hukuku",
    icon: "🛡️",
    description: "İzmir iş avukatı. İşe iade davaları, kıdem tazminatı, iş kazaları ve işçi alacakları davalarında uzman hukuki destek. Fazla mesai davaları.",
    content: `
      <div class="space-y-6">
        <div>
          <h2 class="text-2xl font-bold text-cyan-900 mb-4">İş ve İşçi Hukuku Hizmetlerimiz</h2>
          <p class="mb-4">İş hukuku, çalışanların haklarını korumak ve işveren-işçi ilişkilerini düzenlemek için kritik öneme sahiptir. İzmir'de iş avukatı olarak, hem işçilerin hem de işverenlerin haklarını korumak için kapsamlı hukuki destek sunuyoruz. İş hukuku alanında 25 yılı aşkın deneyimimizle, işe iade davaları, kıdem tazminatı, iş kazaları, fazla mesai ve tüm işçi alacakları davalarında yanınızdayız.</p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold text-cyan-800 mb-3">İşe İade Davaları</h3>
          <p class="mb-3">Haksız fesih durumlarında işçinin işe geri dönmesi için açılan işe iade davaları, iş hukukunun en önemli konularından biridir. İş avukatı olarak, iş sözleşmesinin haksız feshi durumunda müvekkillerimizin işe iade edilmesi için güçlü bir savunma yürütüyoruz. İşe iade davalarında, fesih nedeninin geçersizliğini kanıtlayarak, işçinin işe geri dönmesini ve fesih tarihinden itibaren ücret alacağının ödenmesini sağlıyoruz.</p>
          <p>İşe iade davalarında, fesih nedeninin hukuka uygun olup olmadığı, işçinin performansı, işverenin fesih prosedürü ve işçinin hakları göz önünde bulundurulur. İş avukatı olarak, işe iade davalarında detaylı bir analiz yaparak, müvekkillerimizin haklarını en iyi şekilde koruyoruz.</p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold text-cyan-800 mb-3">Kıdem ve İhbar Tazminatı</h3>
          <p class="mb-3">Kıdem tazminatı, işçinin iş sözleşmesinin feshi durumunda, çalıştığı süreye göre hesaplanan ve ödenen tazminattır. İhbar tazminatı ise, iş sözleşmesinin feshi durumunda, işçiye önceden bildirim yapılmaması halinde ödenen tazminattır. İş avukatı olarak, kıdem ve ihbar tazminatı hesaplama işlemlerinde müvekkillerimizin haklarını koruyoruz.</p>
          <p>Kıdem tazminatı hesaplama, işçinin son brüt ücreti, çalıştığı süre ve tazminat oranına göre yapılır. İş avukatı olarak, kıdem tazminatı hesaplama sürecinde, işçinin tüm haklarını göz önünde bulundurarak, adil bir hesaplama yapılmasını sağlıyoruz. İhbar tazminatı hesaplama da benzer şekilde, işçinin son brüt ücreti ve çalıştığı süreye göre yapılır.</p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold text-cyan-800 mb-3">İş Kazası ve Meslek Hastalığı</h3>
          <p class="mb-3">İş kazası ve meslek hastalığı durumlarında, işçinin haklarını korumak için güçlü bir hukuki destek gereklidir. İş avukatı olarak, iş kazası ve meslek hastalığı davalarında müvekkillerimizin haklarını koruyoruz. İş kazası durumunda, işçinin tedavi masrafları, geçici iş göremezlik ödeneği, sürekli iş göremezlik ödeneği ve ölüm halinde yakınlarına ödenecek tazminatlar gibi konularda profesyonel destek sağlıyoruz.</p>
          <p>Meslek hastalığı durumunda, işçinin mesleki faaliyetleri nedeniyle ortaya çıkan hastalıkların tespiti ve tazminat alınması için gerekli hukuki süreçleri yürütüyoruz. İş avukatı olarak, iş kazası ve meslek hastalığı davalarında, işçinin tüm haklarını koruyarak, adil bir tazminat alınmasını sağlıyoruz.</p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold text-cyan-800 mb-3">Fazla Mesai ve Ücret Alacakları</h3>
          <p class="mb-3">Fazla mesai, işçinin haftalık çalışma süresini aşan çalışmaları için ödenen ücrettir. İş avukatı olarak, fazla mesai davalarında müvekkillerimizin haklarını koruyoruz. Fazla mesai hesaplama, işçinin normal ücreti, fazla mesai oranı ve çalıştığı süreye göre yapılır.</p>
          <p>Ücret alacakları davaları, işçinin çalıştığı süre için ödenmemiş ücretlerinin tahsil edilmesi için açılan davalardır. İş avukatı olarak, ücret alacakları davalarında müvekkillerimizin haklarını koruyoruz. Ücret alacakları davalarında, işçinin çalıştığı süre, ücret miktarı ve ödeme durumu gibi konular göz önünde bulundurulur.</p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold text-cyan-800 mb-3">İş Sözleşmesi Fesih İşlemleri</h3>
          <p class="mb-3">İş sözleşmesi fesih işlemleri, işçi ve işveren arasındaki iş ilişkisinin sona erdirilmesi için yapılan işlemlerdir. İş avukatı olarak, iş sözleşmesi fesih işlemlerinde müvekkillerimizin haklarını koruyoruz. İş sözleşmesi feshi, haklı fesih, haksız fesih veya anlaşmalı fesih şeklinde gerçekleşebilir.</p>
          <p>Haklı fesih durumunda, işçi veya işveren, iş sözleşmesini derhal feshedebilir. Haksız fesih durumunda ise, işçi işe iade davası açabilir veya tazminat talep edebilir. İş avukatı olarak, iş sözleşmesi fesih işlemlerinde, müvekkillerimizin haklarını koruyarak, en uygun çözümü buluyoruz.</p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold text-cyan-800 mb-3">Toplu İş Sözleşmesi ve Sendika Hakları</h3>
          <p class="mb-3">Toplu iş sözleşmesi, işveren veya işveren sendikası ile işçi sendikası arasında yapılan ve işçilerin çalışma koşullarını düzenleyen sözleşmedir. İş avukatı olarak, toplu iş sözleşmesi müzakerelerinde ve sendika hakları konularında profesyonel destek sağlıyoruz.</p>
          <p>Sendika hakları, çalışanların örgütlenme, toplu pazarlık ve grev haklarını içerir. İş avukatı olarak, sendika hakları konularında müvekkillerimizin haklarını koruyoruz. Toplu iş sözleşmesi ve sendika hakları konularında, işçilerin ve işverenlerin haklarını dengeli bir şekilde koruyarak, adil bir çözüm buluyoruz.</p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold text-cyan-800 mb-3">İş Hukuku Danışmanlığı</h3>
          <p class="mb-3">İş hukuku danışmanlığı hizmetimizle, iş hukuku ile ilgili tüm konularda size yardımcı oluyoruz. İş sözleşmesi hazırlama, işçi hakları, işveren yükümlülükleri, iş güvenliği ve iş sağlığı konularında profesyonel danışmanlık hizmeti sunuyoruz.</p>
          <p>İzmir iş avukatı olarak, iş hukuku konularında deneyimli ekibimizle, hem işçilerin hem de işverenlerin haklarını koruyarak, adil ve hukuka uygun çözümler üretiyoruz. İş hukuku alanındaki tüm uyuşmazlıklarınızda yanınızdayız.</p>
        </div>
      </div>
    `,
    seoKeywords: ["iş avukatı izmir", "işe iade davası", "kıdem tazminatı", "iş kazası", "fazla mesai", "işçi alacakları", "ihbar tazminatı", "iş avukatı", "meslek hastalığı", "toplu iş sözleşmesi", "sendika hakları"]
  },
  "idare-hukuku": {
    title: "İdare Hukukunda İptal ve Tam Yargı Davaları",
    icon: "🏛️",
    description: "İzmir idare avukatı. İdari davalar, belediye işlemleri, imar davaları ve kamu kurumu uyuşmazlıklarında uzman hukuki destek. İdari para cezalarına itiraz.",
    content: `
      <p>İdare hukuku, kamu kurumları ile bireyler arasındaki ilişkileri düzenler. İzmir'de idare avukatı olarak, kamu kurumları ile uyuşmazlıklarınızda yanınızdayız. İdari davalar, belediye işlemleri, imar davaları ve tüm idare hukuku konularında profesyonel destek sağlıyoruz.</p>
      
      <p>İdari davalar ve iptal davaları, idari işlemlere karşı açılan davalardır. İdare avukatı olarak, idari davalar açılması ve takibi konusunda müvekkillerimizin haklarını koruyoruz. Belediye işlemleri ve uyuşmazlıkları da idare hukukunun önemli konularındandır.</p>
      
      <p>İmar davaları ve plan değişiklikleri, gayrimenkul geliştirme süreçlerinde önemlidir. İdare avukatı olarak, imar davalarında ve plan değişikliklerinde size yardımcı oluyoruz. Kamu kurumu uyuşmazlıkları da idare hukukunun önemli konularındandır.</p>
      
      <p>İdari para cezalarına itiraz, idari yaptırımlara karşı başvuru yollarından biridir. İdare avukatı olarak, idari para cezalarına itiraz süreçlerinde müvekkillerimizin haklarını koruyoruz. Kamu ihale davaları da idare hukukunun önemli konularındandır.</p>
      
      <p>İdare hukuku danışmanlığı hizmetimizle, idare hukuku ile ilgili tüm konularda size yardımcı oluyoruz. İzmir idare avukatı olarak, idare hukuku konularında deneyimli ekibimizle hizmetinizdeyiz.</p>
    `,
    seoKeywords: ["idare avukatı izmir", "idari dava", "belediye avukatı", "imar davası", "idari para cezası", "kamu ihale", "idari itiraz", "idare avukatı"]
  },
  "sirketler-hukuku": {
    title: "Şirketler Hukuku Uygulamalarından Kaynaklanan Uyuşmazlıklar",
    icon: "💼",
    description: "İzmir şirketler hukuku avukatı. Şirket kuruluşu, ortaklık anlaşmaları, şirket birleşmeleri, devir işlemleri ve şirketler hukukundan kaynaklanan uyuşmazlıklar.",
    content: `
      <p>Şirketler hukuku, iş dünyasının temelini oluşturan hukuk dalıdır. İzmir'de şirketler hukuku avukatı olarak, şirket kuruluşu, ortaklık anlaşmaları, şirket birleşmeleri, devir işlemleri ve şirketler hukukundan kaynaklanan tüm uyuşmazlıklarda profesyonel hukuki destek sunuyoruz.</p>
      
      <p>Şirket kuruluşu ve şirket türleri danışmanlığı, iş hayatına başlamak isteyenler için kritik öneme sahiptir. Limited şirket, anonim şirket, kollektif şirket, komandit şirket gibi farklı şirket türleri bulunmaktadır. Şirketler hukuku avukatı olarak, size en uygun şirket türünü belirleyerek, şirket kuruluşu sürecinde size yardımcı oluyoruz.</p>
      
      <p>Ortaklık anlaşmaları ve şirket sözleşmeleri, şirketlerin işleyişini düzenleyen temel belgelerdir. Şirketler hukuku avukatı olarak, ortaklık anlaşmalarını hazırlayarak ve inceleyerek, müvekkillerimizin haklarını koruyoruz. Şirket birleşme ve devir işlemleri de şirketler hukukunun önemli konularındandır.</p>
      
      <p>Şirket yönetimi ve yönetim kurulu uyuşmazlıkları, şirketlerin işleyişini etkileyen önemli konulardır. Şirketler hukuku avukatı olarak, yönetim kurulu kararları, genel kurul toplantıları ve şirket yönetimi konularında profesyonel destek sağlıyoruz. Ortaklar arası uyuşmazlıklar ve azınlık hakları da şirketler hukukunun önemli konularındandır.</p>
      
      <p>Şirket tasfiyesi ve iflas süreçleri, şirketlerin sona ermesi durumunda ortaya çıkar. Şirketler hukuku avukatı olarak, şirket tasfiyesi ve iflas süreçlerinde müvekkillerimizin haklarını koruyoruz. Şirketler hukuku danışmanlığı hizmetimizle, şirketler hukuku ile ilgili tüm konularda size yardımcı oluyoruz.</p>
      
      <p>İzmir şirketler hukuku avukatı olarak, şirketler hukuku konularında deneyimli ekibimizle, şirket kuruluşundan tasfiyesine kadar tüm süreçlerde yanınızdayız.</p>
    `,
    seoKeywords: ["şirketler hukuku avukatı izmir", "şirket kuruluşu", "ortaklık anlaşması", "şirket birleşme", "şirket devir", "şirket yönetimi", "şirket tasfiyesi", "şirketler hukuku avukatı"]
  },
  "saglik-hukuku": {
    title: "Sağlık Hukukundan Kaynaklanan Uyuşmazlıklar",
    icon: "❤️",
    description: "İzmir sağlık hukuku avukatı. Tıbbi malpraktis davaları, hasta hakları, sağlık kuruluşları ile ilgili uyuşmazlıklar ve sağlık hukuku danışmanlığı.",
    content: `
      <p>Sağlık hukuku, sağlık hizmetleri ve hasta hakları ile ilgili hukuk dalıdır. İzmir'de sağlık hukuku avukatı olarak, tıbbi malpraktis davaları, hasta hakları, sağlık kuruluşları ile ilgili uyuşmazlıklar ve sağlık hukuku danışmanlığı konularında profesyonel hukuki destek sunuyoruz.</p>
      
      <p>Tıbbi malpraktis davaları, sağlık hizmeti sunanların hukuka aykırı davranışları nedeniyle açılan tazminat davalarıdır. Sağlık hukuku avukatı olarak, tıbbi malpraktis davalarında müvekkillerimizin haklarını koruyoruz. Tıbbi malpraktis durumunda, hasta veya yakınları, sağlık kuruluşu ve sağlık personeline karşı tazminat davası açabilir.</p>
      
      <p>Hasta hakları ve hasta hakları ihlalleri, sağlık hizmetleri sırasında hastaların korunması için önemlidir. Sağlık hukuku avukatı olarak, hasta hakları ihlalleri durumunda müvekkillerimizin haklarını koruyoruz. Bilgilendirilmiş onam, mahremiyet hakkı, tedavi reddi hakkı gibi hasta hakları konularında profesyonel destek sağlıyoruz.</p>
      
      <p>Sağlık kuruluşları ile uyuşmazlıklar, hastaneler, özel sağlık kuruluşları ve sağlık personeli ile ilgili uyuşmazlıkları içerir. Sağlık hukuku avukatı olarak, sağlık kuruluşları ile uyuşmazlıkların çözümünde müvekkillerimizin haklarını koruyoruz. Sağlık hizmeti sözleşmeleri ve sağlık hizmeti fiyatlandırması da sağlık hukukunun önemli konularındandır.</p>
      
      <p>Sağlık hukuku danışmanlığı hizmetimizle, sağlık hukuku ile ilgili tüm konularda size yardımcı oluyoruz. İzmir sağlık hukuku avukatı olarak, sağlık hukuku konularında deneyimli ekibimizle, hasta haklarını koruyarak adil çözümler üretiyoruz.</p>
    `,
    seoKeywords: ["sağlık hukuku avukatı izmir", "tıbbi malpraktis", "hasta hakları", "sağlık kuruluşu uyuşmazlığı", "tıbbi hata", "sağlık hukuku danışmanlığı", "sağlık hukuku avukatı"]
  },
  "icra-iflas-hukuku": {
    title: "İcra ve İflas Hukuku Alanındaki Uyuşmazlıklar",
    icon: "⚖️",
    description: "İzmir icra ve iflas avukatı. İcra takipleri, iflas davaları, konkordato, haciz işlemleri ve icra-iflas hukuku alanındaki uyuşmazlıklar.",
    content: `
      <p>İcra ve iflas hukuku, alacakların tahsil edilmesi ve borçluların iflas süreçlerini düzenleyen hukuk dalıdır. İzmir'de icra ve iflas avukatı olarak, icra takipleri, iflas davaları, konkordato, haciz işlemleri ve icra-iflas hukuku alanındaki tüm uyuşmazlıklarda profesyonel hukuki destek sunuyoruz.</p>
      
      <p>İcra takipleri ve icra davaları, alacakların tahsil edilmesi için açılan takipler ve davalardır. İcra ve iflas avukatı olarak, icra takiplerinde müvekkillerimizin haklarını koruyoruz. İcra takiplerinde, alacaklı ve borçlu arasındaki uyuşmazlıkların çözümü için gerekli hukuki süreçleri yürütüyoruz.</p>
      
      <p>İflas davaları ve iflas süreçleri, borçluların iflas etmesi durumunda ortaya çıkar. İcra ve iflas avukatı olarak, iflas davalarında hem alacaklıların hem de borçluların haklarını koruyoruz. İflas süreçlerinde, alacaklıların alacaklarının tahsil edilmesi ve borçluların haklarının korunması için profesyonel destek sağlıyoruz.</p>
      
      <p>Konkordato süreçleri, borçluların iflas etmeden borçlarını ödemesi için yapılan anlaşmalardır. İcra ve iflas avukatı olarak, konkordato süreçlerinde müvekkillerimizin haklarını koruyoruz. Konkordato süreçlerinde, borçluların ve alacaklıların haklarını dengeli bir şekilde koruyarak, adil bir çözüm buluyoruz.</p>
      
      <p>Haciz işlemleri ve haciz itirazları, icra takiplerinde borçluların mallarının haczedilmesi süreçlerini içerir. İcra ve iflas avukatı olarak, haciz işlemlerinde ve haciz itirazlarında müvekkillerimizin haklarını koruyoruz. İcra ve iflas hukuku danışmanlığı hizmetimizle, icra ve iflas hukuku ile ilgili tüm konularda size yardımcı oluyoruz.</p>
      
      <p>İzmir icra ve iflas avukatı olarak, icra ve iflas hukuku konularında deneyimli ekibimizle, alacakların tahsil edilmesinden iflas süreçlerine kadar tüm konularda yanınızdayız.</p>
    `,
    seoKeywords: ["icra avukatı izmir", "iflas avukatı izmir", "icra takibi", "iflas davası", "konkordato", "haciz işlemi", "icra itirazı", "icra ve iflas avukatı"]
  },
  "tuketici-hukuku": {
    title: "Tüketici Hukuku Alanındaki Uyuşmazlıklar",
    icon: "🛒",
    description: "İzmir tüketici hukuku avukatı. Tüketici hakları, ayıplı mal, garanti, taksitli satış, mesafeli satış ve tüketici hukukundan kaynaklanan uyuşmazlıklar.",
    content: `
      <p>Tüketici hukuku, tüketicilerin haklarını korumak ve tüketici-satıcı ilişkilerini düzenlemek için kritik öneme sahiptir. İzmir'de tüketici hukuku avukatı olarak, tüketici hakları, ayıplı mal, garanti, taksitli satış, mesafeli satış ve tüketici hukukundan kaynaklanan tüm uyuşmazlıklarda profesyonel hukuki destek sunuyoruz.</p>
      
      <p>Tüketici hakları ve tüketici hakları ihlalleri, tüketicilerin korunması için önemlidir. Tüketici hukuku avukatı olarak, tüketici hakları ihlalleri durumunda müvekkillerimizin haklarını koruyoruz. Bilgilendirme hakkı, cayma hakkı, ayıplı maldan dönme hakkı gibi tüketici hakları konularında profesyonel destek sağlıyoruz.</p>
      
      <p>Ayıplı mal ve garanti uyuşmazlıkları, tüketici hukukunun en önemli konularındandır. Tüketici hukuku avukatı olarak, ayıplı mal durumunda müvekkillerimizin haklarını koruyoruz. Ayıplı maldan dönme, ayıpsız teslim, indirim isteme ve tazminat talebi gibi konularda profesyonel destek sağlıyoruz.</p>
      
      <p>Taksitli satış ve mesafeli satış uyuşmazlıkları, tüketici hukukunun önemli konularındandır. Tüketici hukuku avukatı olarak, taksitli satış ve mesafeli satış uyuşmazlıklarında müvekkillerimizin haklarını koruyoruz. Cayma hakkı, iade hakkı ve taksit iptali gibi konularda profesyonel destek sağlıyoruz.</p>
      
      <p>Tüketici hakem heyeti ve tüketici mahkemeleri, tüketici uyuşmazlıklarının çözümü için önemli başvuru yollarıdır. Tüketici hukuku avukatı olarak, tüketici hakem heyeti ve tüketici mahkemelerinde müvekkillerimizin haklarını koruyoruz. Tüketici hukuku danışmanlığı hizmetimizle, tüketici hukuku ile ilgili tüm konularda size yardımcı oluyoruz.</p>
      
      <p>İzmir tüketici hukuku avukatı olarak, tüketici hukuku konularında deneyimli ekibimizle, tüketicilerin haklarını koruyarak adil çözümler üretiyoruz.</p>
    `,
    seoKeywords: ["tüketici hukuku avukatı izmir", "tüketici hakları", "ayıplı mal", "garanti uyuşmazlığı", "taksitli satış", "mesafeli satış", "tüketici hakem heyeti", "tüketici hukuku avukatı"]
  },
  "vergi-hukuku": {
    title: "Vergi Hukukundan Kaynaklanan Uyuşmazlıklar",
    icon: "💰",
    description: "İzmir vergi hukuku avukatı. Vergi uyuşmazlıkları, vergi itirazları, vergi cezaları, vergi davaları ve vergi hukukundan kaynaklanan uyuşmazlıklar.",
    content: `
      <p>Vergi hukuku, vergi yükümlülükleri ve vergi uyuşmazlıklarını düzenleyen hukuk dalıdır. İzmir'de vergi hukuku avukatı olarak, vergi uyuşmazlıkları, vergi itirazları, vergi cezaları, vergi davaları ve vergi hukukundan kaynaklanan tüm uyuşmazlıklarda profesyonel hukuki destek sunuyoruz.</p>
      
      <p>Vergi itirazları ve vergi itiraz süreçleri, vergi idaresinin yaptığı işlemlere karşı başvuru yollarından biridir. Vergi hukuku avukatı olarak, vergi itirazlarında müvekkillerimizin haklarını koruyoruz. Vergi itiraz süreçlerinde, vergi idaresinin yaptığı işlemlerin hukuka uygunluğunu değerlendirerek, müvekkillerimizin haklarını koruyoruz.</p>
      
      <p>Vergi cezaları ve vergi cezası itirazları, vergi yükümlülüklerinin yerine getirilmemesi durumunda ortaya çıkar. Vergi hukuku avukatı olarak, vergi cezalarına itiraz süreçlerinde müvekkillerimizin haklarını koruyoruz. Vergi cezası indirimi ve vergi cezası iptali gibi konularda profesyonel destek sağlıyoruz.</p>
      
      <p>Vergi davaları ve vergi mahkemeleri, vergi uyuşmazlıklarının çözümü için önemli başvuru yollarıdır. Vergi hukuku avukatı olarak, vergi davalarında müvekkillerimizin haklarını koruyoruz. Vergi davalarında, vergi idaresinin yaptığı işlemlerin hukuka uygunluğunu değerlendirerek, müvekkillerimizin haklarını koruyoruz.</p>
      
      <p>Vergi planlaması ve vergi danışmanlığı, vergi yükümlülüklerinin en uygun şekilde yerine getirilmesi için önemlidir. Vergi hukuku avukatı olarak, vergi planlaması ve vergi danışmanlığı hizmetleri sunuyoruz. Vergi hukuku danışmanlığı hizmetimizle, vergi hukuku ile ilgili tüm konularda size yardımcı oluyoruz.</p>
      
      <p>İzmir vergi hukuku avukatı olarak, vergi hukuku konularında deneyimli ekibimizle, vergi uyuşmazlıklarının çözümünden vergi planlamasına kadar tüm konularda yanınızdayız.</p>
    `,
    seoKeywords: ["vergi hukuku avukatı izmir", "vergi itirazı", "vergi cezası", "vergi davası", "vergi planlaması", "vergi danışmanlığı", "vergi mahkemesi", "vergi hukuku avukatı"]
  },
  "sigorta-hukuku": {
    title: "Sigorta Hukukundan Kaynaklanan Uyuşmazlıklar",
    icon: "🛡️",
    description: "İzmir sigorta hukuku avukatı. Sigorta poliçeleri, hasar tazminat davaları, sigorta şirketleri ile uyuşmazlıklar, trafik kazaları ve sigorta hukukundan kaynaklanan uyuşmazlıklar.",
    content: `
      <p>Sigorta hukuku, sigorta sözleşmeleri ve sigorta uyuşmazlıklarını düzenleyen hukuk dalıdır. İzmir'de sigorta hukuku avukatı olarak, sigorta poliçeleri, hasar tazminat davaları, sigorta şirketleri ile uyuşmazlıklar, trafik kazaları ve sigorta hukukundan kaynaklanan tüm uyuşmazlıklarda profesyonel hukuki destek sunuyoruz.</p>
      
      <p>Sigorta poliçeleri ve sigorta sözleşmeleri, sigorta hukukunun temelini oluşturur. Sigorta hukuku avukatı olarak, sigorta poliçelerinin hazırlanması, incelenmesi ve uyuşmazlıkların çözümünde müvekkillerimizin haklarını koruyoruz. Hayat sigortası, kasko sigortası, trafik sigortası, sağlık sigortası gibi farklı sigorta türlerinde profesyonel destek sağlıyoruz.</p>
      
      <p>Hasar tazminat davaları, sigorta şirketlerinin hasar ödemelerini reddetmesi veya yetersiz ödeme yapması durumunda açılan davalardır. Sigorta hukuku avukatı olarak, hasar tazminat davalarında müvekkillerimizin haklarını koruyoruz. Hasar tazminat davalarında, sigorta şirketinin yükümlülüklerini ve sigortalının haklarını değerlendirerek, adil bir tazminat alınmasını sağlıyoruz.</p>
      
      <p>Trafik kazaları ve trafik sigortası uyuşmazlıkları, sigorta hukukunun önemli konularındandır. Sigorta hukuku avukatı olarak, trafik kazalarında müvekkillerimizin haklarını koruyoruz. Trafik kazalarında, kasko sigortası, trafik sigortası ve mali sorumluluk sigortası gibi konularda profesyonel destek sağlıyoruz.</p>
      
      <p>Sigorta şirketleri ile uyuşmazlıklar, sigorta sözleşmelerinden kaynaklanan uyuşmazlıkları içerir. Sigorta hukuku avukatı olarak, sigorta şirketleri ile uyuşmazlıkların çözümünde müvekkillerimizin haklarını koruyoruz. Sigorta hukuku danışmanlığı hizmetimizle, sigorta hukuku ile ilgili tüm konularda size yardımcı oluyoruz.</p>
      
      <p>İzmir sigorta hukuku avukatı olarak, sigorta hukuku konularında deneyimli ekibimizle, sigorta poliçelerinden hasar tazminat davalarına kadar tüm konularda yanınızdayız.</p>
    `,
    seoKeywords: ["sigorta hukuku avukatı izmir", "sigorta poliçesi", "hasar tazminat davası", "trafik kazası", "kasko sigortası", "trafik sigortası", "sigorta şirketi uyuşmazlığı", "sigorta hukuku avukatı"]
  },
  "is-hukuku": {
    title: "İş Hukuku Uygulamalarından Kaynaklanan Uyuşmazlıklar",
    icon: "🛡️",
    description: "İzmir iş avukatı. İşe iade davaları, kıdem tazminatı, iş kazaları ve işçi alacakları davalarında uzman hukuki destek. Fazla mesai davaları.",
    content: `
      <div class="space-y-6">
        <div>
          <h2 class="text-2xl font-bold text-cyan-900 mb-4">İş Hukuku Uygulamalarından Kaynaklanan Uyuşmazlıklar</h2>
          <p class="mb-4">İş hukuku, çalışanların haklarını korumak ve işveren-işçi ilişkilerini düzenlemek için kritik öneme sahiptir. İzmir'de iş avukatı olarak, hem işçilerin hem de işverenlerin haklarını korumak için kapsamlı hukuki destek sunuyoruz. İş hukuku alanında 25 yılı aşkın deneyimimizle, işe iade davaları, kıdem tazminatı, iş kazaları, fazla mesai ve tüm işçi alacakları davalarında yanınızdayız.</p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold text-cyan-800 mb-3">İşe İade Davaları</h3>
          <p class="mb-3">Haksız fesih durumlarında işçinin işe geri dönmesi için açılan işe iade davaları, iş hukukunun en önemli konularından biridir. İş avukatı olarak, iş sözleşmesinin haksız feshi durumunda müvekkillerimizin işe iade edilmesi için güçlü bir savunma yürütüyoruz. İşe iade davalarında, fesih nedeninin geçersizliğini kanıtlayarak, işçinin işe geri dönmesini ve fesih tarihinden itibaren ücret alacağının ödenmesini sağlıyoruz.</p>
          <p>İşe iade davalarında, fesih nedeninin hukuka uygun olup olmadığı, işçinin performansı, işverenin fesih prosedürü ve işçinin hakları göz önünde bulundurulur. İş avukatı olarak, işe iade davalarında detaylı bir analiz yaparak, müvekkillerimizin haklarını en iyi şekilde koruyoruz.</p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold text-cyan-800 mb-3">Kıdem ve İhbar Tazminatı</h3>
          <p class="mb-3">Kıdem tazminatı, işçinin iş sözleşmesinin feshi durumunda, çalıştığı süreye göre hesaplanan ve ödenen tazminattır. İhbar tazminatı ise, iş sözleşmesinin feshi durumunda, işçiye önceden bildirim yapılmaması halinde ödenen tazminattır. İş avukatı olarak, kıdem ve ihbar tazminatı hesaplama işlemlerinde müvekkillerimizin haklarını koruyoruz.</p>
          <p>Kıdem tazminatı hesaplama, işçinin son brüt ücreti, çalıştığı süre ve tazminat oranına göre yapılır. İş avukatı olarak, kıdem tazminatı hesaplama sürecinde, işçinin tüm haklarını göz önünde bulundurarak, adil bir hesaplama yapılmasını sağlıyoruz. İhbar tazminatı hesaplama da benzer şekilde, işçinin son brüt ücreti ve çalıştığı süreye göre yapılır.</p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold text-cyan-800 mb-3">İş Kazası ve Meslek Hastalığı</h3>
          <p class="mb-3">İş kazası ve meslek hastalığı durumlarında, işçinin haklarını korumak için güçlü bir hukuki destek gereklidir. İş avukatı olarak, iş kazası ve meslek hastalığı davalarında müvekkillerimizin haklarını koruyoruz. İş kazası durumunda, işçinin tedavi masrafları, geçici iş göremezlik ödeneği, sürekli iş göremezlik ödeneği ve ölüm halinde yakınlarına ödenecek tazminatlar gibi konularda profesyonel destek sağlıyoruz.</p>
          <p>Meslek hastalığı durumunda, işçinin mesleki faaliyetleri nedeniyle ortaya çıkan hastalıkların tespiti ve tazminat alınması için gerekli hukuki süreçleri yürütüyoruz. İş avukatı olarak, iş kazası ve meslek hastalığı davalarında, işçinin tüm haklarını koruyarak, adil bir tazminat alınmasını sağlıyoruz.</p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold text-cyan-800 mb-3">Fazla Mesai ve Ücret Alacakları</h3>
          <p class="mb-3">Fazla mesai, işçinin haftalık çalışma süresini aşan çalışmaları için ödenen ücrettir. İş avukatı olarak, fazla mesai davalarında müvekkillerimizin haklarını koruyoruz. Fazla mesai hesaplama, işçinin normal ücreti, fazla mesai oranı ve çalıştığı süreye göre yapılır.</p>
          <p>Ücret alacakları davaları, işçinin çalıştığı süre için ödenmemiş ücretlerinin tahsil edilmesi için açılan davalardır. İş avukatı olarak, ücret alacakları davalarında müvekkillerimizin haklarını koruyoruz. Ücret alacakları davalarında, işçinin çalıştığı süre, ücret miktarı ve ödeme durumu gibi konular göz önünde bulundurulur.</p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold text-cyan-800 mb-3">İş Sözleşmesi Fesih İşlemleri</h3>
          <p class="mb-3">İş sözleşmesi fesih işlemleri, işçi ve işveren arasındaki iş ilişkisinin sona erdirilmesi için yapılan işlemlerdir. İş avukatı olarak, iş sözleşmesi fesih işlemlerinde müvekkillerimizin haklarını koruyoruz. İş sözleşmesi feshi, haklı fesih, haksız fesih veya anlaşmalı fesih şeklinde gerçekleşebilir.</p>
          <p>Haklı fesih durumunda, işçi veya işveren, iş sözleşmesini derhal feshedebilir. Haksız fesih durumunda ise, işçi işe iade davası açabilir veya tazminat talep edebilir. İş avukatı olarak, iş sözleşmesi fesih işlemlerinde, müvekkillerimizin haklarını koruyarak, en uygun çözümü buluyoruz.</p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold text-cyan-800 mb-3">Toplu İş Sözleşmesi ve Sendika Hakları</h3>
          <p class="mb-3">Toplu iş sözleşmesi, işveren veya işveren sendikası ile işçi sendikası arasında yapılan ve işçilerin çalışma koşullarını düzenleyen sözleşmedir. İş avukatı olarak, toplu iş sözleşmesi müzakerelerinde ve sendika hakları konularında profesyonel destek sağlıyoruz.</p>
          <p>Sendika hakları, çalışanların örgütlenme, toplu pazarlık ve grev haklarını içerir. İş avukatı olarak, sendika hakları konularında müvekkillerimizin haklarını koruyoruz. Toplu iş sözleşmesi ve sendika hakları konularında, işçilerin ve işverenlerin haklarını dengeli bir şekilde koruyarak, adil bir çözüm buluyoruz.</p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold text-cyan-800 mb-3">İş Hukuku Danışmanlığı</h3>
          <p class="mb-3">İş hukuku danışmanlığı hizmetimizle, iş hukuku ile ilgili tüm konularda size yardımcı oluyoruz. İş sözleşmesi hazırlama, işçi hakları, işveren yükümlülükleri, iş güvenliği ve iş sağlığı konularında profesyonel danışmanlık hizmeti sunuyoruz.</p>
          <p>İzmir iş avukatı olarak, iş hukuku konularında deneyimli ekibimizle, hem işçilerin hem de işverenlerin haklarını koruyarak, adil ve hukuka uygun çözümler üretiyoruz. İş hukuku alanındaki tüm uyuşmazlıklarınızda yanınızdayız.</p>
        </div>
      </div>
    `,
    seoKeywords: ["iş avukatı izmir", "işe iade davası", "kıdem tazminatı", "iş kazası", "fazla mesai", "işçi alacakları", "ihbar tazminatı", "iş avukatı", "meslek hastalığı", "toplu iş sözleşmesi", "sendika hakları"]
  }
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> | { slug: string } }): Promise<Metadata> {
  const resolvedParams = typeof params === 'object' && 'then' in params ? await params : params;
  const service = servicesData[resolvedParams.slug];

  if (!service) {
    return {
      title: "Hizmet Bulunamadı",
    };
  }

  return {
    title: `${service.title} | CTİ Avukatlık & Hukuk Danışmanlığı`,
    description: service.description,
    keywords: service.seoKeywords.join(", "),
    alternates: {
      canonical: `/hizmetler/${resolvedParams.slug}`,
    },
    openGraph: {
      title: `${service.title} | CTİ Avukatlık`,
      description: service.description,
      type: "website",
      locale: "tr_TR",
      url: `https://www.ctiavukatlik.com/hizmetler/${resolvedParams.slug}`,
      siteName: "CTİ Avukatlık",
      images: [
        {
          url: 'https://www.ctiavukatlik.com/photo/logo.png',
          width: 1200,
          height: 1200,
          alt: `${service.title} - CTİ Avukatlık`,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | CTİ Avukatlık`,
      description: service.description,
      images: ['https://www.ctiavukatlik.com/photo/logo.png'],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const resolvedParams = typeof params === 'object' && 'then' in params ? await params : params;
  let slug = resolvedParams.slug;
  
  // Eski slug'ı yeni slug'a yönlendir
  if (slug === 'is-iscı-hukuku') {
    redirect('/hizmetler/is-isci-hukuku');
  }
  
  const service = servicesData[slug];

  if (!service) {
    redirect('/#services');
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <div className="bg-cyan-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <BackToServicesButton />
            <div className="mt-8 flex items-start gap-6">
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 overflow-hidden flex-shrink-0">
                <Image 
                  src="/photo/logo.png" 
                  alt="CTİ Avukatlık & Hukuk Danışmanlığı Logo - İzmir" 
                  width={128} 
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="flex-1 max-w-4xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6">
                  {service.title}
                </h1>
                <p className="text-xl sm:text-2xl text-cyan-100 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: service.content }}
                className="text-gray-700 leading-relaxed"
              />
            </article>

            {/* CTA Section */}
            <div className="mt-16 pt-12 border-t border-gray-200">
              <div className="relative bg-gradient-to-br from-cyan-700 via-cyan-600 to-teal-600 rounded-2xl p-12 sm:p-16 text-center overflow-hidden shadow-2xl">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-1 bg-white/40 rounded-full"></div>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                    Hukuki Danışmanlık İhtiyacınız mı Var?
                  </h3>
                  <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Deneyimli avukat kadromuzla size en uygun çözümü bulmak için hemen iletişime geçin.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                    <a
                      href="/iletisim"
                      className="group relative inline-flex items-center justify-center gap-3 bg-white text-cyan-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 transform duration-300 overflow-hidden"
                    >
                      <span className="relative z-10">İletişime Geçin</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </a>
                    <a
                      href="/#services"
                      className="inline-flex items-center justify-center gap-2 text-white border-2 border-white/40 px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white/60 transition-all backdrop-blur-sm"
                    >
                      Diğer Hizmetlerimiz
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

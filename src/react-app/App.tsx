import { useState } from "react";
import {
	Phone,
	Mail,
	MapPin,
	Menu,
	X,
	ChevronRight,
	Activity,
	Zap,
	Hand,
	Move,
	Bandage,
	Users,
	Clock,
	Instagram,
	MessageCircle,
} from "lucide-react";
import "./App.css";

const PHONE = "0530 312 06 89";
const PHONE_LINK = "tel:+905303120689";
const EMAIL = "fizyobase@gmail.com";
const WHATSAPP_LINK = "https://wa.me/905303120689";
const ADDRESS = "Prof. Dr. Ahmet Taner Kışlalı Mahallesi, 2784. Sokak No:9 Çayyolu, Ankara";
const MAPS_LINK = "https://google.com/maps/place/Fizyobase+Fizik+Tedavi+Kliniği/@39.866321,32.6907497,17z";
const INSTAGRAM_LINK = "https://www.instagram.com/fizyobase";

const services = [
	{ icon: Zap, title: "EMS Medikal Egzersiz", desc: "Elektrik kas stimülasyonu ile etkili egzersiz" },
	{ icon: Hand, title: "Medikal Masaj", desc: "Profesyonel terapötik masaj uygulamaları" },
	{ icon: Activity, title: "G Therapy", desc: "Sinir sıkışması ve fıtık tedavisinde etkili yöntem" },
	{ icon: Move, title: "Manuel Terapi", desc: "El ile uygulanan özel tedavi teknikleri" },
	{ icon: Bandage, title: "Kinezyolojik Bantlama", desc: "Kas ve eklem destekleme bantları" },
	{ icon: Users, title: "Personal Training", desc: "Birebir kişisel antrenman programları" },
];

const specialties = [
	{
		title: "Bel Fıtığı Ağrısı",
		desc: "Bel Fıtığı Nedir? Bel Fıtığı Neden Oluşur? Bel Fıtığı Tanısı Nasıl Konulur? Ameliyatsız Bel Fıtığı Tedavisi Nasıl Uygulanır?",
	},
	{
		title: "Boyun Fıtığı Ağrısı",
		desc: "Boyun Fıtığı Nedir? Boyun Fıtığı Neden Oluşur? Boyun Fıtığı Belirtileri Nelerdir? Ameliyatsız Boyun Fıtığı Tedavisi Nasıl Uygulanır?",
	},
	{
		title: "Siyatik Sinir Sıkışması",
		desc: "Siyatik Sinir Sıkışması Nedir? Tedavi Yöntemleri Nelerdir? Belirtileri Nelerdir? Ameliyatsız Tedavi Edilebilir Mi?",
	},
	{
		title: "Fibromiyalji ve Sırt Ağrıları",
		desc: "Fibromiyalji sendromu kaslarda ve kemiklerde ağrıya sebebiyet vermekle beraber uyku düzenini altüst eden kronik bir yumuşak doku romatizmasıdır.",
	},
	{
		title: "Boyun Düzleşmesi",
		desc: "Boyun düzleşmesi vücuttaki boyun bölgesinin kendine özel olan kıvrımını kaybetmesi sonucu ortaya çıkan duruşsal bir problemdir.",
	},
	{
		title: "Skolyoz ve Duruş Bozuklukları",
		desc: "Görülme sıklığı % 0.2 - 6 arasında değişen Skolyoz bilinen en eski omurga deformitesidir.",
	},
	{
		title: "Menisküs ve Ön Çapraz Bağ Yaralanması",
		desc: "Menisküs, uyluk kemiği ve kaval kemiği arasında bulunan yastıkçıklara verilen isimdir. Diz bölgesindeki kıkırdakları korumasıyla son derece önemlidir.",
	},
	{
		title: "Migren ve Baş Ağrıları",
		desc: "Migren, hastanın günlük yaşamını etkileyebilen, gün içerisindeki aktivitelerde kısıtlılık yaratabilen bir baş ağrısı tipidir.",
	},
	{
		title: "Çene Eklemi ve Diş Sıkma",
		desc: "Çene eklemi, kafa tası ile çene kemiği arasında menteşe gibi görev yapan eklemdir. Çene eklemi rahatsızlığı ciddi ağrı ve huzursuzluk yaratır.",
	},
];

function App() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div className="min-h-screen bg-white">
			{/* Top Bar */}
			<div className="bg-teal-600 text-white py-2 px-4">
				<div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
					<span className="hidden sm:block">Bilgi ve Randevu için Arayınız</span>
					<div className="flex items-center gap-4 sm:gap-6">
						<a href={PHONE_LINK} className="flex items-center gap-2 hover:text-teal-100 transition-colors">
							<Phone size={16} />
							<span className="font-semibold">{PHONE}</span>
						</a>
						<a href={`mailto:${EMAIL}`} className="hidden md:flex items-center gap-2 hover:text-teal-100 transition-colors">
							<Mail size={16} />
							<span>{EMAIL}</span>
						</a>
					</div>
				</div>
			</div>

			{/* Navigation */}
			<nav className="bg-white shadow-md sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-4">
					<div className="flex justify-between items-center h-16">
						{/* Logo */}
						<a href="#" className="flex items-center gap-2">
							<Activity className="h-8 w-8 text-teal-600" />
							<span className="text-2xl font-bold text-gray-800">
								Fizyo<span className="text-teal-600">base</span>
							</span>
						</a>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center gap-8">
							<a href="#anasayfa" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
								Anasayfa
							</a>
							<a href="#hizmetler" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
								Hizmetlerimiz
							</a>
							<a href="#uzmanliklar" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
								Uzmanlıklarımız
							</a>
							<a href="#iletisim" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
								İletişim
							</a>
							<a
								href={PHONE_LINK}
								className="bg-teal-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-teal-700 transition-colors flex items-center gap-2"
							>
								<Phone size={18} />
								Randevu Al
							</a>
						</div>

						{/* Mobile Menu Button */}
						<button
							className="md:hidden p-2 text-gray-700"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							aria-label="Menü"
						>
							{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>

					{/* Mobile Navigation */}
					{mobileMenuOpen && (
						<div className="md:hidden py-4 border-t">
							<div className="flex flex-col gap-4">
								<a href="#anasayfa" className="text-gray-700 hover:text-teal-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
									Anasayfa
								</a>
								<a href="#hizmetler" className="text-gray-700 hover:text-teal-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
									Hizmetlerimiz
								</a>
								<a href="#uzmanliklar" className="text-gray-700 hover:text-teal-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
									Uzmanlıklarımız
								</a>
								<a href="#iletisim" className="text-gray-700 hover:text-teal-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
									İletişim
								</a>
								<a
									href={PHONE_LINK}
									className="bg-teal-600 text-white px-5 py-2 rounded-full font-semibold text-center"
								>
									Randevu Al
								</a>
							</div>
						</div>
					)}
				</div>
			</nav>

			{/* Hero Section */}
			<section id="anasayfa" className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white">
				<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
				<div className="max-w-7xl mx-auto px-4 py-20 md:py-32 relative">
					<div className="max-w-3xl">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
							Ağrılara Son!
						</h1>
						<p className="text-xl md:text-2xl text-teal-100 mb-8 leading-relaxed">
							G Therapy bel fıtığı ve boyun fıtığı gibi kas ve iskelet sisteminde meydana gelen sinir sıkışmalarına bağlı olarak gelişen hareket kısıtlılığı gibi rahatsızlıklarda uygulanan etkili bir yöntemdir.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<a
								href={PHONE_LINK}
								className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-colors shadow-lg"
							>
								<Phone size={20} />
								Hemen Ara
							</a>
							<a
								href={WHATSAPP_LINK}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-colors shadow-lg"
							>
								<MessageCircle size={20} />
								WhatsApp
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section id="hizmetler" className="py-16 md:py-24 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Hizmetlerimiz</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Uzman fizyoterapistlerimiz ile modern tedavi yöntemlerini kullanarak sağlığınıza kavuşmanıza yardımcı oluyoruz.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{services.map((service, index) => (
							<div
								key={index}
								className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group"
							>
								<div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-600 transition-colors">
									<service.icon className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors" />
								</div>
								<h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
								<p className="text-gray-600">{service.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Specialties Section */}
			<section id="uzmanliklar" className="py-16 md:py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Uzmanlıklarımız</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Aşağıdaki rahatsızlıkların tedavisinde uzmanlaşmış ekibimizle yanınızdayız.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{specialties.map((specialty, index) => (
							<div
								key={index}
								className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all"
							>
								<h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
									<ChevronRight className="w-5 h-5 text-teal-600" />
									{specialty.title}
								</h3>
								<p className="text-gray-600 text-sm leading-relaxed">{specialty.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 bg-teal-600 text-white">
				<div className="max-w-7xl mx-auto px-4 text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Randevu Almak İçin Hemen Arayın</h2>
					<p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
						Uzman fizyoterapistlerimiz ile görüşmek ve tedavi sürecinizi başlatmak için bizi arayın.
					</p>
					<a
						href={PHONE_LINK}
						className="inline-flex items-center gap-3 bg-white text-teal-700 px-10 py-4 rounded-full font-bold text-xl hover:bg-teal-50 transition-colors shadow-lg"
					>
						<Phone size={24} />
						{PHONE}
					</a>
				</div>
			</section>

			{/* Contact Section */}
			<section id="iletisim" className="py-16 md:py-24 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">İletişim</h2>
						<p className="text-gray-600">Bize ulaşmak için aşağıdaki bilgileri kullanabilirsiniz.</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{/* Contact Info */}
						<div className="space-y-6">
							<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
										<Phone className="w-6 h-6 text-teal-600" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-800 mb-1">Telefon</h3>
										<a href={PHONE_LINK} className="text-teal-600 hover:text-teal-700 text-lg font-medium">
											{PHONE}
										</a>
									</div>
								</div>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
										<Mail className="w-6 h-6 text-teal-600" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-800 mb-1">E-posta</h3>
										<a href={`mailto:${EMAIL}`} className="text-teal-600 hover:text-teal-700">
											{EMAIL}
										</a>
									</div>
								</div>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
										<MapPin className="w-6 h-6 text-teal-600" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-800 mb-1">Adres</h3>
										<a
											href={MAPS_LINK}
											target="_blank"
											rel="noopener noreferrer"
											className="text-gray-600 hover:text-teal-600 transition-colors"
										>
											{ADDRESS}
										</a>
									</div>
								</div>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
										<Clock className="w-6 h-6 text-teal-600" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-800 mb-1">Çalışma Saatleri</h3>
										<p className="text-gray-600">Pazartesi - Cumartesi: 09:00 - 20:00</p>
									</div>
								</div>
							</div>
						</div>

						{/* Map */}
						<div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 overflow-hidden">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.8!2d32.6907497!3d39.866321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34746479d162f%3A0xdaeb86d5a9d473f6!2sFizyobase%20Fizik%20Tedavi%20Klini%C4%9Fi!5e0!3m2!1str!2str!4v1701686400000!5m2!1str!2str"
								width="100%"
								height="400"
								style={{ border: 0, borderRadius: "0.75rem" }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Fizyobase Konum"
							></iframe>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-12">
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Brand */}
						<div>
							<div className="flex items-center gap-2 mb-4">
								<Activity className="h-8 w-8 text-teal-400" />
								<span className="text-2xl font-bold">
									Fizyo<span className="text-teal-400">base</span>
								</span>
							</div>
							<p className="text-gray-400">
								Ankara Çayyolu'nda uzman fizyoterapistler ile fizik tedavi ve rehabilitasyon hizmetleri.
							</p>
						</div>

						{/* Quick Links */}
						<div>
							<h3 className="font-semibold text-lg mb-4">Hızlı Bağlantılar</h3>
							<ul className="space-y-2">
								<li>
									<a href="#anasayfa" className="text-gray-400 hover:text-teal-400 transition-colors">
										Anasayfa
									</a>
								</li>
								<li>
									<a href="#hizmetler" className="text-gray-400 hover:text-teal-400 transition-colors">
										Hizmetlerimiz
									</a>
								</li>
								<li>
									<a href="#uzmanliklar" className="text-gray-400 hover:text-teal-400 transition-colors">
										Uzmanlıklarımız
									</a>
								</li>
								<li>
									<a href="#iletisim" className="text-gray-400 hover:text-teal-400 transition-colors">
										İletişim
									</a>
								</li>
							</ul>
						</div>

						{/* Contact */}
						<div>
							<h3 className="font-semibold text-lg mb-4">İletişim</h3>
							<ul className="space-y-3">
								<li>
									<a href={PHONE_LINK} className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors">
										<Phone size={18} />
										{PHONE}
									</a>
								</li>
								<li>
									<a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors">
										<Mail size={18} />
										{EMAIL}
									</a>
								</li>
								<li>
									<a
										href={INSTAGRAM_LINK}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors"
									>
										<Instagram size={18} />
										@fizyobase
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
						<p>&copy; {new Date().getFullYear()} Fizyobase Fizik Tedavi Kliniği. Tüm hakları saklıdır.</p>
					</div>
				</div>
			</footer>

			{/* Floating WhatsApp Button */}
			<a
				href={WHATSAPP_LINK}
				target="_blank"
				rel="noopener noreferrer"
				className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 hover:scale-110 transform"
				aria-label="WhatsApp ile iletişime geç"
			>
				<MessageCircle size={28} />
			</a>

			{/* Floating Phone Button (Mobile) */}
			<a
				href={PHONE_LINK}
				className="fixed bottom-6 left-6 bg-teal-600 text-white p-4 rounded-full shadow-lg hover:bg-teal-700 transition-colors z-50 md:hidden hover:scale-110 transform"
				aria-label="Hemen Ara"
			>
				<Phone size={28} />
			</a>
		</div>
	);
}

export default App;

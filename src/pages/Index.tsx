import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-livestock.jpg';
import { newsData } from '@/data/newsData';

const Index = () => {
  const featuredNews = newsData.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-primary-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Portal Berita Peternakan Jayawijaya
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
              Informasi terkini seputar peternakan, program pemberdayaan peternak, dan berita terbaru dari Dinas Peternakan Kabupaten Jayawijaya
            </p>
            <Link to="/berita">
              <Button size="lg" variant="secondary" className="gap-2 group">
                Lihat Semua Berita
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-primary-foreground">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15,000+</div>
              <div className="text-primary-foreground/80">Populasi Ternak</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">250+</div>
              <div className="text-primary-foreground/80">Kelompok Peternak</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-primary-foreground/80">Program Aktif</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Berita Terbaru</h2>
            <Link to="/berita">
              <Button variant="outline" className="gap-2 group">
                Lihat Semua
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredNews.map((news) => (
              <NewsCard
                key={news.id}
                id={news.id}
                title={news.title}
                excerpt={news.excerpt}
                image={news.image}
                category={news.category}
                date={news.date}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ingin Berkonsultasi?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tim penyuluh kami siap membantu Anda dalam pengembangan usaha peternakan. 
            Hubungi kami untuk informasi lebih lanjut.
          </p>
          <Link to="/kontak">
            <Button size="lg" className="gap-2">
              Hubungi Kami
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

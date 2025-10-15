import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { newsData } from '@/data/newsData';

const NewsDetail = () => {
  const { id } = useParams();
  const news = newsData.find((item) => item.id === id);

  if (!news) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Berita tidak ditemukan</h1>
            <Link to="/berita">
              <Button>Kembali ke Berita</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <article className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/berita">
            <Button variant="ghost" className="gap-2 mb-6">
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Berita
            </Button>
          </Link>

          <Badge variant="secondary" className="mb-4">
            {news.category}
          </Badge>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {news.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{news.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{news.author}</span>
            </div>
          </div>

          <div className="aspect-video mb-8 rounded-lg overflow-hidden shadow-[var(--shadow-medium)]">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default NewsDetail;

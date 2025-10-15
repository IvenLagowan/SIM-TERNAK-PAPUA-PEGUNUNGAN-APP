import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
}

const NewsCard = ({ id, title, excerpt, image, category, date }: NewsCardProps) => {
  return (
    <Link to={`/berita/${id}`}>
      <Card className="overflow-hidden hover:shadow-[var(--shadow-medium)] transition-all duration-300 h-full group">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-5">
          <Badge variant="secondary" className="mb-3">
            {category}
          </Badge>
          <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3">{excerpt}</p>
        </CardContent>
        <CardFooter className="px-5 pb-5 pt-0">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            <span>{date}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default NewsCard;

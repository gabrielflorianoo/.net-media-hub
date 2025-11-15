import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '@/data/mockData';
import { BookOpen, AlertCircle, CheckCircle, Wrench } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BookCardProps {
  book: Book;
  viewMode?: 'grid' | 'list';
}

const BookCard: React.FC<BookCardProps> = ({ book, viewMode = 'grid' }) => {
  const getStatusIcon = () => {
    switch (book.status) {
      case 'Disponível':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'Emprestado':
        return <AlertCircle className="h-4 w-4 text-orange-500" />;
      case 'Manutenção':
        return <Wrench className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = () => {
    switch (book.status) {
      case 'Disponível':
        return 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20';
      case 'Emprestado':
        return 'bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20';
      case 'Manutenção':
        return 'bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20';
    }
  };

  if (viewMode === 'list') {
    return (
      <Link to={`/livros/${book.id}`}>
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <BookOpen className="h-8 w-8 text-primary flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base truncate">{book.title}</h3>
                <p className="text-sm text-muted-foreground truncate">{book.author}</p>
              </div>
              <Badge variant="outline" className={`${getStatusColor()} flex items-center gap-1 flex-shrink-0`}>
                {getStatusIcon()}
                {book.status}
              </Badge>
              <Badge variant="secondary" className="flex-shrink-0">
                {book.category}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={`/livros/${book.id}`}>
      <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <BookOpen className="h-8 w-8 text-primary flex-shrink-0" />
            <Badge variant="outline" className={`${getStatusColor()} flex items-center gap-1`}>
              {getStatusIcon()}
              {book.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <CardTitle className="text-lg mb-2 line-clamp-2">{book.title}</CardTitle>
          <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
          <p className="text-xs text-muted-foreground">ISBN: {book.isbn}</p>
        </CardContent>
        <CardFooter className="pt-3 border-t border-border">
          <Badge variant="secondary" className="w-full justify-center">
            {book.category}
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BookCard;

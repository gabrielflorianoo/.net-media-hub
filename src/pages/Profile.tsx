import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { MOCK_BOOKS, MOCK_MOVIES } from '@/data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Hash, LogOut, BookOpen, Film } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BookCard from '@/components/ui/BookCard';
import MovieCard from '@/components/ui/MovieCard';

const Profile: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Obter livros emprestados pelo usuário
  const userBooks = MOCK_BOOKS.filter(book => user.booksOut.includes(book.id));
  
  // Obter filmes locados pelo usuário
  const userMovies = MOCK_MOVIES.filter(movie => user.moviesOut.includes(movie.id));

  const isActive = user.status === 'Ativo';

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Meu Perfil</h1>
        <p className="text-muted-foreground">
          Gerencie suas informações e itens ativos
        </p>
      </div>

      {/* User Info Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl">{user.name}</CardTitle>
                <Badge 
                  variant="outline" 
                  className={`mt-2 ${
                    isActive 
                      ? 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20'
                      : 'bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20'
                  }`}
                >
                  {user.status}
                </Badge>
              </div>
            </div>
            <Button 
              variant="destructive" 
              onClick={handleLogout}
              className="gap-2"
            >
              <LogOut className="h-4 w-4" />
              Sair
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Hash className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">ID do Membro</p>
                <p className="font-semibold">{user.memberId}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-6 mt-6 pt-6 border-t border-border">
            <div>
              <p className="text-sm text-muted-foreground">Livros Emprestados</p>
              <p className="text-2xl font-bold text-primary">{user.booksOut.length}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Filmes Locados</p>
              <p className="text-2xl font-bold text-primary">{user.moviesOut.length}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Items */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Meus Itens Ativos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Livros */}
          {userBooks.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Livros Emprestados
              </h3>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {userBooks.map(book => (
                  <BookCard key={book.id} book={book} viewMode="grid" />
                ))}
              </div>
            </div>
          )}

          {/* Filmes */}
          {userMovies.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                <Film className="h-4 w-4" />
                Filmes Locados
              </h3>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {userMovies.map(movie => (
                  <MovieCard key={movie.id} movie={movie} viewMode="grid" />
                ))}
              </div>
            </div>
          )}

          {/* Empty state */}
          {userBooks.length === 0 && userMovies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Você não possui itens emprestados ou locados no momento.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;

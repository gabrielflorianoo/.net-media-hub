import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { MOCK_BOOKS, MOCK_MOVIES } from '@/data/mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Film, AlertCircle, TrendingUp } from 'lucide-react';
import BookCard from '@/components/ui/BookCard';
import MovieCard from '@/components/ui/MovieCard';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  // Estatísticas
  const totalBooks = MOCK_BOOKS.length;
  const booksLoaned = MOCK_BOOKS.filter(b => b.status === 'Emprestado').length;
  const totalMovies = MOCK_MOVIES.length;
  const moviesRented = MOCK_MOVIES.filter(m => m.status === 'Locado').length;

  // Itens recentes (últimos 4 de cada)
  const recentBooks = MOCK_BOOKS.slice(0, 4);
  const recentMovies = MOCK_MOVIES.slice(0, 4);

  // Itens em atraso (simulado - items emprestados/locados há mais tempo)
  const overdueItems = [
    ...MOCK_BOOKS.filter(b => b.status === 'Emprestado').slice(0, 2),
    ...MOCK_MOVIES.filter(m => m.status === 'Locado').slice(0, 2),
  ];

  return (
    <div className="space-y-8">
      {/* Boas-vindas */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Bem-vindo, {user?.name}!</h1>
        <p className="text-muted-foreground">
          Visão geral do seu acervo multimídia
        </p>
      </div>

      {/* Estatísticas .NET */}
      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Estatísticas .NET
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Livros</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{totalBooks}</div>
              <p className="text-xs text-muted-foreground">
                no acervo
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Livros Emprestados</CardTitle>
              <AlertCircle className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{booksLoaned}</div>
              <p className="text-xs text-muted-foreground">
                atualmente emprestados
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Filmes</CardTitle>
              <Film className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{totalMovies}</div>
              <p className="text-xs text-muted-foreground">
                no acervo
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Filmes Locados</CardTitle>
              <AlertCircle className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{moviesRented}</div>
              <p className="text-xs text-muted-foreground">
                atualmente locados
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Acervo Recente */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Acervo Recente</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Livros Recentes</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {recentBooks.map(book => (
                <BookCard key={book.id} book={book} viewMode="grid" />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Filmes Recentes</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {recentMovies.map(movie => (
                <MovieCard key={movie.id} movie={movie} viewMode="grid" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Itens em Atraso */}
      {overdueItems.length > 0 && (
        <div>
          <Card className="border-orange-500/20 bg-orange-500/5">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-orange-500" />
                <CardTitle>Itens em Atraso</CardTitle>
              </div>
              <CardDescription>
                Items que requerem atenção
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {overdueItems.map(item => {
                  if ('isbn' in item) {
                    return <BookCard key={item.id} book={item} viewMode="list" />;
                  } else {
                    return <MovieCard key={item.id} movie={item} viewMode="list" />;
                  }
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

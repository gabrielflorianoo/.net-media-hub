import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_MOVIES } from '@/data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Film, User, Calendar, CheckCircle, AlertCircle, Wrench } from 'lucide-react';
import { toast } from 'sonner';

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const movie = MOCK_MOVIES.find(m => m.id === id);

  if (!movie) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Filme não encontrado</h2>
        <Button onClick={() => navigate('/filmes')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para Filmes
        </Button>
      </div>
    );
  }

  const getStatusIcon = () => {
    switch (movie.status) {
      case 'Disponível':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'Locado':
        return <AlertCircle className="h-5 w-5 text-orange-500" />;
      case 'Manutenção':
        return <Wrench className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = () => {
    switch (movie.status) {
      case 'Disponível':
        return 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20';
      case 'Locado':
        return 'bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20';
      case 'Manutenção':
        return 'bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20';
    }
  };

  const handleRent = () => {
    toast.success('Locação simulada com sucesso!');
  };

  const handleReturn = () => {
    toast.success('Devolução simulada com sucesso!');
  };

  return (
    <div className="space-y-6">
      {/* Navigation */}
      <Button variant="ghost" onClick={() => navigate('/filmes')}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Voltar para Filmes
      </Button>

      {/* Movie Info */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Film className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">{movie.title}</CardTitle>
              </div>
              <p className="text-lg text-muted-foreground">{movie.director}</p>
            </div>
            <Badge variant="outline" className={`${getStatusColor()} flex items-center gap-2 text-base px-4 py-2`}>
              {getStatusIcon()}
              {movie.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Detalhes */}
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-sm text-muted-foreground">Ano</p>
              <p className="font-semibold">{movie.year}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Diretor</p>
              <p className="font-semibold">{movie.director}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Gênero</p>
              <Badge variant="secondary">{movie.genre}</Badge>
            </div>
          </div>

          {/* Ações */}
          <div className="flex gap-3 pt-4 border-t border-border">
            {movie.status === 'Disponível' && (
              <Button onClick={handleRent} className="gap-2">
                <CheckCircle className="h-4 w-4" />
                Locar
              </Button>
            )}
            {movie.status === 'Locado' && (
              <Button onClick={handleReturn} variant="outline" className="gap-2">
                <CheckCircle className="h-4 w-4" />
                Devolver
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Histórico de Locações */}
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Locações</CardTitle>
        </CardHeader>
        <CardContent>
          {movie.loanHistory.length > 0 ? (
            <div className="space-y-3">
              {movie.loanHistory.map((entry, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted/30"
                >
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-semibold">{entry.borrowerName}</p>
                      <p className="text-sm text-muted-foreground">ID: {entry.userId}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{entry.dateOut}</span>
                      <span>→</span>
                      <span>{entry.dateIn || entry.dateDue}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {entry.dateIn ? (
                        <span className="text-green-600 dark:text-green-400">Devolvido</span>
                      ) : (
                        <span className="text-orange-600 dark:text-orange-400">Em andamento</span>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-8">
              Nenhuma locação registrada para este filme.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MovieDetails;

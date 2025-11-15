import React, { useState, useMemo } from 'react';
import { MOCK_MOVIES } from '@/data/mockData';
import MovieCard from '@/components/ui/MovieCard';
import ViewModeToggle from '@/components/ui/ViewModeToggle';
import PaginationControl from '@/components/ui/PaginationControl';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';

const Movies: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [genreFilter, setGenreFilter] = useState<string>('all');

  // Filtrar filmes
  const filteredMovies = useMemo(() => {
    return MOCK_MOVIES.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           movie.director.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'all' || movie.status === statusFilter;
      const matchesGenre = genreFilter === 'all' || movie.genre === genreFilter;
      
      return matchesSearch && matchesStatus && matchesGenre;
    });
  }, [searchQuery, statusFilter, genreFilter]);

  // Paginação
  const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
  const paginatedMovies = filteredMovies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset para página 1 quando filtros mudam
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, statusFilter, genreFilter, itemsPerPage]);

  // Obter gêneros únicos
  const genres = Array.from(new Set(MOCK_MOVIES.map(m => m.genre)));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Filmes</h1>
        <p className="text-muted-foreground">
          Gerencie o acervo de filmes
        </p>
      </div>

      {/* Controles */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por título ou diretor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>

          {/* View Mode Toggle */}
          <ViewModeToggle viewMode={viewMode} onViewModeChange={setViewMode} />
        </div>

        {/* Filtros */}
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Filtros:</span>
          
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os Status</SelectItem>
              <SelectItem value="Disponível">Disponível</SelectItem>
              <SelectItem value="Locado">Locado</SelectItem>
              <SelectItem value="Manutenção">Manutenção</SelectItem>
            </SelectContent>
          </Select>

          <Select value={genreFilter} onValueChange={setGenreFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Gênero" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os Gêneros</SelectItem>
              {genres.map(genre => (
                <SelectItem key={genre} value={genre}>
                  {genre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Lista de Filmes */}
      {paginatedMovies.length > 0 ? (
        <div className={
          viewMode === 'grid'
            ? 'grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            : 'flex flex-col gap-3'
        }>
          {paginatedMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} viewMode={viewMode} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Nenhum filme encontrado com os filtros selecionados.
          </p>
        </div>
      )}

      {/* Paginação */}
      {filteredMovies.length > 0 && (
        <PaginationControl
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalItems={filteredMovies.length}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={setItemsPerPage}
        />
      )}
    </div>
  );
};

export default Movies;

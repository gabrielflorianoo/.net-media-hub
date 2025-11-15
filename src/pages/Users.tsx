import React, { useState, useMemo } from 'react';
import { MOCK_USERS } from '@/data/mockData';
import UserCard from '@/components/ui/UserCard';
import PaginationControl from '@/components/ui/PaginationControl';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Users: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrar usuários
  const filteredUsers = useMemo(() => {
    return MOCK_USERS.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           user.memberId.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesSearch;
    });
  }, [searchQuery]);

  // Paginação
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset para página 1 quando filtros mudam
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, itemsPerPage]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Usuários</h1>
        <p className="text-muted-foreground">
          Gerencie os membros do sistema
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar por nome, email ou ID..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Lista de Usuários */}
      {paginatedUsers.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {paginatedUsers.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Nenhum usuário encontrado com a busca realizada.
          </p>
        </div>
      )}

      {/* Paginação */}
      {filteredUsers.length > 0 && (
        <PaginationControl
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalItems={filteredUsers.length}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={setItemsPerPage}
        />
      )}
    </div>
  );
};

export default Users;

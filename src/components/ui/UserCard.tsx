import React from 'react';
import { User } from '@/data/mockData';
import { User as UserIcon, Mail, Hash, CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const isActive = user.status === 'Ativo';
  
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <UserIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-base">{user.name}</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Hash className="h-3 w-3" />
                {user.memberId}
              </p>
            </div>
          </div>
          <Badge 
            variant="outline" 
            className={`flex items-center gap-1 ${
              isActive 
                ? 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20'
                : 'bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20'
            }`}
          >
            {isActive ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
            {user.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span className="truncate">{user.email}</span>
          </div>
          <div className="flex gap-4 pt-2 border-t border-border">
            <div>
              <span className="text-xs text-muted-foreground">Livros</span>
              <p className="font-semibold text-primary">{user.booksOut.length}</p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground">Filmes</span>
              <p className="font-semibold text-primary">{user.moviesOut.length}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;

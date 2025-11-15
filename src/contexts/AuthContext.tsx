import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, MOCK_USERS } from '@/data/mockData';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Verifica se há usuário logado no localStorage
    const savedUser = localStorage.getItem('authUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    // Simulação de login - aceita qualquer senha desde que o email exista
    const foundUser = MOCK_USERS.find(u => u.email === email);
    
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('authUser', JSON.stringify(foundUser));
      return true;
    }
    
    return false;
  };

  const register = (name: string, email: string, password: string): boolean => {
    // Simulação de registro - verifica se email já existe
    const emailExists = MOCK_USERS.some(u => u.email === email);
    
    if (!emailExists) {
      const newUser: User = {
        id: `u${MOCK_USERS.length + 1}`,
        name,
        email,
        memberId: `MEM-${String(MOCK_USERS.length + 1).padStart(3, '0')}`,
        status: "Ativo",
        booksOut: [],
        moviesOut: []
      };
      
      MOCK_USERS.push(newUser);
      setUser(newUser);
      localStorage.setItem('authUser', JSON.stringify(newUser));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authUser');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user,
      login,
      register,
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

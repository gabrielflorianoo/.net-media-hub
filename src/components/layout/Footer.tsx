import React from 'react';
import { Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-border bg-card py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Code2 className="h-4 w-4 text-primary" />
            <span>.NET Acervo - Sistema de Gerenciamento</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Powered by ASP.NET Core (simulado)</span>
            <span>© 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

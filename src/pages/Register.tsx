import React from 'react';
import RegisterForm from '@/components/forms/RegisterForm';
import { Code2 } from 'lucide-react';

const Register: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Code2 className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">.NET Acervo</h1>
          <p className="text-muted-foreground mt-2">
            Sistema de Gerenciamento Multimídia
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;

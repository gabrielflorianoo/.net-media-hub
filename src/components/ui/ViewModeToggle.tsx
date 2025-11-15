import React from 'react';
import { LayoutGrid, LayoutList } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ViewModeToggleProps {
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

const ViewModeToggle: React.FC<ViewModeToggleProps> = ({ viewMode, onViewModeChange }) => {
  return (
    <div className="flex items-center gap-1 border border-border rounded-md p-1 bg-muted/50">
      <Button
        variant={viewMode === 'grid' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onViewModeChange('grid')}
        className="gap-2"
      >
        <LayoutGrid className="h-4 w-4" />
        <span className="hidden sm:inline">Grade</span>
      </Button>
      <Button
        variant={viewMode === 'list' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onViewModeChange('list')}
        className="gap-2"
      >
        <LayoutList className="h-4 w-4" />
        <span className="hidden sm:inline">Lista</span>
      </Button>
    </div>
  );
};

export default ViewModeToggle;

import { fireEvent, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { 
  RenderWithTranslation 
} from 'shared/lib/tests/RenderWithTranslation/RenderWithTranslation';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';

describe('Sidebar', () => {
    test('Test render', () => {
      const SidebarWhithTranslation = withTranslation()(Sidebar);
      RenderWithTranslation(<Sidebar />)
      expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test toggle', () => {
      const SidebarWhithTranslation = withTranslation()(Sidebar);
      RenderWithTranslation(<Sidebar />)
      const toggleBtn = screen.getByTestId('sidebar-toggle');
      expect(screen.getByTestId('sidebar')).toBeInTheDocument();
      fireEvent.click(toggleBtn);
      expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
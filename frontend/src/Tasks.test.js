
import { render, screen } from '@testing-library/react';

import Tasks from './Tasks.js';

test('renders task list', () => {
  render(<Tasks data={[]}/>)
    expect(screen.getByText('To(o much) To Do')).toBeInTheDocument()
});
import { render, screen } from '@testing-library/react';
// import HomePage from './Pages/Home/HomePage';
// import LoginPage from './Pages/Login/LoginPage';
import PerfilPage from './Pages/Perfil/PerfilPage';
test('renders learn react link', () => {
  render(<PerfilPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

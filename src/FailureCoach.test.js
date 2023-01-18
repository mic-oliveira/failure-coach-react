import { render, screen } from '@testing-library/react';
import App from './App';
import FailureCoach from "./FailureCoach";

test('renders learn react link', () => {
    render(<FailureCoach />);
    const linkElement = screen.getByText(/Aperte Espaço ou /i);
    expect(linkElement).toBeInTheDocument();
});

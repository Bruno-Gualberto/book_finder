import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import CardsList from '.'
import { act } from 'react-dom/test-utils';

const mostRelevantBooks = {
  items: [
    {
      volumeInfo: {
        title: 'Blabla'
      }
    }
  ]
}


global.fetch = jest.fn();

afterEach(() => {
  fetch.mockClear();
});

const sum = (par1, par2) => {
  return par1 + par2
}

describe.only('CardsList', () => {
  it('has book title Blabla - getByText', () => {
    render(<CardsList mostRelevantBooks={ mostRelevantBooks } />);
    const bookTitle = screen.getByText('Blabla');
    expect(bookTitle).toBeInTheDocument();
  })

  it.only('has clicked search button', () => {
    render(<CardsList mostRelevantBooks={ mostRelevantBooks } />);
    const btn = screen.getByRole('button', { name: /search/i })
    const result = {items: []};
    const req = {json: () => result};
    fetch.mockResolvedValueOnce(req);

    act(() => {
      fireEvent.click(btn);
      expect(fetch).toHaveBeenCalledTimes(1);
    })
  })
})  

// testar o setBooksList e o setError
// testar quando o fetch retorna o erro
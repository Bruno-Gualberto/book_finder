import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '@/pages/index'

const mostRelevantBooks = {
  items: [
    {
      volumeInfo: {
        title: 'Blabla'
      }
    }
  ]
}

describe('Home', () => {
  it('has a heading with the text Book finder - getByRole', () => {
    
    render(<Home mostRelevantBooks={mostRelevantBooks}/>)
    
    const headingRole = screen.getByRole('heading', {
      name: /book finder/i,
    });

    expect(headingRole).toBeInTheDocument();
  })

  it('has a placeholder text Search for a book - getByPlaceholderText', () => {
    render (<Home mostRelevantBooks={mostRelevantBooks} />);

    const placeholder = screen.getByPlaceholderText('Search for a book');

    expect(placeholder).toBeInTheDocument();
  })

  it('has a button with test id of search-button - getByTestId', () => {
    render(<Home mostRelevantBooks={mostRelevantBooks} />);

    const buttonElement = screen.getByTestId('search-button');

    expect(buttonElement).toBeInTheDocument();
  })  

  it('has not a element with the text Ronaldinho - toBeNull', () => {
    render(<Home mostRelevantBooks={mostRelevantBooks} />);

    const ronaldinho = screen.queryByText('Ronaldinho');

    expect(ronaldinho).toBeNull();
  })
})
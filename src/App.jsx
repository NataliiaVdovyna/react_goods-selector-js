import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [isSelected, setIsSelected] = useState('Jam');

  const handleSelectGood = good => {
    setIsSelected(good);
  };

  const clearSection = () => {
    setIsSelected('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {!isSelected ? 'No goods selected' : `${isSelected} is selected`}
        {isSelected && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clearSection}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={
                isSelected === good ? 'has-background-success-light' : ''
              }
            >
              <td>
                {isSelected !== good && (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => handleSelectGood(good)}
                  >
                    +
                  </button>
                )}
                {isSelected === good && (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={clearSection}
                  >
                    -
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

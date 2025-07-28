import React from 'react';

export const FilterIconDropdown = ({ filter, setFilter }) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-dark dropdown-toggle"
        type="button"
        id="filterIconBtn"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-funnel-fill">.</i> {/* Filter icon */}
      </button>
      <ul className="dropdown-menu" aria-labelledby="filterIconBtn">
        <li>
          <button className="dropdown-item" onClick={() => setFilter('all')}>
            All
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => setFilter('completed')}>
            Completed
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => setFilter('incomplete')}>
            Incomplete
          </button>
        </li>
      </ul>
    </div>
  );
};

import { useState } from 'react';
import './searchBar.scss'
import { Link } from 'react-router-dom';

const types = ["buy", "rent"];

function SearchBar() {
    const [query, setQuery] = useState({
        type: "rent",
        city: "",
        minPrice: 0,
        maxPrice: 0,
    })

    const swithType = (val) => {
        setQuery((prev) => ({ ...prev, type: val }));
    }

    const handleChange = e => {
        setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value}))
    }
    return (
      <div className="searchBar">
        <div className="type">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => swithType(type)}
              className={query.type === type ? "active" : ""}
            >
              {type}
            </button>
          ))}
        </div>
        <form>
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
          />
          <input
            type="number"
            min={0}
            max={1000000}
            name="minPrice"
            placeholder="Min Price"
          />
          <input
            type="number"
            name="maxPrice"
            min={0}
            max={1000000}
            placeholder="Max Price"
            onChange={handleChange}
          />
          <Link to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}>
            <button>
              <img src="/search.png" alt="" />
            </button>
          </Link>
        </form>
      </div>
    );
}

export default SearchBar
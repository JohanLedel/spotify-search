import React, { useState, useContext, useEffect } from 'react';
import { search } from '../utils/utils';
import SearchResults from '../components/SearchResults';
import { UserContext } from '../App';

export default function Home() {
    let [searchResult, setSearchResult] = useState([]);
    const { user } = useContext(UserContext);

    /**
     * Fetch data with search string
     * Store results in state
     * @param {String} searchString
     */
    const handleSearch = async (e) => {
        e.preventDefault();
        if (e.target.value.length >= 2) {
            let urlString = encodeURIComponent(e.target.value),
                searchRes = await search(urlString, user.access_token);
            setSearchResult(searchRes);
        } else if (e.target.value.length < 1) {
            setSearchResult('');
        }
    };

    return (
        <div className="main-container ">
            {user && (
                <>
                    <label className="input-label">
                        <span>Search</span>
                        <input
                            className="input-search"
                            name="search"
                            onChange={(e) => handleSearch(e)}
                        />
                        <i class="fa-regular fa-user"></i>
                    </label>

                    <SearchResults data={searchResult} />
                </>
            )}
        </div>
    );
}

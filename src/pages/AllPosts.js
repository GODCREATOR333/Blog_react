import React, { useState } from 'react';
import PostsItem from '../Components/PostsItem';

function AllPosts() {
  const [sortOption, setSortOption] = useState('relevance');

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <section>
      <div className=' container sorter'>
        <label htmlFor="sortPosts">Sort by:</label>
        <select id="sortPosts" value={sortOption} onChange={handleSortChange}>
          <option value="relevance">Relevance</option>
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="Alphabetically(A-Z)">Alphabetically(A-Z)</option>
          <option value="Alphabetically(Z-A)">Alphabetically(Z-A)</option>
        </select>
      </div>


      <div>

      <PostsItem sortOption={sortOption} />
      
      </div>
      </section>



  );
}

export default AllPosts;

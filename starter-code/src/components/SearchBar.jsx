import React from 'react'

export default function SearchBar({toto}) {
  return (
    <div>
      <h1>Search</h1>
      <form onChange={toto}>
        <input type="text" name="search" />
        <p>
          <input type="checkbox" />
          Only show products on stock
          </p>
      </form>
    </div>
  )
}

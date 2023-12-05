import React, { useState } from "react";

function Filter({ onSort, onSearch, sort, searchValue,categories,selectedCategory,onSelectCategory }) {
  return ( 
    <div>
      <div className="flex items-center justify-between mb-6">
        <label className="text-slate-500 text-lg">search</label>
        <input
          type="text"
          name="search-input"
          value={searchValue}
          onChange={onSearch}
          className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <label className="text-slate-500 text-lg">sort</label>
        <select
          name="sort-products"
          value={sort}
          onChange={onSort}
          className="bg-transparent text-slate-400 rounded-xl"
        >
          <option className="bg-slate-500 text-slate-300" value="">
            select a category
          </option>
          <option className="bg-slate-500 text-slate-300" value="latest">
            latest
          </option>
          <option className="bg-slate-500 text-slate-300" value="earliest">
            earliest
          </option>
        </select>
      </div>
      <div className="flex items-center justify-between mb-6">
        <label className="text-slate-500 text-lg">Category</label>
        <select
          name="sort-products"
          value={selectedCategory}
          onChange={onSelectCategory}
          className="bg-transparent text-slate-400 rounded-xl"
        >
          <option className="bg-slate-500 text-slate-300" value="">
            All
          </option>
          {categories.map(category=>{
           return <option className="bg-slate-500 text-slate-300" value={category.id} key={category.id}>
           {category.title}
         </option>
          })}
        </select>
      </div>
    </div>
  );
}

export default Filter;

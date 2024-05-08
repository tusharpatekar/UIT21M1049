import React, { useEffect, useState } from 'react';


{/* Tushar Sudhakar Patekar*/}
function AllProducts() {
  const [products, setProducts] = useState([]);
  const [company, setCompany] = useState('AMZ'); 
  const [category, setCategory] = useState('Computer'); 
  const [minPrice, setMinPrice] = useState(1); 
  const [maxPrice, setMaxPrice] = useState(10000);
  const [discount, setDiscount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(7);
  const [sortOrder, setSortOrder] = useState('asc'); 
  const [sortBy, setSortBy] = useState('price');

  useEffect(() => {
    fetchProducts();
  }, [company, category, minPrice, maxPrice, discount, currentPage, sortOrder, sortBy]);

  const fetchProducts = () => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    
    fetch(`http://127.0.0.1:8000/api/categories/${category}/products?company=${company}&top=${endIndex}&minPrice=${minPrice}&maxPrice=${maxPrice}&discount=${discount}&sort=${sortBy}&order=${sortOrder}`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleDiscountChange = (event) => {
    setDiscount(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Pagination logic
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container">
      <h1>Product List</h1>
      <div className="filter">
        <label htmlFor="company">Company:</label>
        <select id="company" value={company} onChange={handleCompanyChange}>
          <option value="AMZ">AMZ</option>
          <option value="FLP">FLP</option>
          <option value="SNP">SNP</option>
          <option value="MYN">MYN</option>
          <option value="AZO">AZO</option>
        </select>
        <label htmlFor="category">Category:</label>
        <select id="category" value={category} onChange={handleCategoryChange}>
          <option value="Phone">Phone</option>
          <option value="Computer">Computer</option>
          <option value="TV">TV</option>
          <option value="Earphone">Earphone</option>
          <option value="Tablet">Tablet</option>
          <option value="Charger">Charger</option>
          <option value="Keypad">Keypad</option>
          <option value="Pendrive">Pendrive</option>
          <option value="Remote">Remote</option>
          <option value="Speaker">Speaker</option>
          <option value="Headset">Headset</option>
          <option value="Laptop">Laptop</option>
          <option value="PC">PC</option>
          
        </select>
        <label htmlFor="minPrice">Minimum Price:</label>
        <input id="minPrice" type="number" value={minPrice} onChange={handleMinPriceChange} />
        <label htmlFor="maxPrice">Maximum Price:</label>
        <input id="maxPrice" type="number" value={maxPrice} onChange={handleMaxPriceChange} />
        <label htmlFor="discount">Discount:</label>
        <input id="discount" type="number" value={discount} onChange={handleDiscountChange} />
        <label htmlFor="sortBy">Sort By:</label>
        <select id="sortBy" value={sortBy} onChange={handleSortChange}>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
        <label htmlFor="sortOrder">Sort Order:</label>
        <select id="sortOrder" value={sortOrder} onChange={handleOrderChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <ul className="products">
        {products.map(product => (
          <li key={product.product_id} className="product">
            <h2>{product.productName}</h2>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.availability}</p>
          </li>
        ))}
      </ul>
      <div className="pagination">
        {pageNumbers.map(number => (
          <button key={number} className={currentPage === number ? 'active' : ''} onClick={() => handlePageChange(number)}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;

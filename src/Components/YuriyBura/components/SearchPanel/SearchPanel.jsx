

function SearchPanel() {
  const searhText = 'Type here to search';
  const searchStyle = {
    fontSize: '20px'
  }
  return     <input className="search-input" style={searchStyle} placeholder={searhText}/>
}

export default SearchPanel;
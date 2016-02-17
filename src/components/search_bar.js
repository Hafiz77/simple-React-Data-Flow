import React from 'react';


/*const SearchBar=()=>{
  return <input />;
};
export default SearchBar;*/
  class SearchBar extends React.Component{
    constructor(props){
      //console.log(props);
      super(props);
      this.state = {term:''};

    }
    onInputChange(term){
      //console.log(test);
      this.setState({term});
      this.props.onSearchTermChange(term);
    }
      render(){
        return (
              <form>
                <div className="form-group search-bar">
                    <input className="form-control" placeholder="Search"
                    value={this.state.term}
                    onChange={event=>this.onInputChange(event.target.value)}
                     />

                </div>
              </form>
        )
      }

  };
  export default SearchBar;

//React Dependencies
import React, { useState } from 'react'
//Redux Dependencies
import { connect } from 'react-redux'

//Styles
import Loader from 'react-loader-spinner'

function SearchForm(props) {
    //Local State
    const [searchValue, setSearchValue] = useState('')

    //Input Handler
    const handleChanges = (e) => {
        setSearchValue(e.target.value)
    }

    //Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault()
        //setURL here
        setSearchValue('')
    }

    //Loading Animation
    const renderLoader = () => {
        return (
            <Loader
                type="BallTriangle"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}
            />
        )
    }

    //SearchForm JSX
    return (
        <div className='search-form'>
            {props.isLoading ? 
            renderLoader() : 
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    value={searchValue}
                    onChange={handleChanges}
                />
                <button>SEARCH</button>
            </form>
            }
        </div>
    )
}


//Map State from Global Redux Store and Set as Props
//State Is Passed in from Connect On Invocation
const mapStateToProps = (state) => {
    return {
        //Return Needed State Properties
        isLoading: state.isLoading
    }
}

//Export SearchForm & Connect to Global Redux Flow
//Second Argument Is For Needed Actions
export default connect(mapStateToProps, {})(SearchForm)

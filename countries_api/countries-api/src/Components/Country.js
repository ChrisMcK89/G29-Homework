import CountriesContainer from "../container/CountriesContainer";

const Country = ({country}) => {
    return (
        <div className="Country">
            <li> 
                <img src={country.flags.png}/><br/>
                <h3>{CountriesContainer.flags}</h3>
                
            </li>
        </div>
    )
}

export default Country;
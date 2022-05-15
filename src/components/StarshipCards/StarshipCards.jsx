

const StarshipCards = ({allStarships})=>{

    const allData  = [];
    let allCards = null;

    if(allStarships){
        for(let starshipsData of allStarships){
            for(let result of starshipsData){
                allData.push(result)
            }
        }

        allCards = allData.map(({name}, index)=>{
            return(
                <div className="star-ships" key={index}>
                    {name}
                </div>
            )
        })
    }
        
    return(
        <div className="starships-container">
            {allCards}
        </div>
    )
}

export default StarshipCards
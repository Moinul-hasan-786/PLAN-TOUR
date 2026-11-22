import Card from "./Card"

function Tour({tours , removeTour}) {
    return (
        <div className = "container">
            <div><h1 className = "title">PLAN TOUR</h1></div>
            <div className = "cards">
                {
                    tours.map( (item) => {
                        return <Card key = {item.id} {...item} removeTour = {removeTour}></Card>
                    })
                }
            </div>
        </div>
    )
}

export default Tour;


const Book = (props) => {

    // if(!props.name){
    //     return null
    // }

    return props.name ? (
        <div>
            <h1>{props.name ? props.name : "Book default"} </h1>
            <p>{props.year}</p>
            <p>{props.price}</p>
            <span>{props.children}</span>
        </div>
    ) : (
        <h1>Malumot topilmadi</h1>
    )
}

export default Book
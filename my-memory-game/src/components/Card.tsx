export default function Card({img, name}){



    return(
        <>
        <div className="card relative h-40 w-30 flex justify-center items-center">
         <img src={img} alt={name} className="max-h-full max-w-full"></img>
        </div>
        
        </>
    )
}
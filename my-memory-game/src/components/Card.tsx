export default function Card({img, name}){



    return(
        <>
        <div className="flex card border-black border-solid border-2 object-center justify-center items-center">
         <img src={img} alt={name}></img>
        </div>
        
        </>
    )
}
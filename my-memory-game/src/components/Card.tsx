interface CardProps {
    img: string;
    name: string;
  }



export const Card: React.FC<CardProps>=({img,name})=>{



    return(
        <>
        <div className="card bg-yellow-300  relative border-spacing-0 p-0 opacity-90 h-40 w-30 flex flex-col justify-center items-center">
         <img src={img} alt={name} className="max-h-full max-w-full border-0"></img>
         <div className="name font-sans font-bold">{name}</div>
        </div>
        
        </>
    )
}
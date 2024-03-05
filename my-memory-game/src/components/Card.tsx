interface CardProps {
    img: string;
    name: string;
  }



export const Card: React.FC<CardProps>=({img,name})=>{



    return(
        <>
        <div className="card bg-pink-200 relative border-spacing-0 border-1 opacity-60 h-40 w-30 flex flex-col justify-center items-center">
         <img src={img} alt={name} className="max-h-full max-w-full"></img>
         <div className="name font-bold">{name}</div>
        </div>
        
        </>
    )
}


const ManuCard = ({item}) => {
    const {name,image,price,recipe}=item;
  return (
    <div className="flex gap-10">
    <div>
    <img style={{borderRadius:"0 200px 200px 200px"}} className="w-[120px]" src={image} alt="" />
    </div>
    <div>
    <h1 className="uppercase text-xl">{name}--------</h1>
    <p>{recipe}</p>
    </div>
    <p className="text-yellow-600">{price}</p>
    

    </div>
  )
}

export default ManuCard
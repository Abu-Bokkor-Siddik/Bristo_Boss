const FoodCard = ({item}) => {
    const{name,image,price,recipe}=item
    console.log(item)
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
      
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mt-5 mr-5 px-4">${price}</p>
      <div className="card-body">
        <h2 className="card-title text-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

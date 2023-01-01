import { Link } from "react-router-dom"

const Item = ({description, title, url, price}) => {
  return (
   <Link to={`/item/${url}`}>
    <div className="card w-96 bg-base-100 shadow-xl max-w-xs m-xl">
      <picture>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </picture>
      <div className="card-body">
        <h2 className="card-title">{title}!</h2>
        <p>{description}</p>
        <p>{price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Comprar</button>
        </div>
      </div>
     </div>
   </Link>
  )
}

export default Item
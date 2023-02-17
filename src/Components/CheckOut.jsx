import { Link } from "react-router-dom";

export default function CheckOut() {
    return (
        <h1 className="text-center text-7xl">
            No Checkout Avaliable yet!
            <button className="mt-20 p-20 Go"><Link to="/shop">Go back to shop</Link></button>
        </h1>
    )
}
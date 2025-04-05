import { Table } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddedProductList = () => {
  const { products } = useSelector((state) => state.products);
  // console.log(products);
  
  return (
    <>
      {!products ? (
        <h2>No products added!</h2>
      ) : (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>product Name</th>
              <th>product Discription</th>
              <th>Price</th>
              <th>Image</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {products.map((product, i) => (
            <tbody key={i}>
              <tr>
                <td>{i + 1}</td>
                <td>{product.productName}</td>
                <td>{product.productDiscription}</td>
                <td>₹{product.productPrice}</td>
                <td>
                  <img
                    src={product.imageUrl}
                    alt={product.productName}
                    height={"100px"}
                  />
                </td>
                <td className="align-middle text-center">
                  <Link>
                    <FaEdit />
                  </Link>
                </td>
                <td className="align-middle text-center">
                  <Link>
                    <MdDelete />
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      )}
    </>
  );
};

export default AddedProductList;

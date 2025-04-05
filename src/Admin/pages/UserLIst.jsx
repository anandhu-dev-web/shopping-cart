import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, removeUser } from "../../redux/userSlice";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const UserList = () => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log("user------->", users);
  const handleOnClick = () => {
    localStorage.removeItem("users");
    dispatch(clearUser());
  };
  const handleRemoveUser = () => {
    dispatch(removeUser(users));
  };
  return (
    <Container>
      <Row className="" id="user_list_row">
        <Col className="text-center">
          {users.length < 1 ? (
            <Row>
              <Col>
                <h3>No users found!</h3>
              </Col>
            </Row>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Handle users</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{user.fullName}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      <Button onClick={handleRemoveUser}>remove</Button>
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
                ))}
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
      <Row>
        {localStorage.getItem("users") ? (
          <Button onClick={handleOnClick}>Clear user detais</Button>
        ) : (
          <></>
        )}
      </Row>
    </Container>
  );
};

export default UserList;

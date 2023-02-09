import React, { memo } from 'react'
import { ButtonGroup } from 'react-bootstrap'
import { Button } from 'react-bootstrap/';
import { Link, useNavigate } from 'react-router-dom';



const PostBody = ({data ,deleteRecord}) => {
  const navigate = useNavigate();

    const deleteHandler = (item) => {
        if (window.confirm(`Do you really want to delete record: ${item.title}?`)) {
          deleteRecord(item.id);
        }
      };

    const records = data.length > 0 && data.map((el, idx) => (

        <tr key={idx}>
          <td>#{++idx}</td>
          <td>
         <Link to={`${el.id}/details`}> {el.title}</Link>
          </td>
          <td>
            <ButtonGroup aria-label="Basic example">
              <Button
                variant="success"
                onClick={() => navigate(`${el.id}/edit`)}
              >
                Edit
              </Button>
              <Button variant="danger" onClick={() =>(deleteHandler(el))}>
                Delete
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      ));
  return (
    <>
    {records}
    </>
  )
}

export default memo(PostBody)
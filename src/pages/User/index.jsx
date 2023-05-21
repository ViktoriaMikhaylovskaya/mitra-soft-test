import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Button, Spinner } from 'react-bootstrap';
import Header from "../../components/Header";
import userIcon from '../../images/user-icon.svg'

function User() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [isOpenComments, setIsOpenComments] = useState(false);

  const dataFetch = async (id) => {
    setIsLoading(true)
    const data = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json();

    setData(data);
    setIsLoading(false);
  };

  const getComments = async (postId) => {
    const data = await (
        await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)).json();

    setComments(data);
  };

  const showCommentsHandler = () => { 
    if (comments.length === 0) { 
      getComments(id);
    }
    setIsOpenComments(!isOpenComments);
  }

  useEffect(() => {
    dataFetch(id);
  }, [id]);

  return (
    <div>
      <Header onClick={() => navigate('/')} title='Your Post' buttonText='Назад' />
      
      {isLoading ? <Spinner animation="border" variant="primary" />
       : <Card style={{ width: 'auto' }}>
            <Card.Body>
              <Card.Title>
                <Card.Img
                style={{ width: '40px', marginRight: '10px', cursor: 'pointer' }}
                variant="top"
                src={userIcon}
                />
                {data.title}
              </Card.Title>
              <Card.Text>{data.body}</Card.Text>
              <Button
                variant="primary"
                style={{ marginTop: 'auto' }}
                onClick={showCommentsHandler}>
                {isOpenComments ? 'Скрыть комментарии' : 'Показать комментарии'}
              </Button>

              {isOpenComments && comments.map((el, i) => (
                <div key={id + i}>
                  <h4>{el.email}</h4>
                  <p>{el.body}</p>
                </div>
              ))}
            </Card.Body>
        </Card>
      }
    </div>
  );
}

export default User;

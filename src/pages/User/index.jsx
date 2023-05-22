import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import Header from "../../components/Header";
import userIcon from '../../images/user-icon.svg'
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../redux/actions/actionCreator";

function User() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts, comments } = useSelector((state) => state.posts)
  const [data, setData] = useState([]);
  const [isOpenComments, setIsOpenComments] = useState(false);

  const showCommentsHandler = () => { 
    if (comments.length === 0) { 
      dispatch(getComments(id));
    }
    setIsOpenComments(!isOpenComments);
  }

  useEffect(() => {
    const res = posts.filter((el) => String(el.userId) === id && el);
    setData(res)
  }, [id, posts]);

  return (
    <div>
      <Header onClick={() => navigate('/')} title='Your Post' buttonText='Назад' />
        {data.map((post) => (
          <Card style={{ width: 'auto' }} key={post.id}>
              <Card.Body>
                <Card.Title>
                  <Card.Img
                  style={{ width: '40px', marginRight: '10px', cursor: 'pointer' }}
                  variant="top"
                  src={userIcon}
                  />
                  {post.title}
                </Card.Title>
                <Card.Text>{post.body}</Card.Text>
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
        ))}
    </div>
  );
}

export default User;

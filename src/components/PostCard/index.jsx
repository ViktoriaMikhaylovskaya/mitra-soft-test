import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import userIcon from '../../images/user-icon.svg'

function PostCard({ post, commentsButtonClick, isShowComments, comments }) {
    const navigate = useNavigate();
    return (
        <Card style={{ width: 'auto' }}>
            <Card.Body>
                <Card.Title>
                    <Card.Img
                        style={{ width: '40px', marginRight: '10px', cursor: 'pointer' }}
                        onClick={() => navigate(`/user/${post.id}`)}
                        src={userIcon}
                        variant="top"
                    />
                    {post.title}
                </Card.Title>
                <Card.Text>{post.body}</Card.Text>
                <Button
                    style={{ marginTop: 'auto' }}
                    variant="primary"
                    onClick={commentsButtonClick}>
                    {isShowComments ? 'Скрыть комментарии' : 'Показать комментарии'}
                </Button>

                {isShowComments && comments.map((el, i) => (
                    <div key={post.id + i + i}>
                    <h4>{el.email}</h4>
                    <p>{el.body}</p>
                    </div>
                ))}
            </Card.Body>
        </Card>
  );
}

export default PostCard;

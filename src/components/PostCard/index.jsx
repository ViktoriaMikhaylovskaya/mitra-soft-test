import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import userIcon from '../../images/user-icon.svg'
import { CardWrapper, CardImage } from './styles';

function PostCard({ post, commentsButtonClick, isShowComments, comments = [] }) {
    const navigate = useNavigate();
    
    return (
        <CardWrapper>
            <Card.Body>
                <Card.Title>
                    <CardImage
                        onClick={() => navigate(`/user/${post.id}`)}
                        src={userIcon}
                        variant="top"
                    />
                    {post.title}
                </Card.Title>
                <Card.Text>{post.body}</Card.Text>
                <Button
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
        </CardWrapper>
  );
}

export default PostCard;

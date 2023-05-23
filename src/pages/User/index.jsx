import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import PostCard from '../../components/PostCard/index.jsx';
import { getComments, getUserPosts } from "../../redux/actions/actionCreator";
import { PageWrapper, Spinner } from './styles';

function User() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userPosts, isLoading } = useSelector((state) => state.posts);
  const [isOpenComments, setIsOpenComments] = useState(false);
  const [postWithOpenedComments, setPostWithOpenedComments] = useState();

  const showCommentsHandler = (id) => { 
    setPostWithOpenedComments(id);
    if (isOpenComments) {
      setIsOpenComments(false);
    } else { 
      dispatch(getComments(id));
      setIsOpenComments(true);
    }
  }

  useEffect(() => {
    dispatch(getUserPosts(id));
  }, [id]);

  return (
    <PageWrapper>
      <Header onClick={() => navigate('/')} title='Your Post' buttonText='Назад' />
      {isLoading && <Spinner animation="border" variant="primary" />}
      
      {!isLoading && userPosts && userPosts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          commentsButtonClick={() => showCommentsHandler(post.id)}
          isShowComments={isOpenComments && postWithOpenedComments === post.id}
        />
      ))}
    </PageWrapper>
  );
}

export default User;

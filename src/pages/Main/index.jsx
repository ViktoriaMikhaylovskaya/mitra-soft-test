import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from 'react-bootstrap';
import { PageWrapper, CardWrapper } from './styles';
import Header from "../../components/Header";
import PostCard from "../../components/PostCard";
import Menu from "../../components/Menu";
import { getComments, getPosts } from "../../redux/actions/actionCreator";

function Main() {
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.posts);
  const [isOpenComments, setIsOpenComments] = useState(false);
  const [postIdWithOpenedComments, setPostIdWithOpenedComments] = useState();
  const [isShowMenu, setIsShowMenu] = useState(false);

  const showMenuHandler = () => setIsShowMenu(!isShowMenu);

  const loadComments = (id) => { 
    setPostIdWithOpenedComments(id);
    setIsOpenComments(true);
    dispatch(getComments(id));
  }

  const showCommentsHandler = (id) => { 
    if (isOpenComments) {
      setIsOpenComments(false);
      if (id !== postIdWithOpenedComments) {
        loadComments(id);
      }
    } else {
      loadComments(id);
    }
  }

  useEffect(() => { 
    dispatch(getPosts())
  }, [])
    
  return (
    <PageWrapper>

      <Header onClick={showMenuHandler} title='Posts' buttonText='Menu' />
      <Menu isShow={isShowMenu} handleClose={showMenuHandler} />
      
      {isLoading
        ? <Spinner animation="border" variant="primary" />
        : <CardWrapper>
            {posts && posts.length > 0 && posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                commentsButtonClick={() => showCommentsHandler(post.id)}
                isShowComments={isOpenComments && postIdWithOpenedComments === post.id}
              />
            ))}
        </CardWrapper>
      }

    </PageWrapper>
  );
}

export default Main;

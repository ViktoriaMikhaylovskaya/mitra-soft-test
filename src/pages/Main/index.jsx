import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from 'react-bootstrap';
import Header from "../../components/Header";
import PostCard from "../../components/PostCard";
import Menu from "../../components/Menu";
import { getComments, getPosts } from "../../redux/actions/actionCreator";
import { PageWrapper, CardWrapper } from './styles';

function Main() {
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.posts);
  const [openedComments, setOpenedComments] = useState();
  const [isOpenComments, setIsOpenComments] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const showMenuHandler = () => setIsShowMenu(!isShowMenu);

  const showCommentsHandler = (id) => { 
    setOpenedComments(id);
    dispatch(getComments(id));
    setIsOpenComments(!isOpenComments);
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
                isShowComments={isOpenComments && openedComments === post.id}
              />
            ))}
        </CardWrapper>
      }

    </PageWrapper>
  );
}

export default Main;

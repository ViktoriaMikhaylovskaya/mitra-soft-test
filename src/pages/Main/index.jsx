import { useState, useEffect } from "react";
import { Spinner } from 'react-bootstrap';
import Header from "../../components/Header";
import PostCard from "../../components/PostCard";
import Menu from "../../components/Menu";
import { NAV_LINKS } from '../../pages/Main/constants';

function Main() {
  const [data, setData] = useState([]);
  const [comments, setComments] = useState([]);
  const [openedComments, setOpenedComments] = useState();
  const [isOpenComments, setIsOpenComments] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const showMenuHandler = () => setIsShowMenu(!isShowMenu);

  const dataFetch = async () => {
    setIsLoading(true)
    const data = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
    setData(data);
    setIsLoading(false);
  };

  const getComments = async (postId) => {
    const data = await (
        await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)).json();

    setComments(data);
  };

  const showCommentsHandler = (id) => { 
    setOpenedComments(id);
    getComments(id);
    setIsOpenComments(!isOpenComments);
  }
        

  useEffect(() => {
    dataFetch();
  }, []);
    
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: "10px", alignItems: 'center' }}>

      <Header onClick={showMenuHandler} title='Posts' buttonText='Menu' />
      <Menu isShow={isShowMenu} handleClose={showMenuHandler} links={NAV_LINKS} />
      
      {isLoading
        ? <Spinner animation="border" variant="primary" />
        : <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
          {data && data.length > 0 && data.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              commentsButtonClick={() => showCommentsHandler(post.id)}
              isShowComments={isOpenComments && openedComments === post.id}
              comments={comments}
            />
          ))}
        </div>
      }

    </div>
  );
}

export default Main;

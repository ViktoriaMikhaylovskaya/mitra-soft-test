import { useState, useEffect } from "react";
import { Nav , Offcanvas, Spinner } from 'react-bootstrap';
import Header from "../../components/Header";
import PostCard from "../../components/PostCard";

function Main() {
  const [data, setData] = useState([]);
  const [comments, setComments] = useState([]);
  const [openedComments, setOpenedComments] = useState();
  const [isOpenComments, setIsOpenComments] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => setShowMenu(false);
  const handleShow = () => setShowMenu(true);


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

      <Header onClick={handleShow} title='Posts' buttonText='Menu'/>

      <Offcanvas show={showMenu} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <img src="" alt="avatar" />
            <p>name</p>
            <p>email</p>
          </div>
          <Nav className="flex-column">
            <Nav.Item>
              <Nav.Link href="/" eventKey="main">Posts</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/aboutMe" eventKey="aboutMe">About Me</Nav.Link>
            </Nav.Item>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      
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

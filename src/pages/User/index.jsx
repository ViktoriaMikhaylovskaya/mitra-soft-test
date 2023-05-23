import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../redux/actions/actionCreator";
import PostCard from '../../components/PostCard/index.jsx';

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
          <PostCard
            key={post.id}
            post={post}
            commentsButtonClick={() => showCommentsHandler(post.id)}
            isShowComments={isOpenComments}
            comments={comments ? comments : []}
          />
        ))}
    </div>
  );
}

export default User;

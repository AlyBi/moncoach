// import React, { useState, useEffect } from "react";

// // Composants de section
// const BlogDetails: React.FC = () => {
//   return (
//     <main className="main">
//       <PageTitle />
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-8">
//             <BlogPost />
//             <BlogComments />
//             <CommentForm />
//           </div>
//           <div className="col-lg-4">
//             <Sidebar />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// const PageTitle: React.FC = () => {
//   return (
//     <div className="page-title accent-background">
//       <div className="container d-lg-flex justify-content-between align-items-center">
//         <h1 className="mb-2 mb-lg-0">Blog Details</h1>
//         <nav className="breadcrumbs">
//           <ol>
//             <li><a href="index.html">Home</a></li>
//             <li className="current">Blog Details</li>
//           </ol>
//         </nav>
//       </div>
//     </div>
//   );
// };

// const BlogPost: React.FC = () => {
//   const [post, setPost] = useState<{ title: string; content: string; img: string }>({
//     title: "",
//     content: "",
//     img: "",
//   });

//   useEffect(() => {
//     // Simuler un appel API pour récupérer les données du blog
//     const fetchBlogPost = async () => {
//       // Pour cet exemple, on utilise des données statiques
//       const blogData = {
//         title: "Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia",
//         content:
//           "Similique neque nam consequuntur ad non maxime aliquam quas... Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore.",
//         img: "assets/img/blog/blog-1.jpg",
//       };
//       setPost(blogData); // Mise à jour de l'état
//     };

//     fetchBlogPost();
//   }, []); // [] signifie qu'on le fait une seule fois après le premier rendu

//   return (
//     <section id="blog-details" className="blog-details section">
//       <div className="container">
//         <article className="article">
//           <div className="post-img">
//             <img src={post.img} alt="Blog Post" className="img-fluid" />
//           </div>
//           <h2 className="title">{post.title}</h2>
//           <div className="meta-top">
//             <ul>
//               <li className="d-flex align-items-center">
//                 <i className="bi bi-person"></i> <a href="blog-details.html">John Doe</a>
//               </li>
//               <li className="d-flex align-items-center">
//                 <i className="bi bi-clock"></i> <a href="blog-details.html"><time dateTime="2020-01-01">Jan 1, 2022</time></a>
//               </li>
//               <li className="d-flex align-items-center">
//                 <i className="bi bi-chat-dots"></i> <a href="blog-details.html">12 Comments</a>
//               </li>
//             </ul>
//           </div>

//           <div className="content">
//             <p>{post.content}</p>
//           </div>

//           <div className="meta-bottom">
//             <i className="bi bi-folder"></i>
//             <ul className="cats">
//               <li><button className="link-button">Business</button></li>
//             </ul>
//             <i className="bi bi-tags"></i>
//             <ul className="tags">
//               <li><button className="link-button">Creative</button></li>
//               <li><button className="link-button">Tips</button></li>
//               <li><button className="link-button">Marketing</button></li>
//             </ul>
//           </div>
//         </article>
//       </div>
//     </section>
//   );
// };

// const BlogComments: React.FC = () => {
//   const [comments, setComments] = useState<Array<{ id: string; author: string; date: string; text: string }>>([]);

//   useEffect(() => {
//     // Simuler un appel API pour récupérer les commentaires
//     const fetchComments = async () => {
//       const commentsData = [
//         { id: "comment-1", author: "Georgia Reader", date: "01 Jan, 2022", text: "Excellent article!" },
//         { id: "comment-2", author: "Aron Alvarado", date: "01 Jan, 2022", text: "Very informative, thanks!" },
//         { id: "comment-3", author: "Nolan Davidson", date: "01 Jan, 2022", text: "I learned a lot from this post." },
//       ];
//       setComments(commentsData); // Mise à jour de l'état
//     };

//     fetchComments();
//   }, []); // [] signifie qu'on le fait une seule fois après le premier rendu

//   return (
//     <section id="blog-comments" className="blog-comments section">
//       <div className="container">
//         <h4 className="comments-count">{comments.length} Comments</h4>
//         {comments.map((comment) => (
//           <Comment key={comment.id} id={comment.id} author={comment.author} date={comment.date}>
//             <p>{comment.text}</p>
//           </Comment>
//         ))}
//       </div>
//     </section>
//   );
// };

// interface CommentProps {
//   id: string;
//   author: string;
//   date: string;
//   children?: React.ReactNode;
// }

// const Comment: React.FC<CommentProps> = ({ id, author, date, children }) => {
//   return (
//     <div id={id} className="comment">
//       <div className="d-flex">
//         <div className="comment-img">
//           <img src="assets/img/blog/comments-1.jpg" alt="" />
//         </div>
//         <div>
//           <h5><span className="author-link">{author}</span> <button className="reply" onClick={() => {/* handle reply */ }}><i className="bi bi-reply-fill"></i> Reply</button></h5>
//           <time dateTime="2020-01-01">{date}</time>
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// const CommentForm: React.FC = () => {
//   const [comment, setComment] = useState<string>("");
//   const [name, setName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     // Logique de soumission de commentaire (exemple, affichage dans la console)
//     console.log("Comment submitted:", { name, email, comment });
//     // Réinitialiser les champs après soumission
//     setComment("");
//     setName("");
//     setEmail("");
//   };

//   return (
//     <section id="comment-form" className="comment-form section">
//       <div className="container">
//         <form onSubmit={handleSubmit}>
//           <h4>Post Comment</h4>
//           <p>Your email address will not be published. Required fields are marked *</p>
//           <div className="row">
//             <div className="col-md-6 form-group">
//               <input
//                 name="name"
//                 type="text"
//                 className="form-control"
//                 placeholder="Your Name*"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="col-md-6 form-group">
//               <input
//                 name="email"
//                 type="email"
//                 className="form-control"
//                 placeholder="Your Email*"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//           </div>
//           <div className="row">
//             <div className="col form-group">
//               <textarea
//                 name="comment"
//                 className="form-control"
//                 placeholder="Your Comment*"
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//                 required
//               ></textarea>
//             </div>
//           </div>
//           <div className="text-center">
//             <button type="submit" className="btn btn-primary">Post Comment</button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// const Sidebar: React.FC = () => {
//   return (
//     <div className="widgets-container">
//       <BlogAuthorWidget />
//       <SearchWidget />
//       <RecentPostsWidget />
//       <TagsWidget />
//     </div>
//   );
// };

// const BlogAuthorWidget: React.FC = () => {
//   return (
//     <div className="blog-author-widget widget-item">
//       <div className="d-flex flex-column align-items-center">
//         <img src="assets/img/author.jpg" alt="Author" className="img-fluid rounded-circle" />
//         <h5 className="author-name">John Doe</h5>
//         <p>Blog writer and tech enthusiast.</p>
//       </div>
//       <div className="social-icons d-flex justify-content-center">
//         <a href="https://facebook.com"><i className="bi bi-facebook"></i></a>
//         <a href="https://instagram.com"><i className="bi bi-instagram"></i></a>
//         <a href="https://linkedin.com"><i className="bi bi-linkedin"></i></a>
//       </div>
//     </div>
//   );
// };

// const SearchWidget: React.FC = () => {
//   return (
//     <div className="search-widget widget-item">
//       <h3 className="widget-title">Search</h3>
//       <form>
//         <input type="text" placeholder="Search..." />
//         <button type="submit" title="Search"><i className="bi bi-search"></i></button>
//       </form>
//     </div>
//   );
// };

// const RecentPostsWidget: React.FC = () => {
//   return (
//     <div className="recent-posts-widget widget-item">
//       <h3 className="widget-title">Recent Posts</h3>
//       <div className="post-item">
//         <h4><a href="/post/nihil-blanditiis">Nihil blanditiis at in nihil autem</a></h4>
//         <time dateTime="2020-01-01">Jan 1, 2020</time>
//       </div>
//     </div>
//   );
// };

// const TagsWidget: React.FC = () => {
//   return (
//     <div className="tags-widget widget-item">
//       <h3 className="widget-title">Tags</h3>
//       <ul>
//         <li><button className="link-button">App</button></li>
//         <li><button className="link-button">IT</button></li>
//         <li><button className="link-button">Business</button></li>
//       </ul>
//     </div>
//   );
// };

// export default BlogDetails;
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
// Import des images
import blogImage from "../assets/img/blog/blog-1.jpg";
import commentImage from "../assets/img/blog/comments-1.jpg";
import authorImage from "../assets/img/blog/blog-author.jpg";

const BlogDetails: React.FC = () => {
  return (
    <main className="main">
      <PageTitle />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <BlogPost />
            <BlogComments />
            <CommentForm />
          </div>
          <div className="col-lg-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </main>
  );
};

const PageTitle: React.FC = () => {
  return (
    <div className="page-title accent-background">
      <div className="container d-lg-flex justify-content-between align-items-center">
        <h1 className="mb-2 mb-lg-0">Blog Details</h1>
        <nav className="breadcrumbs">
          <ol>
            <li><a href="index.html">Home</a></li>
            <li className="current">Blog Details</li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

const BlogPost: React.FC = () => {
  const [post, setPost] = useState<{ title: string; content: string; img: string }>({
    title: "",
    content: "",
    img: "",
  });

  useEffect(() => {
    // Simuler un appel API pour récupérer les données du blog
    const fetchBlogPost = async () => {
      const blogData = {
        title: "Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia",
        content:
          "Similique neque nam consequuntur ad non maxime aliquam quas... Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore.",
        img: blogImage, // Utilisation de l'image importée
      };
      setPost(blogData);
    };

    fetchBlogPost();
  }, []);

  return (
    <section id="blog-details" className="blog-details section">
      <div className="container">
        <article className="article">
          <div className="post-img">
            <img src={post.img} alt="Blog Post" className="img-fluid" />
          </div>
          <h2 className="title">{post.title}</h2>
          <div className="meta-top">
            <ul>
              <li className="d-flex align-items-center">
                <i className="bi bi-person"></i> <a href="blog-details.html">John Doe</a>
              </li>
              <li className="d-flex align-items-center">
                <i className="bi bi-clock"></i> <a href="blog-details.html"><time dateTime="2020-01-01">Jan 1, 2022</time></a>
              </li>
              <li className="d-flex align-items-center">
                <i className="bi bi-chat-dots"></i> <a href="blog-details.html">12 Comments</a>
              </li>
            </ul>
          </div>

          <div className="content">
            <p>{post.content}</p>
          </div>

          <div className="meta-bottom">
            <i className="bi bi-folder"></i>
            <ul className="cats">
              <li><Link to="/Business" className="link-button">Business</Link></li>
            </ul>
            <i className="bi bi-tags"></i>
            <ul className="tags">
              <li><Link to="/marketing" className="link-button">Marketing</Link></li>
              <li><Link to="/Tips" className="link-button">Tips</Link></li>
              <li><Link to="/Business" className="link-button">Business</Link></li>

            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

const BlogComments: React.FC = () => {
  const [comments, setComments] = useState<Array<{ id: string; author: string; date: string; text: string }>>([]);

  useEffect(() => {
    // Simuler un appel API pour récupérer les commentaires
    const fetchComments = async () => {
      const commentsData = [
        { id: "comment-1", author: "Georgia Reader", date: "01 Jan, 2022", text: "Excellent article!" },
        { id: "comment-2", author: "Aron Alvarado", date: "01 Jan, 2022", text: "Very informative, thanks!" },
        { id: "comment-3", author: "Nolan Davidson", date: "01 Jan, 2022", text: "I learned a lot from this post." },
      ];
      setComments(commentsData); // Mise à jour de l'état
    };

    fetchComments();
  }, []);

  return (
    <section id="blog-comments" className="blog-comments section">
      <div className="container">
        <h4 className="comments-count">{comments.length} Comments</h4>
        {comments.map((comment) => (
          <Comment key={comment.id} id={comment.id} author={comment.author} date={comment.date}>
            <p>{comment.text}</p>
          </Comment>
        ))}
      </div>
    </section>
  );
};

interface CommentProps {
  id: string;
  author: string;
  date: string;
  children?: React.ReactNode;
}

const Comment: React.FC<CommentProps> = ({ id, author, date, children }) => {
  return (
    <div id={id} className="comment">
      <div className="d-flex">
        <div className="comment-img">
          <img src={commentImage} alt="" />
        </div>
        <div>
          <h5><button className="author-link">{author}</button> <button className="reply"><i className="bi bi-reply-fill"></i> Reply</button></h5>
          <time dateTime="2020-01-01">{date}</time>
          {children}
        </div>
      </div>
    </div>
  );
};

const CommentForm: React.FC = () => {
  const [comment, setComment] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Comment submitted:", { name, email, comment });
    setComment("");
    setName("");
    setEmail("");
  };

  return (
    <section id="comment-form" className="comment-form section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h4>Post Comment</h4>
          <p>Your email address will not be published. Required fields are marked *</p>
          <div className="row">
            <div className="col-md-6 form-group">
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Your Name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6 form-group">
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Your Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col form-group">
              <textarea
                name="comment"
                className="form-control"
                placeholder="Your Comment*"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Post Comment</button>
          </div>
        </form>
      </div>
    </section>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="widgets-container">
      <BlogAuthorWidget />
      <SearchWidget />
      <RecentPostsWidget />
      <TagsWidget />
    </div>
  );
};

const BlogAuthorWidget: React.FC = () => {
  return (
    <div className="blog-author-widget widget-item">
      <div className="d-flex flex-column align-items-center">
        <img src={authorImage} alt="Author" className="img-fluid rounded-circle" />
        <h5 className="author-name">John Doe</h5>
        <p>Blog writer and tech enthusiast.</p>
      </div>
      <div className="social-icons d-flex justify-content-center">
        <a href="https://facebook.com"><i className="bi bi-facebook"></i></a>
        <a href="https://instagram.com"><i className="bi bi-instagram"></i></a>
        <a href="https://linkedin.com"><i className="bi bi-linkedin"></i></a>
      </div>
    </div>
  );
};

const SearchWidget: React.FC = () => {
  return (
    <div className="search-widget widget-item">
      <h3 className="widget-title">Search</h3>
      <form>
        <input type="text" placeholder="Search..." />
        <button type="submit" title="Search"><i className="bi bi-search"></i></button>
      </form>
    </div>
  );
};

const RecentPostsWidget: React.FC = () => {
  return (
    <div className="recent-posts-widget widget-item">
      <h3 className="widget-title">Recent Posts</h3>
      <div className="post-item">
        <h4>Nihil blanditiis at in nihil autem</h4>
        <time dateTime="2020-01-01">Jan 1, 2020</time>
      </div>
    </div>
  );
};

const TagsWidget: React.FC = () => {
  return (
    <div className="tags-widget widget-item">
      <h3 className="widget-title">Tags</h3>
      <ul>

        <li><Link to="/App" className="link-button">App</Link></li>
        <li><Link to="/IT" className="link-button">IT</Link></li>
        <li><Link to="/Business" className="link-button">Business</Link></li>
      </ul>
    </div>
  );
};

export default BlogDetails;

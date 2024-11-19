

// import React from 'react';
// import blogImage1 from '../assets/img/blog/blog-1.jpg'; // Assurez-vous que le chemin est correct
// import blogImage2 from '../assets/img/blog/blog-2.jpg'; // Assurez-vous que le chemin est correct
// import blogImage3 from '../assets/img/blog/blog-3.jpg'; // Assurez-vous que le chemin est correct
// import blogImage4 from '../assets/img/blog/blog-4.jpg'; // Assurez-vous que le chemin est correct
// import blogImage5 from '../assets/img/blog/blog-5.jpg';
// import blogImage6 from '../assets/img/blog/blog-6.jpg';
// import Contact from './Contact';

// const Blog = () => (
//     <main className="main">
//         {/* Page Title */}
//         <div className="page-title accent-background">
//             <div className="container d-lg-flex justify-content-between align-items-center">
//                 <h1 className="mb-2 mb-lg-0">Blog</h1>
//                 <nav className="breadcrumbs">
//                     <ol>
//                         <li><a href="../pages/BlogDetails.tsx">Accueil</a></li>
//                         <li className="current">Blog</li>
//                     </ol>
//                 </nav>
//             </div>
//         </div>

//         {/* Blog Posts Section */}
//         <section id="blog-posts" className="blog-posts section">
//             <div className="container">
//                 <div className="row gy-4">
//                     <div className="col-lg-4">
//                         <article className="position-relative h-100">
//                             <div className="post-img position-relative overflow-hidden">
//                                 <img src={blogImage1} className="img-fluid" alt="Blog Post 1" />
//                                 <span className="post-date">September 17</span>
//                             </div>
//                             <div className="post-content d-flex flex-column">
//                                 <h3 className="post-title">Accusamus quaerat aliquam qui debitis facilis consequatur</h3>
//                                 <div className="meta d-flex align-items-center">
//                                     <div className="d-flex align-items-center">
//                                         <i className="bi bi-person"></i> <span className="ps-2">John Parker</span>
//                                     </div>
//                                     <span className="px-3 text-black-50">/</span>
//                                     <div className="d-flex align-items-center">
//                                         <i className="bi bi-folder2"></i> <span className="ps-2">Politics</span>
//                                     </div>
//                                 </div>
//                                 <p>In</p>
//                                 <hr />
//                                 <a href="../pages/BlogDetails.tsx" className="readmore stretched-link">
//                                     <span>En Savoir Plus</span><i className="bi bi-arrow-right"></i>
//                                 </a>
//                             </div>
//                         </article>
//                     </div>

//                     <div className="col-lg-4">
//                         <article className="position-relative h-100">
//                             <div className="post-img position-relative overflow-hidden">
//                                 <img src={blogImage2} className="img-fluid" alt="Blog Post 2" />
//                                 <span className="post-date">December 07</span>
//                             </div>
//                             <div className="post-content d-flex flex-column">
//                                 <h3 className="post-title">m aut</h3>
//                                 <div className="meta d-flex align-items-center">
//                                     <div className="d-flex align-items-center">
//                                         <i className="bi bi-person"></i> <span className="ps-2">Julia White</span>
//                                     </div>
//                                     <span className="px-3 text-black-50">/</span>
//                                     <div className="d-flex align-items-center">
//                                         <i className="bi bi-folder2"></i> <span className="ps-2">Economics</span>
//                                     </div>
//                                 </div>
//                                 <p>sit.</p>
//                                 <hr />
//                                 <a href="../pages/BlogDetails.tsx" className="readmore stretched-link">
//                                     <span>En Savoir Plus</span><i className="bi bi-arrow-right"></i>
//                                 </a>
//                             </div>
//                         </article>
//                     </div>
//                     <div className="col-lg-4">
//                         <article className="position-relative h-100">
//                             <div className="post-img position-relative overflow-hidden">
//                                 <img src={blogImage3} className="img-fluid" alt="Blog Post 2" />
//                                 <span className="post-date">December 07</span>
//                             </div>
//                             <div className="post-content d-flex flex-column">
//                                 <h3 className="post-title">m aut</h3>
//                                 <div className="meta d-flex align-items-center">
//                                     <div className="d-flex align-items-center">
//                                         <i className="bi bi-person"></i> <span className="ps-2">Julia White</span>
//                                     </div>
//                                     <span className="px-3 text-black-50">/</span>
//                                     <div className="d-flex align-items-center">
//                                         <i className="bi bi-folder2"></i> <span className="ps-2">Economics</span>
//                                     </div>
//                                 </div>
//                                 <p>sit.</p>
//                                 <hr />
//                                 <a href="../pages/BlogDetails.tsx" className="readmore stretched-link">
//                                     <span>En Savoir Plus</span><i className="bi bi-arrow-right"></i>
//                                 </a>
//                             </div>
//                         </article>
//                     </div>
//                     <div className="col-lg-4">
//                         <article className="position-relative h-100">
//                             <div className="post-img position-relative overflow-hidden">
//                                 <img src={blogImage4} className="img-fluid" alt="Blog Post 2" />
//                                 <span className="post-date">December 07</span>
//                             </div>
//                             <div className="post-content d-flex flex-column">
//                                 <h3 className="post-title">m aut</h3>
//                                 <div className="meta d-flex align-items-center">
//                                     <div className="d-flex align-items-center">
//                                         <i className="bi bi-person"></i> <span className="ps-2">Julia White</span>
//                                     </div>
//                                     <span className="px-3 text-black-50">/</span>
//                                     <div className="d-flex align-items-center">
//                                         <i className="bi bi-folder2"></i> <span className="ps-2">Economics</span>
//                                     </div>
//                                 </div>
//                                 <p>sit.</p>
//                                 <hr />
//                                 <a href="../pages/BlogDetails.tsx" className="readmore stretched-link">
//                                     <span>En Savoir Plus</span><i className="bi bi-arrow-right"></i>
//                                 </a>
//                             </div>
//                         </article>
//                     </div>
//                     <div className="col-lg-4">
//                         <article className="position-relative h-100">
//                             <div className="post-img position-relative overflow-hidden">
//                                 <img src={blogImage5} className="img-fluid" alt="Blog Post 2" />
//                                 <span className="post-date">December 07</span>
//                             </div>
//                             <div className="post-content d-flex flex-column">
//                                 <h3 className="post-title">m aut</h3>
//                                 <div className="meta d-flex align-items-center">
//                                     <div className="d-flex align-items-center">
//                                         <i className="bi bi-person"></i> <span className="ps-2">Julia White</span>
//                                     </div>
//                                     <span className="px-3 text-black-50">/</span>
//                                     <div className="d-flex align-items-center">
//                                         <i className="bi bi-folder2"></i> <span className="ps-2">Economics</span>
//                                     </div>
//                                 </div>
//                                 <p>sit.</p>
//                                 <hr />
//                                 <a href="../pages/BlogDetails.tsx" className="readmore stretched-link">
//                                     <span>En Savoir Plus</span><i className="bi bi-arrow-right"></i>
//                                 </a>
//                             </div>
//                         </article>
//                     </div>
//                     <div className="col-lg-4">
//                         <article className="position-relative h-100">
//                             <div className="post-img position-relative overflow-hidden">
//                                 <img src={blogImage6} className="img-fluid" alt="Blog Post 2" />
//                                 <span className="post-date">December 07</span>
//                             </div>
//                             <div className="post-content d-flex flex-column">
//                                 <h3 className="post-title">m aut</h3>
//                                 <div className="meta d-flex align-items-center">
//                                     <div className="d-flex align-items-center">
//                                         <i className="bi bi-person"></i> <span className="ps-2">Julia White</span>
//                                     </div>
//                                     <span className="px-3 text-black-50">/</span>
//                                     <div className="d-flex align-items-center">
//                                         <i className="bi bi-folder2"></i> <span className="ps-2">Economics</span>
//                                     </div>
//                                 </div>
//                                 <p>sit.</p>
//                                 <hr />
//                                 <a href="../pages/BlogDetails.tsx" className="readmore stretched-link">
//                                     <span>En Savoir Plus</span><i className="bi bi-arrow-right"></i>
//                                 </a>
//                             </div>
//                         </article>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     </main>
// );

// export default Blog;
import React from 'react';
import { Link } from 'react-router-dom';
import blogImage1 from '../assets/img/blog/blog-1.jpg'; // Assurez-vous que le chemin est correct
import blogImage2 from '../assets/img/blog/blog-4.jpg'; // Assurez-vous que le chemin est correct
import blogImage3 from '../assets/img/blog/blog-3.jpg'; // Assurez-vous que le chemin est correct
// import blogImage4 from '../assets/img/blog/blog-4.jpg'; // Assurez-vous que le chemin est correct
// import blogImage5 from '../assets/img/blog/blog-5.jpg';
// import blogImage6 from '../assets/img/blog/blog-6.jpg';

const Blog = () => (
    <main className="main">
        {/* Page Title */}
        <div className="page-title accent-background">
            <div className="container d-lg-flex justify-content-between align-items-center">
                <h1 className="mb-2 mb-lg-0">Blog</h1>
                <nav className="breadcrumbs">
                    <ol>
                        <li><Link to="/">Accueil</Link></li>
                        <li className="current">Blog</li>
                    </ol>
                </nav>
            </div>
        </div>

        {/* Blog Posts Section */}
        <section id="blog-posts" className="blog-posts section">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-4">
                        <article className="position-relative h-100">
                            <div className="post-img position-relative overflow-hidden">
                                <img src={blogImage1} className="img-fluid" alt="Blog Post 1" />
                                <span className="post-date">Janvier 2022</span>
                            </div>
                            <div className="post-content d-flex flex-column">
                                <h3 className="post-title">Prise de Contact en ligne</h3>
                                <div className="meta d-flex align-items-center">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-person"></i> <span className="ps-2">John Parker</span>
                                    </div>
                                    <span className="px-3 text-black-50">/</span>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-folder2"></i> <span className="ps-2">Politics</span>
                                    </div>
                                </div>
                                <p>In</p>
                                <hr />
                                {/* Utilisation du composant Link pour la navigation */}
                                <Link to="/blog-details/1" className="readmore stretched-link">
                                    <span>En Savoir Plus</span><i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                        </article>
                    </div>

                    <div className="col-lg-4">
                        <article className="position-relative h-100">
                            <div className="post-img position-relative overflow-hidden">
                                <img src={blogImage2} className="img-fluid" alt="Blog Post 2" />
                                <span className="post-date">December 2020</span>
                            </div>
                            <div className="post-content d-flex flex-column">
                                <h3 className="post-title">Accompagnement sur votre lieu de travail</h3>
                                <div className="meta d-flex align-items-center">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-person"></i> <span className="ps-2">Julia White</span>
                                    </div>
                                    <span className="px-3 text-black-50">/</span>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-folder2"></i> <span className="ps-2">Economics</span>
                                    </div>
                                </div>
                                <p>sit.</p>
                                <hr />
                                <Link to="/blog-details/2" className="readmore stretched-link">
                                    <span>En Savoir Plus</span><i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                        </article>
                    </div>
                    {/* Autres articles */}
                    <div className="col-lg-4">
                        <article className="position-relative h-100">
                            <div className="post-img position-relative overflow-hidden">
                                <img src={blogImage3} className="img-fluid" alt="Blog Post 2" />
                                <span className="post-date">Juin 2021</span>
                            </div>
                            <div className="post-content d-flex flex-column">
                                <h3 className="post-title">Rendez-vous hebdomadaire</h3>
                                <div className="meta d-flex align-items-center">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-person"></i> <span className="ps-2">Julia White</span>
                                    </div>
                                    <span className="px-3 text-black-50">/</span>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-folder2"></i> <span className="ps-2">Economics</span>
                                    </div>
                                </div>
                                <p>sit.</p>
                                <hr />
                                <Link to="/blog-details/3" className="readmore stretched-link">
                                    <span>En Savoir Plus</span><i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    </main>
);

export default Blog;

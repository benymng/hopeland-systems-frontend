import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Blogs } from "./pages/Blogs";
import { BlogPage } from "./components/BlogPage";
import { PageNotFound } from "./components/PageNotFound";
import { About } from "./pages/About";
import { Admin } from "./pages/Admin";
import { AdminSignup } from "./components/AdminSignup";
import { NewBlog } from "./pages/NewBlog";

function App() {
  return (
    <div>
      <Navigation />
      <Router>
        <Routes>
          <Route eact path="/" exact element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/newAdmin" element={<AdminSignup />} />
          <Route path="/newBlog" element={<NewBlog />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="add-blog" element={<AddBlog />} />
          <Route path="/admin/blogs/:slug" element={<AdminBlogPage />} />
          <Route path="/blogs/:slug" element={<BlogPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/delete/:slug" element={<DeletePage />} />
          <Route path="/edit/:slug" element={<EditBlog />} />
          <Route path="/add-testimonial" element={<AddTestimonial />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-signup" element={<AdminSignup />} />
          <Route path="/about" element={<AboutPage />} />  */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";

const books = [
  { id: 101, bname: "Master React", price: 670 },
  { id: 102, bname: "Deep dive into Angular", price: 800 },
  { id: 103, bname: "Mongo Essentials", price: 450 },
];

const courses = [
  { id: 104, cname: "Angular", date: "4/5/2021" },
  { id: 105, cname: "React", date: "6/3/2021" },
];

const blogs = [
  {
    id: 106,
    bgname: "React Learning",
    author: "Stephen Biz",
    title: "Welcome to learning React",
  },
  {
    id: 107,
    bgname: "Installation",
    author: "Schewzdenier",
    title: "You can install React from npm",
  },
];

const bookdet = () => (
  <ul>
    {books.map((book) => (
      <div key={book.id}>
        <h3>{book.bname}</h3>
        <h4>{book.price}</h4>
      </div>
    ))}
  </ul>
);

const content = () => (
  <ul>
    {blogs.map((blog) => (
      <div key={blog.id}>
        <h1>{blog.bgname}</h1>
        <h5>{blog.author}</h5>
        <p>{blog.title}</p>
      </div>
    ))}
  </ul>
);

const coursedet = () => (
  <ul>
    {courses.map((course) => (
      <div key={course.id}>
        <h1>{course.cname}</h1>
        <h5>{course.date}</h5>
      </div>
    ))}
  </ul>
);

const Bloggerapp = () => {
  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ borderRight: "4px solid green", paddingRight: "10px" }}>
          <h1>Course Details</h1>
          {coursedet()}
        </div>
        <div style={{ borderRight: "4px solid green", paddingRight: "10px" }}>
          <h1>Book Details</h1>
          {bookdet()}
        </div>
        <div>
          <h1>Blog Details</h1>
          {content()}
        </div>
      </div>
    </div>
  );
};

export default Bloggerapp;

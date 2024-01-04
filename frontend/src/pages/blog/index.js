import React from "react";
import { client } from "../../../sanity/lib/client";
import { PortableText } from "@portabletext/react";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";

const Index = ({ posts }) => {
  console.log(posts[0].title);
  return (
    <div>
      <h1>Welcome to a blog!</h1>
      {posts.length > 0 &&
        posts.map((post) => (
          <li key={post._id}>
            <h1>sssss</h1>
            <Link href={`/post/${encodeURIComponent(post.slug.current)}`}>
              {title}
            </Link>{" "}
            ({new Date(publishedAt).toDateString()})
          </li>
        ))}
    </div>
  );
};

export default Index;

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post"]{ _id, title, content, body}
    `);
  return {
    props: {
      posts,
    },
  };
}

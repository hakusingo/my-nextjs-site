// pages/index.tsx
import { GetStaticProps } from 'next';
import { gql } from '@apollo/client';
import client from '../lib/apolloClient';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        title
        content
      }
    }
  }
`;

const Home = ({ posts }: { posts: any[] }) => {
  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_POSTS,
  });

  return {
    props: {
      posts: data.posts.nodes,
    },
    revalidate: 10, // ISRの設定
  };
};

export default Home;

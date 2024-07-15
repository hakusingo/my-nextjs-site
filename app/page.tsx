// app/page.tsx
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

export default async function Home() {
  const { data } = await client.query({
    query: GET_POSTS,
  });

  return (
    <div>
      <h1>ブログの投稿です</h1>
      {data.posts.nodes.map((post: any, index: number) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ))}
    </div>
  );
}

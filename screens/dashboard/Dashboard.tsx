import { Posts } from "@/components/posts/Posts";
import { Box, ScrollView } from "native-base";

const post = {
  id: "2",
  showComments: false,
  author: {
    name: "The Worried Pug",
    role: "Web Developer",
    avatarUrl: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
  },
  postText: "texto do post texto do posttexto do posttexto do posttexto do posttexto do posttexto do post ",
    publishedAt: "2024-04-30T20:20:00.000Z"
};



const url = "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
export function Dashboard() {
  return (
    <ScrollView p={2}>
     <Posts content={post}/>
    </ScrollView>
  )
}

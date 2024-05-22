import { Posts } from "@/components/posts/Posts";
import { Box } from "native-base";

const post = {
  id: "2",
  showComments: false,
  author: {
    name: "The Worried Pug",
    role: "Web Developer",
    avatarUrl: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
  }
};



const url = "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
export function Dashboard() {
  return (
    <Box>
     <Posts content={post}/>
    </Box>
  )
}

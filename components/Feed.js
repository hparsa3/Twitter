import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
    const Posts =[
        {
            id: 1,
            name:"Mr.Bean",
            username:"Mr.Bean@gmail.com",
            userImg:"https://actorsareidiots.com/wp-content/uploads/2020/05/RowanAtkinson.jpg",
            img:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            text:"Nice",
            timestamp:"2 hours ago"
        },
        {
            id: 2,
            name:"Mr.Bean",
            username:"Mr.Bean@gmail.com",
            userImg:"https://actorsareidiots.com/wp-content/uploads/2020/05/RowanAtkinson.jpg",
            img:"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            text:"Perfect",
            timestamp:"1 hours ago"
        },
    ] 

  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
              <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
              <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
              <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
              <SparklesIcon className="h-5" />    
              </div>
        </div>
        <Input />
        {Posts.map((post) => (
         <Post key={post.id} post={post} />
          
        ))}
    </div>
  );
}

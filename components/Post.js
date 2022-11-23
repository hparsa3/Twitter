import {
    ChartBarIcon,
    ChatIcon,
    DotsHorizontalIcon,
    HeartIcon,
    ShareIcon,
    TrashIcon,
  } from "@heroicons/react/outline";
  import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
  import { db, storage } from "../firebase";
  import { deleteObject, ref } from "firebase/storage";

export default function Post({post}) {





  async function deletePost() {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deleteDoc(doc(db, "posts", post.id));
      deleteObject(ref(storage, `posts/${post.id}/image`));
    }
  }


  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      {/* image */}
<img className="h-11 w-11 rounded-full mr-4"

src={post.userImg} alt=""/>

      
       {/* Righ side */}
       <div className="flex-1">

       
        {/* Header */}
        <div className="flex items-center justify-between">
          
          {/* post user info */}
          <div className="flex items-center space-x-1 whitespace-nowrap">
          <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.name}</h4>
          <span className="text-sm sm:text-[15px]">@{post.username} - </span>
          <span className="text-sm sm:text-[15px] hover:underline">{post.timestamp}</span>
          </div>
           {/* dot icon */}
           <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2 " />
        


          </div>
          {/* post text */}
          <p className="text-gray-800 text-[15px sm:text-[16px] mb-2">{post.text}</p>

           {/* post image */}
            <img className="rounded-2xl mr-2" src={post.img} alt=""/>
            {/* Icons */}
            <div className="flex items-center select-none">
          <ChatIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          {session?.user.uid === post?.data().id && (
            <TrashIcon
              onClick={deletePost}
              className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"
            />
          )}
          <HeartIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"/>
          <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          </div>







          </div>
    </div>
  )
}

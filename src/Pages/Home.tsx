import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Button } from 'antd'
import Post from '../Components/Post'

const Home:React.FC = () => {
  return (
    <>
    
<Sidebar>
   <div>
    <Button>
        Add Post
    </Button>
    <div>
        <Post/>
    </div>
   </div>
</Sidebar>
    
    
    </>
  )
}

export default Home
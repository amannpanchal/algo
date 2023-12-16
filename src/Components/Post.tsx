import { CommentOutlined, LikeOutlined, SaveFilled } from '@ant-design/icons'
import { Avatar, Card, Flex, Image, Typography } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'
interface Post {
    pic : string,
    date :string,
    caption : string
}
const Post:React.FC = () => {
  return (
    <>

    <Card hoverable style={ {padding : 0 , maxWidth : "500px"}} actions={[<LikeOutlined/>,<CommentOutlined/>, <SaveFilled/>]} >
        <Flex justify='space-between'>
       <Flex> <Avatar src = "https://i.stack.imgur.com/hWV9i.png" />

<Typography style = {{padding : "2px"}} >Aman</Typography></Flex>
<Flex>Time</Flex>
        </Flex>
  <Content>
    hello world
  </Content>

    </Card>
    
    
    
    
    </>
  )
}

export default Post
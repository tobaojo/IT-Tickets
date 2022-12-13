import { useEffect, useState } from "react"
import Image from 'next/image'
import { createClient } from 'Pexels'
import classes from './UserActivity.module.css'

const client = createClient('563492ad6f91700001000001455eef9f23cc4ad793e1c8fa95dd3c70')

type users ={ 
    Id: number
    name: string
    profilePic: string
    userType: string
    status: string
}

type photos = {
    id: string,
    src: {
        original: string
    }
}

type newUsers = {
    Id: number
    name: string
    profilePic: string
    userType: string
    status: string
    url: string
}

const UserActivity = () => {
const [users, setUsers] = useState<users[]>([])
const [photos, setPhotos] = useState<photos[]>([])
const [newUsers, setNewUsers] = useState<newUsers[]>([])

const getUsers = async () => {
    const response = await fetch('data.json',)
    const usersResponse = await response.json()
    setUsers(usersResponse.users)

}
useEffect(()=> { getUsers() }, [])
useEffect(()=> { getPhotos() }, [])
useEffect(()=> { addPhotoToUser(users, photos) }, [users, photos])

const getPhotos = () => {
    const query = 'people'
    client.photos.search({query, per_page: 5}).then(response => {
        //console.log("response", response)
        setPhotos(response.photos)
    })
    //const response = await fetch('')
}

const  addPhotoToUser = (users: users[], photos: photos[]) => {
    const photoURL = photos.map((photo)=> {
        return photo.src.original
    })

   const newUsersArray =  users.map((user: users, index) => {
        return ({
            ...user, profilePic: photoURL[index]
        })
    })

    setNewUsers(newUsersArray)
}


return (
    <>
    <div className={classes.activeUsers}><h3>Active Users</h3></div>
    <ul className={classes.users}>
        {newUsers.map((user)=>{
            return <li key={user.Id}>
                <div className={classes.activeUserItem}>
                <Image src={user.profilePic} alt="Vercel Logo" width={72} height={70} loading="lazy"/>
                <span className={classes.badge}>0</span>
                <div className={classes.userInfo}><p>{user.name}</p>
                <small>{user.userType}</small></div>
                </div>
            </li>
        })}
    </ul>
    </>
    
   

)
}

export default UserActivity

// 563492ad6f91700001000001455eef9f23cc4ad793e1c8fa95dd3c70

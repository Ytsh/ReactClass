

const user = {
    name : "Safal",
    imgURL : "download.png",
    imgSize : 500
}

export default function Profile(){
    return (
        <>
            <h1> {user.name} </h1>
            <img src= {user.imgURL}  
            style={{
                width: user.imgSize,
                height: user.imgSize
            }}>

            </img>
        </>
    )
}
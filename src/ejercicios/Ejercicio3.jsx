const user = {
    name: "Iker muniain",
    imageUrl: "https://imgs.search.brave.com/6m6eI0HgGKBDmrHqcggOHLlTSYPDYr-HhDZr6l3xE6o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE1/Mzg2NzMzNy9waG90/by9iaWxiYW8tc3Bh/aW4taWtlci1tdW5p/YWluLXRoYW5rcy10/aGUtZmFucy1mb3It/dGhlaXItc3VwcG9y/dC1pbi1oaXMtbGFz/dC1nYW1lLXdlYXJp/bmctdGhlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1FcE1p/aTBuS1ZZVG5leGdU/SDhWUnpTMVVmM18x/ZGlBRFItZnI5Zllr/NWxvPQ",
    imageSize: 90,
};

export function Perfil(){
    return (
        <>
            <h1>{user.name}</h1>
            <img 
                className="avatar"
                src={user.imageUrl} 
                alt={'Foto de ' + user.name} 
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
                />
        </>
    );
}
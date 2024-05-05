export default function ImageForPost({filename, name}) {
    return (
        <div>
          
            <h1>{name}</h1>
            <img alt=""  src={"/uploads/" + filename} className="w-[120px] h-[120px]" />
        </div>
    )
}
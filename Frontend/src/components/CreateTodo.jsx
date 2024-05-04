export function CreateTodo(){
    return <div>
        <input style={{
            padding: '10px',
            margin: '10px',
            width: '30%',
            borderRadius: '5px',
            border: '1px solid #ddd'
        }} type="text" placeholder="title"/> <br />
        <input style={{
            padding: '10px',
            margin: '10px',
            width: '30%',
            borderRadius: '5px',
            border: '1px solid #ddd'
        }} type="text" placeholder="description"/> <br />
        <button>Add a Todo</button>
    </div>
}
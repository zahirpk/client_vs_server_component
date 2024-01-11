type respositry={
  id:number;
  title:string;
  completed:boolean;
}

export default  async function ServerSideRendering() {
  const response=await fetch("https://jsonplaceholder.typicode.com/todos")
  const data: respositry[]= await response.json();
  
  return (
    <>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
  );
}
